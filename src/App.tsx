import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Test} from "./test/Test";


function App() {
    return (
        <div className="App">
            <div className="menu">
                <Link to={"login"}>Логинизация</Link>
                <Link to={"auth"}>Регистрация</Link>
                <Link to={"profile"}>Профайл</Link>
                <Link to={"login/password"}>Восстановление пароля</Link>
                <Link to={"login/password/new"}>Ввод нового пароля</Link>
                <Link to={"/"}>Тест</Link>
            </div>
            <Routes>
                <Route path={"/login"} element={<h1>Логинизация</h1>}/>
                <Route path={"/auth"} element={<h1>Регистрация</h1>}/>
                <Route path={"/profile"} element={<h1>Профайл</h1>}/>
                <Route path={"/login/password"} element={<h1>Восстановление пароля</h1>}/>
                <Route path={"/login/password/new"} element={<h1>Ввод нового пароля</h1>}/>
                <Route path={"/"} element={<Test/>}/>
                <Route path={"*"} element={<h1>404</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
