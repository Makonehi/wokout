import React from 'react';
import "./Home.css"
import sssigna from "./sssigna.jpg"

export default function Home() {
    return (
        <>
        <div className="home__header">
            <h1 className="home__title">Анкета</h1>
            <p className="home__text">Я не высокий ростом, где-то 1 и 8, не курю сиги, тоже бросил</p>
            <img className="home__img" src={sssigna} alt="lox"/>
        </div>

        </>
    );
}
