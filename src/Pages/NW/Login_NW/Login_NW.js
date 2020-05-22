import React from 'react';
import Logo from '../../../Images/Images_NW/logo_text.png';
import { Link } from 'react-router-dom';
import './Login_NW.scss'

export class Login_NW extends React.Component {


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
        console.log(this.state.loginByPw);

        fetch("http://10.58.4.172:8000/account/signin", {
            method: "POST",
            body: JSON.stringify({
                'email': this.state.loginById,
                'password': this.state.loginByPw,
            }),
        })
        .then((response) => response.json())
        .then((response) => {
          if (response.token) {
            console.log(response);
            localStorage.setItem("wtw-token", response.token);
            this.props.history.push("/main_nw");
          } else if (!response.token) {
            alert("올바른 회원이 아닙니다");
          }
        });
    };

    render(){
        return (
            <div className="outsideBox">
                <div>
                    <img className="logo" src={Logo} />    
                </div>
                <div className = "login_container">
                    <div>
                        <input 
                           onChange={this.typeId}
                           className="login-by-id"
                           type="text"
                           placeholder="전화번호, 사용자 이름 또는 이메일"
                        />
                    </div>
                    <div>
                        <input 
                           onChange={this.typePw}
                           className="type-password"
                           type="password"
                           placeholder="비밀번호"
                        />
                    </div>
                </div>
                <div>
                    <button 
                        className="login-btn" 
                        onClick={this.clickEvent}
                        type="submit"
                    >
                    로그인
                    </button>
                </div>  
                <div className="forgetPW">
                    <p className="alert"></p>
                    <p className="forgetPW"> 비밀번호를 잊으셨나요?</p>
                </div>
            </div>
        )
    }
}


export default Login_NW;