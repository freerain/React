import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";
import Cookies from 'universal-cookie';

function Login()
{
    const [content, setContent] = useState();
    var cookies = new Cookies();

    function NeedAuthorize()
    {
        setContent(
            <div>
                <NavLink className="link" to="/Modal">Вход</NavLink>
            </div>
        );
    }

    function WriteInfo()
    {
        setContent(
            <div>
                <div>
                    {cookies.get("Name")}
                </div>
                <div>
                    <a href="#" onClick={LogOut}>Выход</a>
                </div>
            </div>
        );
    }

    function LogOut()
    {
        cookies.remove("Token");
        cookies.remove("Name");
        cookies.remove("Id");
        window.location.reload();
    }

    useEffect(() => {
        let IsAuthorize = cookies.get("Name") != undefined;

        if(IsAuthorize)
            WriteInfo();
        else
            NeedAuthorize();
    }, []);

        return(
            <div>
                {content}
            </div>
        );
}

export default Login;