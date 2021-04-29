import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import {ToDo} from "./ToDoListPage";


export function App() {
    return (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/todo' component={ToDo}/>

            </Switch>
        </BrowserRouter>

    </>
    )
}