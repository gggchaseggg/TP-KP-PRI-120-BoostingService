import React from "react";
import style from "./Login.module.scss";

const Login = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.radioButtons}>
                <input type="radio" name="logReg" id={style.login} defaultChecked={true} />
                <label htmlFor={style.login}
                    id={style.loginLabel}
                    >Вход
                </label>
                <input type="radio" name="logReg" id={style.register} />
                <label htmlFor={style.register}
                    id={style.registerLabel}
                    >Регистрация
                </label>
            </div>
            <div className={style.loginForm}>
                <form>
                    <input type="email"
                        className={style.input}
                        placeholder={"E-mail"}
                        autoComplete={"off"} />
                    <input type="password"
                        className={style.input}
                        placeholder={"Пароль"}
                        autoComplete={"off"} />
                    <button type="submit" className={style.submit}>Войти</button>
                </form>
            </div>
            <div className={style.registerForm}>
                <form>
                    <input type="nickname"
                        className={style.input}
                        placeholder={"Имя пользователя"}
                        autoComplete={"off"} />
                    <input type="email"
                        className={style.input}
                        placeholder={"E-mail"}
                        autoComplete={"off"} />
                    <input type="phone"
                        className={style.input}
                        placeholder={"Номер телефона"}
                        autoComplete={"off"} />
                    <input type="password"
                        className={style.input}
                        placeholder={"Пароль"}
                        autoComplete={"off"} />
                    <button type="submit" className={style.submit}>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}
export default Login;
