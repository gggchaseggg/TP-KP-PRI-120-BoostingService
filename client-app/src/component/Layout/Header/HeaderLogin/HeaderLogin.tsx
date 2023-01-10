import React from 'react';
import style from "./HeaderLogin.module.scss";
import PATHS from "../../../../data/paths";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

type UserProfileTypes = {
    id: number;
    nickname: string;
    email: string;
    phone: string;
    password: null;
    role: string;
}

const HeaderLogin = () => {
    const [user, setUser] = React.useState<UserProfileTypes>();
    const [name, setName] = React.useState<string | undefined>();

    React.useEffect(() => {
        var email = localStorage.getItem("email")
        if (email !== null) axios.get(`/api/account/getnickname/${email}`).then(({ data }) => setName(data))
    }, [user])

    return (
        <>
            {name ?
                <Link to={PATHS.PROFILE} className={style.colorLink}>
                    <div>
                    <span>{
                       name
                        }</span>
                    </div>
                </Link>
                :
                <Link to={PATHS.LOGIN} className={style.colorLink}>
                    <div>
                    <span>Войти</span>
                    </div>
                </Link>
            }


        </>
    );
};

export default HeaderLogin;
