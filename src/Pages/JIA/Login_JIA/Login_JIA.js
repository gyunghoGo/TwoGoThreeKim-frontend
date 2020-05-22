import React from "react";
import "./Login_JIA.scss";
import logo from "../../../Images/Images_JIA/logo_text.png";
import phone from "../../../Images/Images_JIA/phone.png";
import facebook from "../../../Images/Images_JIA/facebook.png";
import ios from "../../../Images/Images_JIA/ios.png";
import googleplay from "../../../Images/Images_JIA/googleplay.png";

class Login_JIA extends React.Component {
  state = {
    loginById: "",
    loginByPw: "",
    btState: true,
  };

  typeId = (e) => {
    this.setState({
      loginById: e.target.value,
    });
  };

  typePw = (e) => {
    this.setState({
      loginByPw: e.target.value,
    });
  };

  clickEvent = () => {
    console.log(this.state.loginById);
    console.log(this.state.loginBy);

    fetch("http://10.58.4.172:8000/account/signin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        'email': this.state.loginById,
        'password': this.state.loginByPw,
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          console.log(response);
          localStorage.setItem("wtw-token", response.token);
          this.props.history.push("/main_jia");
        } else if (!response.token) {
          alert("올바른 회원이 아닙니다");
          this.props.history.push("/signup_jia");
        }
      });
  };

  informationHandler = () => {
    if (
      this.state.loginById.includes("@") &&
      this.state.loginByPw.length >= 4
    ) {
      this.setState({ btState: false });
    } else {
      this.setState({ btState: true });
    }
  };

  render() {
    return (
      <div className="Login-jia">
        <main>
          <article className="bothside">
            <div className="login-page">
              <div className="left-side">
                <img src={phone} alt="phone-img" />
              </div>
              <div className="right-side">
                <div className="login-box">
                  <h1>
                    <img
                      className="insta-logo"
                      src={logo}
                      alt="instagram-logo"
                    />
                  </h1>
                  <div className="user-login">
                    <input
                      onChange={this.typeId}
                      onKeyUp={this.informationHandler}
                      className="login-by-id"
                      type="text"
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                    />
                    <input
                      onChange={this.typePw}
                      onKeyUp={this.informationHandler}
                      className="type-password"
                      type="password"
                      placeholder="비밀번호"
                    />
                    <button
                      className={
                        this.state.btState ? "login-bt" : "login-bt-login"
                      }
                      onClick={this.clickEvent}
                      type="submit"
                    >
                      로그인
                    </button>
                    <div className="seperate">
                      <div className="seperator"></div>
                      <div className="or">또는</div>
                      <div className="seperator"></div>
                    </div>
                    <a alt="facebook" href="a" className="facebook">
                      <img
                        className="facebook-icon"
                        src={facebook}
                        alt="facebook-icon"
                      />
                      Facebook으로 로그인
                    </a>
                    <br />
                    <a alt="haveYouForgot" href="a" className="forget">
                      비밀번호를 잊으셨나요?
                    </a>
                  </div>
                </div>
                <div className="signup-box">
                  <p>
                    계정이 없으신가요?{" "}
                    <a href="a" className="link-to-sign">
                      가입하기
                    </a>
                  </p>
                </div>
                <div className="download">
                  <div className="inform-download">앱을 다운로드하세요</div>
                  <div className="download-icon">
                    <a>
                      <img
                        alt="appleicon"
                        className="icon-img apple"
                        src={ios}
                      />
                    </a>
                    <a>
                      <img alt="icon" className="icon-img" src={googleplay} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }
}

export default Login_JIA;
