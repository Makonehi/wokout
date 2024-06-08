import React, {useState} from 'react';
import "./Hage.css";
export default function Hage() {


    const[text, setText] = useState("Пиши уже!");
    const[value, setValue] = useState("");


    function Tap(){
    alert("Hello Tony!!!");

    }

    function Info(name, age, city){
        alert(`
        Имя: ${name}
        Возраст: ${age}
        Город: ${city}`);
    }



    function Texts(event){
        // setText(event.target.value)
        setTimeout(()=>{
            setText(event.target.value)
        },500)
    }

    function HeadliChange(event){
        setValue(event.target.value)
    }


    return (
        <>
            <button onClick={Tap}>Click me!</button>
            <div>
                <button onClick={()=>{Info("Tom", 12, "Lose Angeles")}}>Click Tom</button>
                <button onClick={()=>{Info("Montana", 18, "Praga")}}>Click Montana</button>
                <button onClick={()=>{Info("Bob", 25, "Valencia")}}>Click Bob</button>
            </div>

            <div>
                <input type="text" onChange={Texts} />
                <p>{text}</p>
            </div>

            <div>
                <select onChange={HeadliChange}>
                    <option>Python</option>
                    <option>JavaScript</option>
                    <option>C++/C/C#</option>
                    <option>Ruby</option>
                </select>
                <p>Ваш выбрали: {value}</p>
            </div>
        </>

    );
}

