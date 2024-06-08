import React from 'react';
import "./Reg.css"
export default function Reg({setUser}) {

    function Regisrt(event){
        event.preventDefault()
        const obg = {
            name: event.target.elements.name.value,
            email: event.target.elements.email.value,
            password: event.target.elements.password.value
        }
        localStorage.setItem("user",JSON.stringify(obg));
        console.log(setUser(obg));
    }

    return (
        <>
            <form action="#" onSubmit={Regisrt}>
                <div>
                    <label htmlFor="">Ваш Hик: </label>
                    <input className="input" name="name" type="text" placeholder="Nik"/>
                </div>
                <div>
                    <label htmlFor="">Ваш email: </label>
                    <input className="input" name="email" type="email" placeholder="Email"/>
                </div>
                <div>
                    <label htmlFor="">Ваш password: </label>
                    <input className="input" name="password" minLength="8" type="password" placeholder="Password"/>
                </div>
                <button type="submit">Войти</button>
                <button type="reset">Очистить</button>
            </form>



        </>
    );
}

