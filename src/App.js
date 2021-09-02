import React, {useEffect, useState} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Products from './components/Products';
import Orders from './components/Orders';
import Reports from './components/Reports';
import Sales from './components/Sales';
import LoginModal from './components/LoginModal';

function App() {
  const links = [
      {displayName: 'Главная', url: '/Main', component: Main},
      {displayName: 'Товары', url: '/Products', component: Products},
      {displayName: 'Заказы', url: '/Orders', component: Orders},
      {displayName: 'Отчеты', url: '/Reports', component: Reports},
      {displayName: 'Акции', url: '/Sales', component: Sales}
  ];

  return(
    <div>
      <BrowserRouter>
        <Navbar links={links}/>
        <Switch>
            <div className="container">
              {
                links.map(link => {
                  return <Route path={link.url} component={link.component}/>
                })
              }
              <Route path="/Modal" component={LoginModal}/>
            </div>
        </Switch>
       <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
