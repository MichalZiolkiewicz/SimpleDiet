import React from 'react';
import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';

import Test from "../components/Test";
//w miejscu tych komponentów będzie jeden i będzie on odpalany z różnymi propsami a mianowicie będzie to odpowiedni fraegment jsona/plik json

const Content = () => {
    return(
        <main>
            <Switch>
                <Route exact path="/">
                    <Test name="moaj dietka" />
                </Route>
                <Route path="/michal">
                    <Test name="michal" />
                </Route>
                <Route path="/tomek">
                    <Test name="tomek" />
                </Route>
                <Route path="/daniel">
                    <Test name="daniel" />
                </Route>
                <Redirect from="*" to="/"/>
            </Switch>
        </main>
    );
}

export default Content;