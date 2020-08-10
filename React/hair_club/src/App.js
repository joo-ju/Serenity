import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id' : 1,
    'image' : 'http://placeimg.com/64/64/any',
    'name' : '김주희',
    'birthday' : '970717',
    'gender' : '여자',
    'job' : '대학생',
  },
  {
    'id' : 2,
    'image' : 'http://placeimg.com/64/64/any',
    'name' : '김주영',
    'birthday' : '980708',
    'gender' : '여자',
    'job' : '대학생'
  },
  {
    'id' : 3,
    'image' : 'http://placeimg.com/64/64/any',
    'name' : '홍길동',
    'birthday' : '990918',
    'gender' : '남자',
    'job' : '대학생'
  }
]
function App() {
  return (
    <div>
      {
        // 프로그래밍을 할 때 흔히 사용하는 반복문--> key를 사용하지 않으면 오류남.
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    <Customer
      id={customers[0].id}
      image={customers[0].image}
      name={customers[0].name}
      birthday={customers[0].birthday}
      gender={customers[0].gender}
      job={customers[0].job}
    />
    <Customer
      id={customers[1].id}
      image={customers[1].image}
      name={customers[1].name}
      birthday={customers[1].birthday}
      gender={customers[1].gender}
      job={customers[1].job}
    />
    <Customer
      id={customers[2].id}
      image={customers[2].image}
      name={customers[2].name}
      birthday={customers[2].birthday}
      gender={customers[2].gender}
      job={customers[2].job}
    />
    </div>
    // <div className="gray-background">
    //   <img src={logo} lat="logo"/>
    //   <h2>Let's develop management system!</h2>
    // </div>
  );
}

export default App;
