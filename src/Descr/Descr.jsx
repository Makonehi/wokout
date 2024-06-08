import React from 'react';
import "./Descr.css";

export default function Descr() {
    return (
        <>

            <div className="descr__content">
                <h1 className="descr__title">React</h1>
                <p className="descr__text" >React - это JavaScript библиотека для разработки пользовательских интерфейсов.
                Она позволяет создавать интерактивные пользовательские интерфейсы,
                которые могут динамически обновляться в зависимости от изменений данных,
                без необходимости перезагрузки страницы.
                </p>
            </div>
        </>
    );
}

