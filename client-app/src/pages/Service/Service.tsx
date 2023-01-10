import React, { useState } from "react";
import style from "./Service.module.scss";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormCalibrationValueType = {

    calibStartMMR: number;
    calibEndMMR: number;
    calibCountLP: number;
    calibCost: number;

}

export default function Service() {

    const navigate = useNavigate();

    const {
        handleSubmit: calibrationHandleSubmit,
        reset: calibrationReset,
        setError: calibrationSetError
    } = useForm<FormCalibrationValueType>();

    let order = {
        startMMR: null,
        endMMR: null,
        countMMR: null,
        cost: null
    }
    const [width, setWidth] = useState(300);
    const [mmrnow, setMmrnow] = useState(0);
    const [lastmmr, setLastmmr] = useState(1);
    const [lpcountgame, setLpcountgame] = useState(3);
    const [countwins, setCountwins] = useState(3);

    const changeWidth = (event: any) => {
        setWidth(event.target.value);
    };

    const changeMMR = (event: any) => {
        setMmrnow(event.target.value);
    };

    const lastMMR = (event: any) => {
        setLastmmr(event.target.value);
    };

    const lp = (event: any) => {
        setLpcountgame(event.target.value);
    };

    const wins = (event: any) => {
        setCountwins(event.target.value);
    };

    return (
        <div className={style.wrapper}>
            <div className={style.radioButtons}>
                <input type="radio" name="logReg" id={style.boost} defaultChecked={true} />
                <label htmlFor={style.boost}
                    id={style.boostLabel}
                >Буст
                </label>
                <input type="radio" name="logReg" id={style.calibration} />
                <label htmlFor={style.calibration}
                    id={style.calibrationLabel}
                >Калибровка
                </label>
                <input type="radio" name="logReg" id={style.lp} />
                <label htmlFor={style.lp}
                    id={style.lpLabel}
                >LP
                </label>
            </div>

            <div className={style.boostForm}>
                <form>
                    <div className={style.forDisplay}>
                        <div className={style.forDisplay1}>
                            <label htmlFor="mmrnow">Текущий ММР: </label>
                            <input className={style.input} type="text" id="mmrnow" name="mmrnow" placeholder={"0"} autoComplete={"off"} onChange={changeMMR}  value={ mmrnow }/>
                        </div>
                        <div className={style.forDisplay2}>
                            <input
                                type='range'
                                onChange={changeWidth}
                                min={300}
                                max={7000}
                                step={50}
                                value={width}
                            >
                            </input>
                            <h5>+{width}</h5>
                        </div>
                        <div className={style.forDisplay3}>
                            <label>Конечный ММР: </label>
                            <h5>{// @ts-ignore
                                Number.parseInt(width) + Number.parseInt(mmrnow)
                            }</h5>
                        </div>
                    </div>
                    <div className={style.forDisplay4}>
                        <h5>{width * 2.5 * 0.66} руб.</h5>
                        <h6 className={ style.discount }>{width * 2.5} руб.</h6>
                        <h5>{5 * (Math.trunc(width / 1000) + 1)}-{5 * (Math.trunc(width / 1000) + 1)+3} дней </h5>
                    </div>
                    <button type="submit" className={style.submit}>Оформить заказ</button>
                </form>
            </div>

            <div className={style.calibrationForm}>
                <form>
                    <div className={style.forDisplayCalibration}>
                        <div className={style.forDisplay1}>
                            <label htmlFor="lastmmr">Предыдущий ММР: </label>
                            <input className={style.input} type="text" id="mmrnow" name="mmrnow" placeholder={"0"} autoComplete={"off"} onChange={lastMMR} value={lastmmr} />
                        </div>
                        <div className={style.forDisplay5}>
                            <label>Конечный ММР: </label>
                            <h5>{// @ts-ignore
                                Number.parseInt(lastmmr) + 400
                            }</h5>
                            <label> или больше:) </label>
                        </div>
                    </div>
                    <div className={style.forDisplay4}>
                        <h5>1088 руб.</h5>
                        <h6 className={style.discount}>1200 руб.</h6>
                        <h5>от 1 до 3 дней</h5>
                    </div>
                    <button type="submit" className={style.submit}>Оформить заказ</button>
                </form>
            </div>

            <div className={style.lpForm}>
                <form>
                    <div className={style.forDisplayCalibration}>

                        <div className={style.forDisplayCountGames}>
                            <label>Количество игр:</label>
                            <input
                                type='range'
                                onChange={lp}
                                min={3}
                                max={5}
                                step={1}
                                value={lpcountgame}
                            >
                            </input>
                            <h5>{lpcountgame}</h5>
                        </div>
                    </div>
                    <div className={style.forDisplay4}>
                        <h5>{lpcountgame*50} руб.</h5>
                        <h6 className={style.discount}>{lpcountgame * 60} руб.</h6>
                        <h5>от 1 до 2 дней</h5>
                    </div>
                    <button type="submit" className={style.submit}>Оформить заказ</button>
                </form>
            </div>
        </div>
    );
}