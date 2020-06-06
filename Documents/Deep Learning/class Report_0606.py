%matplotlib inline

import numpy as np
import matplotlib.pyplot as plt
from sklearn import datasets

# -- Iris 데이터 읽어 들이기 --
iris_data = datasets.load_iris()
input_data = iris_data.data
correct = iris_data.target
n_data = len(correct)  # 샘플 수

# -- 입력 데이터 표준화 --
ave_input = np.average(input_data, axis=0)
std_input = np.std(input_data, axis=0)
input_data = (input_data - ave_input) / std_input

# -- 정답을 원-핫 인코딩으로 변경 --
correct_data = np.zeros((n_data, 3))
for i in range(n_data):
    correct_data[i, correct[i]] = 1.0

# -- 훈련 데이터와 테스트 데이터 --
index = np.arange(n_data)
index_train = index[index%2 == 0]
index_test = index[index%2 != 0]

input_train = input_data[index_train, :]  # 훈련데이터 입력
correct_train = correct_data[index_train, :]  # 훈련데이터 정답
input_test = input_data[index_test, :]  # 테스트데이터 입력
correct_test = correct_data[index_test, :]  # 테스트데이터 정답

n_train = input_train.shape[0]  # 훈련데이터 샘플 수
n_test = input_test.shape[0]  # 테스트데이터 샘플 수

# -- 각 설정 값 --
n_in = 4  # 입력층 뉴런 수
n_mid = 25  # 은닉층 뉴런 수
n_out = 3  # 출력층 뉴런 수

wb_width = 0.1  # 가중치와 편향 설정을 위한 정규분포 표준편차
eta = 0.01  # 학습률
epoch = 1000
batch_size = 8
interval = 100  # 경과 표시 간격

# 0:SGD, 1:adagrad, 2:SGD+dropout, 3:adagrad+dropout
overfitting = 1 


# -- 각 층의 부모 클래스 생성 --
class BaseLayer:
    def __init__(self, n_upper, n):
        self.w = wb_width * np.random.randn(n_upper, n)  # 가중치
        self.b = wb_width * np.random.randn(n)  # 편향
        
        if overfitting == 1:
            self.h_w = np.zeros(( n_upper, n)) + 1e-8
            self.h_b = np.zeros(n) + 1e-8
        elif overfitting == 3:
            self.h_w = np.zeros(( n_upper, n)) + 1e-8
            self.h_b = np.zeros(n) + 1e-8
        
        
    def update_adagard(self, eta):      
        self.h_w += self.grad_w * self.grad_w
        self.w -= eta / np.sqrt(self.h_w) * self.grad_w
        
        self.h_b += self.grad_b * self.grad_b
        self.b -= eta / np.sqrt(self.h_b) * self.grad_b    
        
    
    def update(self, eta):
        self.w -= eta * self.grad_w
        self.b -= eta * self.grad_b       
        
   

# -- 은닉층 --
class MiddleLayer(BaseLayer):
    def forward(self, x):
        self.x = x
        self.u = np.dot(x, self.w) + self.b
        self.y = np.where(self.u <= 0, 0, self.u) # ReLU
    
    def backward(self, grad_y):
        delta = grad_y * np.where(self.u <= 0, 0, 1)  # ReLU 미분

        self.grad_w = np.dot(self.x.T, delta)
        self.grad_b = np.sum(delta, axis=0)
        
        self.grad_x = np.dot(delta, self.w.T) 
        

# -- 출력층 --
class OutputLayer(BaseLayer):     
    def forward(self, x):
        self.x = x
        u = np.dot(x, self.w) + self.b
        self.y = np.exp(u)/np.sum(np.exp(u), axis=1, keepdims=True)  # 소프트맥스 함수

    def backward(self, t):
        delta = self.y - t
        
        self.grad_w = np.dot(self.x.T, delta)
        self.grad_b = np.sum(delta, axis=0)
        
        self.grad_x = np.dot(delta, self.w.T) 

# -- 드롭아웃 --
class Dropout:
    def __init__(self, dropout_ratio):
        self.dropout_ratio = dropout_ratio  # 뉴런을 제거할 확률

    def forward(self, x, is_train):  # is_train: 학습할 때는 True
        if is_train:
            rand = np.random.rand(*x.shape)  # 입력과 같은 형태의 난수 행렬
            self.dropout = np.where(rand > self.dropout_ratio, 1, 0)  # 1:유효 0:무효
            self.y = x * self.dropout  # 뉴런을 무작위로 무효화
        else:
            self.y = (1-self.dropout_ratio)*x  # 테스트시에는 출력을 낮춤
        
    def backward(self, grad_y):
        self.grad_x = grad_y * self.dropout  # 제거된 뉴런에는 역전파 시키지 않음


# -- 각 층의 초기화 --
middle_layer_1 = MiddleLayer(n_in, n_mid)
middle_layer_2 = MiddleLayer(n_mid, n_mid)
output_layer = OutputLayer(n_mid, n_out)

if overfitting == 3:
    dropout_1 = Dropout(0.5)
    dropout_2 = Dropout(0.5)

# -- 순전파 --
def forward_propagation_adagard_dropout(x, is_train):
    middle_layer_1.forward(x)
    dropout_1.forward(middle_layer_1.y, is_train)
    middle_layer_2.forward(dropout_1.y)
    dropout_2.forward(middle_layer_2.y, is_train)
    output_layer.forward(dropout_2.y)

def forward_propagation(x):
    middle_layer_1.forward(x)
    middle_layer_2.forward(middle_layer_1.y)
    output_layer.forward(middle_layer_2.y)

# -- 역전파 --
def backpropagation_adagard_dropout(t):
    output_layer.backward(t)
    dropout_2.backward(output_layer.grad_x)
    middle_layer_2.backward(dropout_2.grad_x)
    dropout_1.backward(middle_layer_2.grad_x)
    middle_layer_1.backward(dropout_1.grad_x)

def backpropagation(t):
    output_layer.backward(t)
    middle_layer_2.backward(output_layer.grad_x)
    middle_layer_1.backward(middle_layer_2.grad_x)


# -- 가중치와 편향 수정 --
def uppdate_wb_adagard():
    middle_layer_1.update_adagard(eta)
    middle_layer_2.update_adagard(eta)
    output_layer.update_adagard(eta)
    
def uppdate_wb():
    middle_layer_1.update(eta)
    middle_layer_2.update(eta)
    output_layer.update(eta)

# -- 오차계산 --
def get_error(t, batch_size):
    return -np.sum(t * np.log(output_layer.y+ 1e-7)) / batch_size  # 교차엔트로피 오차

# -- 오차 기록용 --
train_error_x = []
train_error_y = []
test_error_x = []
test_error_y = []


# -- 학습과 경과 기록 --
n_batch = n_train // batch_size  # 1에포크 당 배치 수
for i in range(epoch):
    
    if overfitting == 3:
        # -- 오차 계측--  
        forward_propagation_adagard_dropout(input_train, False)
        error_train = get_error(correct_train, n_train)
        forward_propagation_adagard_dropout(input_test, False)
        error_test = get_error(correct_test, n_test)
    else:
        # -- 오차 계산 --  
        forward_propagation(input_train)
        error_train = get_error(correct_train, n_train)
        forward_propagation(input_test)
        error_test = get_error(correct_test, n_test)
        
    # -- 오차 기록 -- 
    test_error_x.append(i)
    test_error_y.append(error_test) 
    train_error_x.append(i)
    train_error_y.append(error_train) 
    
    # -- 경과 표시 -- 
    if i%interval == 0:
        print("Epoch:" + str(i) + "/" + str(epoch),
              "Error_train:" + str(error_train),
              "Error_test:" + str(error_test))

    # -- 학습 -- 
    index_random = np.arange(n_train)
    np.random.shuffle(index_random)  # 인덱스 임의섞기
    for j in range(n_batch):
        
        # 미니배치 샘플 추출
        mb_index = index_random[j*batch_size : (j+1)*batch_size]
        x = input_train[mb_index, :]
        t = correct_train[mb_index, :]
        
        if overfitting == 3:
            # 순전파와 역전파
            forward_propagation_adagard_dropout(x, True)
            backpropagation_adagard_dropout(t)
             
            # 가중치와 편향 수정
            uppdate_wb_adagard()
            
        else:
            # 순전파와 역전파
            forward_propagation(x)
            backpropagation(t)
            
            if overfitting == 1:
                uppdate_wb_adagard()
            else:
                uppdate_wb() 
            
#         if overfitting == 1:
#              # 가중치와 편향 수정
#             uppdate_wb_adagard()
#         elif overfitting == 3: 
#             # 가중치와 편향 수정
#             uppdate_wb_adagard()
#         else:
#             # 가중치와 편향 수정
#             uppdate_wb() 

            
plt.plot(train_error_x, train_error_y, label="Train")
plt.plot(test_error_x, test_error_y, label="Test")
plt.legend()

plt.xlabel("Epochs")
plt.ylabel("Error")

plt.show()