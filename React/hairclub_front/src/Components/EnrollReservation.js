// 예약 등록하기
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../resources/vendor/fontawesome-free/css/all.min.css";
// import "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i";
import "../resources/css/sb-admin-2.min.css";
import "../resources/vendor/datatables/dataTables.bootstrap4.min.css";

import { Helmet } from "react-helmet";

export default class EnrollReservation extends Component {
  render = () => (
    <div class="col-lg-8 h-50">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="text-center m-auto ">
              <h5 class="m-0 font-weight-bold text-primary pt-2 mr-4">
                신규 예약
              </h5>
            </div>
          </form>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="p-3">
                <form class="user">
                  <div class="form-group row">
                    <div class="col-sm-4 mb-0 mb-sm-0">
                      <p class="col-sm-4 small mb-1">이름</p>
                      <input
                        disabled
                        type="text"
                        class="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="이름"
                      />
                    </div>
                    <div class="col-sm-4">
                      <p class="col-sm-4 small mb-1">전화번호</p>
                      <input
                        disabled
                        type="text"
                        class="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="전화번호"
                      />
                    </div>
                    <div class="col-sm-4">
                      <p class="small mb-1">담당자</p>
                      <select class="dropdown form-control col-sm-12 mb-sm-0">
                        <div class="dropdown-menu col-sm-6 animated--fade-in">
                          <option class="dropdown-item" value="personal">
                            원장님
                          </option>
                          <option class="dropdown-item" value="organization">
                            홍쌤
                          </option>
                        </div>
                      </select>
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <p class="small mb-1">예약일</p>
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="예약일"
                      />
                    </div>
                    <div class="col-sm-4">
                      <p class="small mb-1">예상 시간</p>
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="예상 시간"
                      />
                    </div>
                    <div class="col-sm-4">
                      <div class="small mb-1">스타일 분류</div>
                      <div class="dropdown mb-4 ">
                        <button
                          class="btn btn-primary col-sm-12 dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          스타일 분류
                        </button>
                        <div
                          class="dropdown-menu animated--fade-in"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <div class="dropdown no-arrow mb-4">
                        <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          스타일 분류
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div> */}
                    {/* </div> */}
                  </div>

                  <div class="form-group">
                    <div class="small mb-1">메모</div>
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="150자"
                    />
                  </div>

                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <div class="small mb-1">방문일 확인 문자 수신</div>

                      <div class="custom-control float-left col-sm-5 custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label
                          class="custom-control-label text-lg"
                          for="customCheck"
                        >
                          동의
                        </label>
                      </div>
                      <div class="custom-control col-sm-5 float-left custom-checkbox small">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck"
                        />
                        <label
                          class="custom-control-label text-lg"
                          for="customCheck"
                        >
                          거부
                        </label>
                      </div>
                    </div>
                  </div>
                </form>

                {/* <!-- <div class="text-center">
                      <a class="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="login.html">Already have an account? Login!</a>
                    </div> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //{" "}
    //     </div>
    //   </div>
    // </div>
  );
}
