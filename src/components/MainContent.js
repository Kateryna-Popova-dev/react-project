import React from "react";
import Person from "./PersonInfo/Person";
import Description from "./PersonInfo/Description";
import Movies from "./Movies/Movies";
import Awards from "./Awards/Awards";
import Title from "./Title";
import {Photos} from "./Photos/Photos";

export function MainContent() {
    return (
        <main>
            <div className="container">
                <Title
                    id="person"
                    class="caption"
                    name="”Капитан Джек Воробей, талисман Тима Бертона и один из самых высокооплачиваемых актеров на свете”"/>
                <Person></Person>
                <Description></Description>
                <Title id="movies" name="Лучшие фильмы"/>
                <Movies></Movies>
                <Title id="awards" name="Награды и номинации Джонни Деппа"/>
                <Awards></Awards>
                <Title id="photos" name="Фотографии с Джонни Депом"></Title>
                <Photos></Photos>
                <footer>
                    <div><p>Все права запрещены Tortuga© Inc.</p></div>
                </footer>
            </div>
        </main>
    );
}

export default MainContent;