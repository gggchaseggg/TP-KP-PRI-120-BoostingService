import axios from "axios";
import React from "react";
import style from "./BoosterProfile.module.scss";

type UserProfileTypes = {
    nickname: string;
    email: string;
    phone: string;
    orders: OrderWaitingTypes[];
}

type OrderWaitingTypes = {
    id: number;
    startMMR: number|null;
    endMMR: number | null;
    countLP: number | null;
    cost: number;
    status: string;
}



const BoosterProfile = () => {

    const [user, setUser] = React.useState<UserProfileTypes>();
    const [newOrder, setNewOrder] = React.useState<UserProfileTypes>();


    React.useEffect(() => { axios.get(`api/booster/getBoosterInfo?email=${localStorage.getItem("email")}`).then(({ data }) => setUser(data)) }, [])
    React.useEffect(() => { axios.get(`api/booster/getNewBoosterInfo?email=${localStorage.getItem("email")}`).then(({ data }) => setNewOrder(data)) }, [])

    return (
        <div>
            <div className={style.wrapper_row}>
                <div className={style.wrapper1_1}>
                    <div>
                        <img src="/img/Profile/logo.jpg" alt="лого" className={style.logo} />
                    </div>
                    <div className={style.infoUser}>
                        <h3>{user?.nickname}</h3>
                        <h5>{user?.email}</h5>
                        <h5>{user?.phone}</h5>
                    </div>
                </div>
                <div className={style.wrapper1_2}>
                    <div>
                        <h4>Текущий заказ</h4>
                    </div>

                    <div>
                    </div>
                </div>
            </div>
            <div>
                {user?.orders.length !== 0 ? <table className={style.table}>
                    <thead>
                        <tr>
                            <td>Начальный ММР</td>
                            <td>Конечный ММР</td>
                            <td>Количество игр SingleDraft</td>
                            <td>Стоимость</td>
                            <td>Статус</td>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.orders.map((item, idx) => <tr key={idx + "userKey"} className={style.userItem}>
                            <td className={style.userItem__login}>{item.startMMR}</td>
                            <td className={style.userItem__login}>{item.endMMR}</td>
                            <td className={style.userItem__login}>{item.countLP}</td>
                            <td className={style.userItem__login}>{item.cost}</td>
                            <td className={style.userItem__login}>{item.status}</td>
                        </tr>)}
                    </tbody>
                </table> : <h2>Нет заказов</h2>}
            </div>
            <div>
                {newOrder?.orders.length !== 0 ? <table className={style.table}>
                    <thead>
                        <tr>
                            <td>Начальный ММР</td>
                            <td>Конечный ММР</td>
                            <td>Количество игр SingleDraft</td>
                            <td>Стоимость</td>
                            <td>Статус</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {newOrder?.orders.map((item, idx) => <tr key={idx + "userKey"} className={style.userItem}>
                            <td className={style.userItem__login}>{item.startMMR}</td>
                            <td className={style.userItem__login}>{item.endMMR}</td>
                            <td className={style.userItem__login}>{item.countLP}</td>
                            <td className={style.userItem__login}>{item.cost}</td>
                            <td className={style.userItem__login}>{item.status}</td>
                            <td>
                                <button onClick={() => { axios.get(`/api/booster/getNewOrder?email=${localStorage.getItem("email")}&orderid=${item.id}`) }}>Присвоить
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table> : <h2>Нет новых заявок</h2>}
            </div>
        </div>
    );
}
export default BoosterProfile;
