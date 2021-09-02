import React, { useState, useEffect } from 'react'
import { NavLink, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';

function LoginModal()
{
    const URL = "https://backend.phaeton.kz/api/Account/Login";

    const[content, setContent] = useState();
    const[errors, setErrors] = useState();
    const[redirect, setRedirect] = useState();
    const[signInData, setSignInData] = useState({
        login: "", 
        password: ""
    });
    const[signUpData, setSignUpData] = useState({
        Name: "",
        Surname: "",
        Phone: "",
        PersonalNumber: "",
        CompanyName: ""
    });
    
    function setCookie(json)
    {
        const cookies = new Cookies();
        cookies.set("Token", json.token);
        json.agents.map(agent => {
            cookies.set("Name", agent["name"]);
            cookies.set("Id", agent["id"]);
        });
    }

    function SignIn()
    {   
        let IsSuccess = false;
        setErrors("");
        fetch(URL,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(signInData)
        })
        .then(responce => {
            if(responce.status == 200)
            {
                IsSuccess = true;
                setRedirect(<Redirect to="/Main"/>);
                window.location.reload();
                return responce.json();
            }
            else if(responce.status == 400)
            {
                IsSuccess = false;
                return responce.json();
            }
        })
        .then((json) => {
            if(IsSuccess)
                setCookie(json);
            else
                setErrors(json.errors);
        })
    }

    function SignOut()
    {
        console.console.log("Регистрация...");
    }

    function GetIn()
    {
        setContent(
            <div className="content">
                <form id="SignInForm" onSubmit={SignIn}>
                    <div>
                        <input type="text"  placeholder="Логин" onChange=
                        { e => 
                            { let temp = {...signInData}; 
                            signInData.login = e.target.value; 
                            setSignInData(temp)}
                        }/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" onChange=
                        { e => 
                            { let temp = {...signInData}; 
                            signInData.password = e.target.value; 
                            setSignInData(temp)}
                        }/>
                    </div>
                    <div>
                        <button form="SignInForm" type="button" onClick={SignIn}>Войти</button>
                    </div>
                </form>
            </div>
        );
    }

    function GetUp()
    {
        setContent(
            <div className="content">
                <form>
                    <div>
                        <input type="text" placeholder="Имя"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Фамилия"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Номер телефона"/>
                    </div>
                    <div>
                        <input type="text" placeholder="ИИН"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Предприятие"/>
                    </div>
                    <div>
                        <button>Регистрация</button>
                    </div>
                </form>
            </div>
        );
    }

    useEffect(() => 
    {
        GetIn();
    }, [])

    return(
        <div className="blackFon">
            <div className="modalWindow">
                <div className="rele">
                    <a href="#" onClick={GetIn}>
                        <div>
                            Вход
                        </div>
                    </a>
                    <a href="#" onClick={GetUp}>
                        <div>
                            Регистрация
                        </div>
                    </a>
                </div>
                <div>
                    {content}
                </div>
                <div>
                    {
                        errors                
                    }
                </div>
                <div>
                    <NavLink to="/Main">Назад</NavLink>
                </div>
            </div>
            {
                redirect
            }
        </div>
    );
}

export default LoginModal;