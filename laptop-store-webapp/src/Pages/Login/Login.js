import React, { useState } from 'react'
import { useHistory } from 'react-router';
import '../../CSS/Login.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';


export default function Login({login,userCookie}) {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [reqpass, setreqpass] = useState(false);
    const [reqsdt, setreqsdt] = useState(false);
    const [signup, setsignup] = useState(false);
    const [user, setuser] = useState([]);
    const [sdt, setsdt] = useState("");
    let history = useHistory();
    function handleClick(e) {
        e.preventDefault();
        if(!username.includes('@') || !password.length >= 6) return;
        else {
            axios.get(`https://localhost:44343/data/user/login/${username}/${password}`)
                           .then(res => {
                                if(res.status === 404) alert("Tài khoản hoặc mật khẩu không đúng");
                                else {
                                    login(res.data);
                                    history.goBack();
                                }
                           })
                           .catch(err => console.log("Login:"+err));
        }             
    }
    function handleClickReqPass(e)
    {
        e.preventDefault();
        if(!username.includes('@')) return;
        else
        {
            axios.get(`https://localhost:44343/data/user/email=${username}`)
                        .then(res=>{
                            if(res.status === 404) alert("Email chưa từng được đăng ký!!!");
                            else{
                                setuser(res.data);
                                enableReqSdt();
                            }
                        })
                        .catch(err => {console.log("Login: "+err)});
        }
    }
    function handleClickReqSdt(e)
    {
        if(sdt==user.sdt) 
        {
            alert("Trùng nè");
            enableReqPass();
        } else alert("Bug");
    }
    function getsdt(event)
    {
        setsdt(event.target.value);
    }
    function getusername(event) {
        setusername(event.target.value)
    }
    function getpass(event) {
        setpassword(event.target.value)
    }
    function enableReqPass()
    {
        setreqpass(!reqpass);
        setreqsdt(false);
    }
    function enableSignUp()
    {
        setsignup(!signup);
    }
    function enableReqSdt()
    {
        setreqsdt(!reqsdt);
    }
    function sendReqpass(e)
    {
        enableReqSdt();
    }
    function confSdt(e)
    {
        e.preventDefault();
        enableReqPass();
        enableReqSdt();
    }
        return (
            <div className="layout-page-login">
                <div className={reqpass===false && signup===false ?"customer-login":"customer-login-hide"} >
                    <span className="header-login" >
                        <h1 className="title-login">Đăng nhập</h1>
                    </span>
                    <div classname="user-box ">
                        <form>
                            <div className="login-login">
                                <span class="login-icon"> <i class="fa fa-envelope"></i> </span>
                                <input type="email" placeholder="Email" class="login-input" name="username" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="password login-login">
                                <span class="login-icon"> <i class="fa fa-lock"></i> </span>
                                <input type="password" placeholder="Password"class="login-input" onChange={(event) => getpass(event)}></input>
                            </div>
                            <div className="button-login-login">
                                <input class="button login-button" type="submit" value="Đăng nhập" onClick={(e) => handleClick(e)}></input>
                            </div>
                            <div className="login-recovery">
                                <a href="#" onClick={()=>enableReqPass()}> Quên mật khẩu? </a>
                                hoặc 
                                <a href="#" onClick={()=>enableSignUp()}> Đăng ký</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={reqpass===true ?"req-pass":"req-pass-hidden"}>
                    <span className="header-login">
                        <h1 className="title-login">Phục hồi mật khẩu</h1>
                    </span>
                    <div className="reqpass">
                        <div className={reqsdt===false?"reqpass-form":"reqpass-form-hide"}>
                            <div className="reqpass-email login-login">
                                <span class="login-icon"> <i class="fa fa-envelope"></i> </span>
                                <input type="email" placeholder="Email" class="login-input" name="username" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="reqpass-act-button">
                                <button class="button reqpass-button" onClick={(e) => handleClickReqPass(e)}>Xác nhận</button>
                                <button class="button reqpass-cancel-button" onClick={()=>enableReqPass()}>Hủy</button>
                            </div>
                        </div>
                        <div className={reqsdt===true?"reqsdt-form":"reqsdt-form-hide"}>
                            <div className="reqpass-email login-login">
                                <span class="login-icon"> <i class="fa fa-phone"></i> </span>
                                <input type="tel" placeholder="Số điện thoại" class="login-input" name="sdt" onChange={(event) => getsdt(event)}></input>
                            </div>
                            <div className="reqpass-act-button">
                            <button class="button reqpass-button" onClick={() => handleClickReqSdt()}>Xác nhận</button>
                                <button class="button reqpass-cancel-button" onClick={()=>enableReqSdt()}>Hủy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={signup===true?"sign-up":"sign-up-hide"}>
                    <span className="header-login">
                        <h1 className="title-login">Đăng ký tài khoản</h1>
                    </span>
                    <div className="sign-up-form">
                        <form>
                        <div>
                            <span class="user-icon"> <i class="fa fa-user"></i> </span>
                                <input type="text" placeholder="Họ" class="login-input" name="firstname" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="username login-login">
                                <span class="login-icon"> <i class="fa fa-envelope"></i> </span>
                                <input type="email" placeholder="Email" class="login-input" name="username" onChange={(event) => getusername(event)}></input>
                            </div>
                            <div className="password login-login">
                                <span class="login-icon"> <i class="fa fa-lock"></i> </span>
                                <input type="password" placeholder="Password"class="login-input" onChange={(event) => getpass(event)}></input>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
               
        )
}
