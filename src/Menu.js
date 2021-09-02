import React from 'react'
import { NavLink} from "react-router-dom";

function Menu(props)
{
    return(
        <div className="menu">
            {
                props.links.map(link => {
                    return <NavLink className="link" to={link.url}>{link.displayName}</NavLink>
                })
            }
        </div>
    );
}

export default Menu;