import React from "react";
import "./SignUp_GH.scss";
import logo from "../../../Images/Images_GH/logo_text.png";

class SignUp_GH extends React.Component{
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

    inputValueNum = (event) => {
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

    handleClick =() =>{
        console.log("휴대폰 번호 및 이멜주소는? " + this.state.SignUpNum);
        console.log("이름은? " + this.state.SignUpName);
        console.log("사용자 이름은? " + this.state.SignUpNick);
        console.log("비밀번호는? " + this.state.SignUpPw);
    }

    btnColorChange = (event) => {
        if (this.state.SignUpEmail.includes('@') && this.state.SignUpPw.length >= 5 ){
            this.setState({btnColor : false});
        }else {
            this.setState({ btnColor : true});
        }
    }

    handleClickEvent=()=>{
        fetch('http://10.58.4.172:8000/account/signup', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                'email':this.state.SignUpEmail,
                'name':this.state.SignUpName,
                'nick_name':this.state.SignUpNick,
                'password':this.state.SignUpPw
            })
        })
        .then(response => response.json())
        .then(response => 
            {
            if (response.message === "SUCCESS"){
                alert("따란~ 회원가입 성공하였습니다. *^^*")
                this.props.history.push('/gh')
            }else {
                alert("회원가입 다시해라")
            }
         }
        )
    }



   
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
                    <input onChange ={this.inputValueNum} onKeyUp ={this.btnColorChange} type="text" className= "input-text-num" placeholder="휴대폰 번호 또는 이메일 주소"/>
                    <input onChange ={this.inputValueName} type="text" className="input-text-name" placeholder="성명"/>
                    <input onChange ={this.inputValueNick} type="text" className="input-text-nick" placeholder="사용자 이름"/>
                    <input onChange ={this.inputValuePw} onKeyUp ={this.btnColorChange} type="password" className="input-text-pw" placeholder="비밀번호"/>
                </div>
                <button onClick={this.handleClickEvent} className ={this.state.btnColor ? 'btn-signup' : 'btn-signup-color-change'}>가입</button>
                <div className = "addText">가입하면 instagram의 <strong>약관, 데이터 정책</strong> 및 <strong>쿠키 정책</strong>에 동의하게 됩니다. </div>
            </div>
        )
    }
}
export default SignUp_GH;