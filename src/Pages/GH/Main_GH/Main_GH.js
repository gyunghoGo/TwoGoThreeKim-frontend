import React from 'react';
import './Main_GH.scss';
import Logo_text from '../../../Images/Images_GH/logo_text.png';
import JongsinImg from '../../../Images/Images_GH/jongsinImg.png';
import Jongsin01 from '../../../Images/Images_GH/jongsin01.jpg';
import Goimg from '../../../Images/Images_GH/goimg.jpg';
import Bears from '../../../Images/Images_GH/bears.jpg';
import Travel from '../../../Images/Images_GH/여미.jpg';
import Art from '../../../Images/Images_GH/art.jpg';
import Imammin from '../../../Images/Images_GH/iammin.jpg';
import Yuna from '../../../Images/Images_GH/yuna.jpg';
import Moon from '../../../Images/Images_GH/moon.jpg';
import Son from '../../../Images/Images_GH/son.jpg';
import Heart from '../../../Images/Images_GH/heart.png';

class Main_GH extends React.Component{
    constructor(){
        super();
        this.state = {
            Comment :" "
        };
    }

    typeClick=(e)=>{

    }

    inputValue = (event) => {
        this.setState({
            Comment:event.target.value        
        })
        // console.log(this.state);
    }

    handleOnChange = e =>{
        this.setState({
            Comment:this.inputValue
        })
    }

    handleKeyPress = e  => {
        if (e.key === 'Enter'){
            alert("엔터키 먹었다!!!!");
        };
    }

    render(){
        return(
            <div className="Main_GH">
                <nav>
                    <div className="nav">
                        <div className="nav-left-logo">
                            <div className="nav-left-logo-left">
                                <img alt=" " src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"/>
                            </div>
                            <div className="nav-left-logo-right">
                                <img alt = "logo_text" src={Logo_text}/>
                                </div>
                        </div>
                        <div className="nav-mid"><input tpye="text" className= "nav-mid-input" placeholder="검색"/></div>
                        <div className="nav-right-logo">
                            <ul>
                                <il><img alt=" " src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/></il>
                                <il><img alt=" " src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/></il>
                                <il><img alt=" " src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/></il>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className = "container">
                    <div className = "feeds">
                        <div className = "feeds-left">
                                <div className = "feeds-top">
                                        <div className ="feeds-top-left">              
                                            <img alt ="jongsin02" src={JongsinImg}/>
                                            <div><strong>yoonjongshin</strong></div>
                                        </div>
                                        <div className="feeds-top-right-dots">
                                            <img alt=" " src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"/>
                                        </div>
                                </div>
                                <div className = "feeds-left-first-img">
                                    <img alt="jongsin01" src={Jongsin01}/>
                                </div>
                                <div className = "feeds-left-bottom-icon">
                                        <div className ="feeds-left-bottom-L-icon">
                                            <img alt ="heart" src={Heart}/>
                                            <img alt=" " src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                                            <img alt=" " src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>
                                        </div>
                                        <div className="feeds-left-bottom-R-icon">
                                            <img alt=" " src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/>
                                        </div>
                                </div>
                                <div className = "like-img">
                                        <div><img alt ="goimg" src = {Goimg}/></div>
                                        <p><strong>__goguard</strong>님 <strong>외 3651명</strong>이 좋아합니다.</p>
                                </div>
                                <div className = "text-container">
                                        <div><strong>yoonjongshin</strong>지난 2월.#1 #이방인프로젝트... 더 보기</div>
                                        <div className="commentAll">댓글 329개 모두 보기</div>
                                        <div><strong>kgg1025</strong>코로나19의 최전선에서 건강하길 바랍니다.</div>
                                        <div ><strong>js2020__</strong>벌써 5월이네요.. </div>
                                </div>
                                <div className = "bb">42분 전</div>
                                <div className = "comment_button">
                                        <div className = "comment_event">
                                        <input  onKeyPress={this.handleKeyPress} className = "comment_value" name = "Comment"  type="text" placeholder="댓글 달기..."/>
                                        </div>  
                                        <button onClick={this.typeClick} className = "comment_upload_button">게시</button>
                                </div>
                        </div>

                        <div className = "feeds-right">
                                <div className = "feeds-right-top">
                                        <img alt="goimg" src={Goimg}/>
                                        <div>
                                            <p><strong>__goguard</strong></p>
                                            <p className="instaName">경호</p>
                                        </div>
                                </div>

                                <div className = "feeds-right-mid"> 
                                        <div className="feeds-right-mid-topText">
                                            <div className="story">스토리</div>
                                            <div className="all">모두 보기</div>
                                        </div>
                                        <div className = "feeds-right-mid-imgs">
                                            <div className="feeds-right-mid-first-img">
                                                <img alt="bears" src={Bears}/>
                                                <div className="first-img-text">
                                                    <p><strong>doosanbears.1982</strong></p>
                                                    <p className="first-time">10분 전</p>
                                                </div>
                                            </div>
                                            <div className="feeds-right-mid-second-img">
                                                <img alt="travel" src={Travel}/>
                                                <div className="second-img-text">
                                                    <p><strong>travelholic_insta</strong></p>
                                                    <p className="second-time">1시간 전</p>
                                                </div>
                                            </div>
                                            <div className="feeds-right-mid-third-img">
                                                <img alt="art" src={Art}/>
                                                <div className="third-img-text">
                                                    <p><strong>arte_design__</strong></p>
                                                    <p className="third-time">4시간 전</p>
                                                </div>
                                            </div>
                                            <div className="feeds-right-mid-fourth-img">
                                                <img alt = "imammin" src={Imammin}/>
                                                <div className="fourth-img-text">
                                                    <p><strong>iammingki</strong></p>
                                                    <p className="fourth-time">8시간 전</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className = "feeds-right-bom">
                                        <div className="feeds-right-bom-topText">
                                                <div className="recommend">회원님을 위한 추천</div>
                                                <div className="all">모두 보기</div>
                                        </div>
                                        <div className="feeds-right-bom-first-img">
                                                <img alt ="yuna" src={Yuna}/>
                                                <div className="feeds-right-bom-first-img-text">
                                                    <p><strong>yunakim</strong></p>
                                                    <p className="text">uni_guni 님 외 8명이... </p>
                                                </div>
                                                <div className="follow">팔로우</div>
                                        </div>
                                        <div className="feeds-right-bom-second-img">
                                                <img alt="moon" src={Moon}/>
                                                <div className="feeds-right-bom-second-img-text">
                                                    <p><strong>moonjaein</strong></p>
                                                    <p className="text">15.08.90 님 외 16명이... </p>
                                                </div>
                                                <div className="follow">팔로우</div>
                                        </div>
                                        <div className="feeds-right-bom-third-img">
                                                <img alt="son" src={Son}/>
                                                <div className="feeds-right-bom-third-img-text">
                                                    <p><strong>hm_son7</strong></p>
                                                    <p className="text">nam__kh 님 외 7명이... </p>
                                                </div>
                                                <div className="follow">팔로우</div>
                                        </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default Main_GH;
