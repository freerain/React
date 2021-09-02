import React, {useState, useEffect} from 'react'
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Main(){
  const [content, setContent] = useState();
  const [redirect, setRedirect] = useState();
  const URL = "https://backend.phaeton.kz/api/Advert/news";
  let cookies = new Cookies();
  
  function waiting()
  {
    setContent(
      <div>
        <h1>Ждите.......</h1>
      </div>
    );
  }

  function writeContent(items)
  {
    setContent(
      <div>
        {
          
        }
      </div>
    );
  }

  useEffect(() => {
    waiting();

    let obj = {
      take: 6,
      agentId: cookies.get("Id"),
      offset: 0
    };

    fetch(URL + "?take=6&agentId=" + cookies.get("Id") + "&offset=0",{
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(response => {
      if(response.status == 200)
        return writeContent(response.json()); 
      else 
        return alert("Error!");
    })
  }, [])

  return(
    <div>
      {redirect}
      {content}
    </div>
  );
}

export default Main;