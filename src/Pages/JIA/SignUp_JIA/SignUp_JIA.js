import React from "react";
import "./SignUp_JIA.scss";
import logo from "../../../Images/Images_JIA/logo_text.png";

class SignUp_JIA extends React.Component{
    constructor() {
        super();
        this.state ={
        SignUpEmail : "",
        SignUpName : "",
        SignUpNick : "",
        SignUpPw : "",
        btnColor : true
    }
}

    inputValueEmail = (event) => {
        this.setState({
            SignUpEmail:event.target.value
        })
    }

    inputValueName = (event) => {
        this.setState({
            SignUpName:event.target.value
        })
    }

    inputValueNick = (event) => {
        this.setState({
            SignUpNick:event.target.value
        })
    }

    inputValuePw = (event) => {
        this.setState({
            SignUpPw:event.target.value
        })
    }

    buttonColorChange = () => {
        console.log(this.state.SignUpEmail)
        if (this.state.SignUpEmail.includes('@') && this.state.SignUpPw.length >= 5 )
        {this.setState({btnColor : false});
        }else {
            this.setState({ btnColor : true});
        }
    }

    signUpHandler=()=>{
        console.log(this.state.SignUpEmail);
        console.log(this.state.SignUpName);
        console.log(this.state.SignUpNick);
        console.log(this.state.SignUpPw);

 
            fetch("http://10.58.4.172:8000/account/signup", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                'email' : this.state.SignUpEmail,
                'name' : this.state.SignUpName,
                'nick_name' : this.state.SignUpNick,
                'password' : this.state.SignUpPw
              })
            })
              .then(response => response.json())
              .then(response =>  
                {if (response.message=="SUCCESS") {
                    alert("회원가입에 성공하였습니다 로그인을 해주세요");
                    this.props.history.push("/");
                } else {
                  alert("중복된 회원정보가 있습니다.");
                  this.props.history.push("/signup_jia");
                }
                }
                )
            //  
              };
          
            

    
       
    render(){
        return(
            <div className = "SignUp">
                <div className = "logo_img"><img alt ="Logo_img" src = {logo}/></div>
                <div className = 'text-type'>친구들의 사진과 동영상을 보려면 가입을 하세요.</div>
                <button className = "btn-facebook-login">Facebook으로 로그인</button>
                <div className = 'mid'>
                    <div className = 'mid-line-01'></div>
                    <div className ='or'><strong>또는</strong></div>
                    <div className = 'mid-line-02'></div>
                </div>
                <div className = "input_wrap">
                    <input onChange={this.inputValueEmail} onKeyUp={this.buttonColorChange} type="text" className= "input-text-num" placeholder="휴대폰 번호 또는 이메일 주소"/>
                    <input onChange={this.inputValueName} type="text" className="input-text-name" placeholder="성명"/>
                    <input onChange={this.inputValueNick} type="text" className="input-text-nick" placeholder="사용자 이름"/>
                    <input onChange={this.inputValuePw}  onKeyUp={this.buttonColorChange}  type="password" className="input-text-pw" placeholder="비밀번호"/>
                </div>
                <button onClick={this.signUpHandler} 
                 className={this.state.btnColor ? 'btn-signup' : 'btn-signup-color-change'}> 가입</button>
                              <div className = "addText">가입하면 instagram의 <strong>약관, 데이터 정책</strong> 및 <strong>쿠키 정책</strong>에 동의하게 됩니다. </div>
            </div>
        )
    }
}
export default SignUp_JIA;