import React, { Component } from "react";
import style from "./Main.module.scss";
import CarouselBox from "../../component/CarouselBox/CarouselBox";
import achiv1 from "./img/achiv2.png"
import achiv2 from "./img/achiv2.png"

export default class Main extends Component {
    render(){
        return (
            <div className={style.colorBack}>
                <CarouselBox />
                <div className={style.achivments}>
                    <div className={style.achiv_rect}>
                    </div>
                    <h1> Преимущества </h1>
                    <div className={style.achivments_elem}>
                        <div className={style.achivments_block}>
                            <img src="/img/protect.svg"/>
                            <p>Купить или продать - здесь безопасно!</p>
                        </div>
                        <div className={style.achivments_block}>
                            <img src="/img/stars.svg" />
                            <p>Осуществляем любые мечты</p>
                        </div>
                        <div className={style.achivments_block}>
                            <img src="/img/podium.svg" />
                            <p>Команда профессионалов!</p>
                        </div>
                        <div className={style.achivments_block}>
                            <img src="/img/cup.svg" />
                            <p >Многолетний стаж, тысячи клиентов!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}