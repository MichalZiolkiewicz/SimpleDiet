import React from 'react';
import { NavLink } from "react-router-dom";
import "../Style/ScrolleMenu.sass";

const list = [
    {name: "Dieta Michała", path: "/michal"},
    {name: "Moja dieta", path: "/"},
    {name: "Dieta Tomka", path: "/tomek", exact: true},
    {name: "Dieta Daniela", path: "/daniel"},
]
//takie rzeczy muszą być późnij na serwerze


const ScrollMenu = () => {

    const item = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return(
      <>
          <nav className="userChangeNav">
              <ul>
                  {item}
              </ul>
          </nav>
      {/*    tutaj będzie wybieranie dnia który się wyświetla*/}
      </>
    );
}

//pierwszy item musiałby mieć padding na jakieś 30% ekranu
//tutaj bezie wyświetlany komponent z przewijaniem dnia
// i komponent z przewijaniem osoby

export default ScrollMenu;