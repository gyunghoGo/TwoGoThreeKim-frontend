import React from 'react';
import './Login_GH.scss';
import Logo from '../../../Images/Images_GH/logo_text.png';


class Login_GH extends React.Component{
    state ={
        loginEmail : "",
        loginPw : "",
        btnColor : true
    }



    inputValueId = (event) => {
        this.setState({
            loginEmail:event.target.value
        })
    }
    inputValuePw = (event) => {
        this.setState({
            loginPw:event.target.value
        })
    }
    handleKey=()=>{
        console.log("이메일주소다"+ this.state.loginEmail);
        console.log("이메일주소다"+ this.state.loginPw);
    }
    buttonColorChange = () => {
        if (this.state.loginEmail.includes('@') && this.state.loginPw.length >= 4 ){
            this.setState({btnColor : false});
        }else {
            this.setState({ btnColor : true});
        }
    }



    clickEvent = () => {
        // console.log(this.state.loginEmail)
        // console.log(this.state.loginPw)
        fetch("", {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
        },
          body: JSON.stringify({
            email: this.state.loginEmail,
            password: this.state.loginPw
          })
        })
        // .then(response => console.log("response"))
          .then(response => response.json())
          .then(response => {
        
            if (response.token) {
              localStorage.setItem("wtw-token", response.token);
              this.props.history.push("/main_gh");
            } else if (!response.token) {
              alert("올바른 회원이 아닙니다");
              this.props.history.push("/signup_gh");
            }
          });
      };

    render(){
           return( 
        <div>
           <div className = "Login_GH">
                <div className = "logo_img"><img alt ="Logo_img" src = {Logo}/></div>
                <div className = "input_wrap">
                    <input onChange = {this.inputValueId} onKeyUp ={this.buttonColorChange} type="text" className= "textId" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                    <input onChange = {this.inputValuePw} onKeyUp ={this.buttonColorChange} type="password" className="password" placeholder="비밀번호"/>
                </div>
                <button className ={this.state.btnColor ? 'buttonColor' : 'buttonChangeColor'} onClick = {this.clickEvent} >로그인</button>
                {/* <button className ={`buttonColor ${this.state.btnColor ? ' ' : 'buttonChangeColor'}`}>로그인</button> */}
                <div className = 'mid'>
                    <div className = 'mid-line-01'></div>
                    <div className ='or'><strong>또는</strong></div>
                    <div className = 'mid-line-02'></div>
                </div>
                <div className = "addText">비밀번호를 잊으셨나요?</div>
                {/* <div className="secondBlock"></div> */}
            </div>
            
        </div>
        )
    }
}
export default Login_GH;