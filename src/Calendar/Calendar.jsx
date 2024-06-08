import React from 'react';
import "./Calendar.css";

export default function Calendar() {
    return (
        <>
            <div className="container">
                <div className="border">
                    <div className="button_header">
                        <p className="button" onClick={""}>←</p>
                        <h1 className="Cal__h1">Календарь</h1>
                        <p className="button" onClick={""}>→</p>
                    </div>
                    <table className="table">
                        <div className="table__cal">

                            <tr className="cal__tr">
                                <th className="cal__th">ПН</th>
                                <th className="cal__th">ВТ</th>
                                <th className="cal__th">СР</th>
                                <th className="cal__th">ЧТ</th>
                                <th className="cal__th">ПТ</th>
                                <th className="cal__th">СБ</th>
                                <th className="cal__th">ВС</th>
                            </tr>

                            <tr className="cal__tr">
                                <th className="cal__th">1</th>
                                <th className="cal__th">2</th>
                                <th className="cal__th">3</th>
                                <th className="cal__th">4</th>
                                <th className="cal__th">5</th>
                                <th className="cal__th">6</th>
                                <th className="cal__th">7</th>
                            </tr>
                            <tr className="cal__tr">
                                <th className="cal__th">8</th>
                                <th className="cal__th">9</th>
                                <th className="cal__th">10</th>
                                <th className="cal__th">11</th>
                                <th className="cal__th">12</th>
                                <th className="cal__th">13</th>
                                <th className="cal__th">14</th>
                            </tr>
                            <tr className="cal__tr">
                                <th className="cal__th">15</th>
                                <th className="cal__th">16</th>
                                <th className="cal__th">17</th>
                                <th className="cal__th">18</th>
                                <th className="cal__th">19</th>
                                <th className="cal__th">20</th>
                                <th className="cal__th">21</th>
                            </tr>
                            <tr className="cal__tr">
                                <th className="cal__th">22</th>
                                <th className="cal__th">23</th>
                                <th className="cal__th">24</th>
                                <th className="cal__th">25</th>
                                <th className="cal__th">26</th>
                                <th className="cal__th">27</th>
                                <th className="cal__th">28</th>
                            </tr>
                            <tr className="cal__tr">
                                <th className="cal__th">29</th>
                                <th className="cal__th">30</th>
                                <th className="cal__th">31</th>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
        </>
    );
}

