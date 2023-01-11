import axios from "axios";
import React from "react";
import style from "./UserProfile.module.scss";

type UserProfileTypes = {
    nickname: string;
    email: string;
    phone: string;
    orders: OrderWaitingTypes[];
}

type OrderWaitingTypes = {
    id: number;
    startMMR: number | null;
    endMMR: number | null;
    countLP: number | null;
    cost: number;
    status: string;
}


const UserProfile = () => {

    const [user, setUser] = React.useState<UserProfileTypes>();
    const [newOrder, setNewOrder] = React.useState<OrderWaitingTypes>();

    React.useEffect(() => { axios.get(`api/user/getUserInfo?email=${localStorage.getItem("email")}`).then(({ data }) => setUser(data)) }, [])
    React.useEffect(() => { axios.get(`api/user/getNewOrderInfo?email=${localStorage.getItem("email")}`).then(({ data }) => setNewOrder(data)) }, [])

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
                        <h3>{newOrder?.startMMR}</h3>
                        <h5>{newOrder?.endMMR}</h5>
                        <h5>{newOrder?.countLP}</h5>
                        <h5>{newOrder?.cost}</h5>
                        <h5>{newOrder?.status}</h5>
                        
                    </div>
                    <div>
                        {
                            newOrder?.status == "Ожидает оплаты"
                                ? <button type="submit" className={style.submit} onClick={() => { axios.get(`/api/user/getStatusInProcess?email=${localStorage.getItem("email")}`) }}>Оплатить</button>
                                : newOrder?.status == "Ожидает подтверждения" 
                                    ? <button type="submit" className={style.submit} onClick={() => { axios.get(`/api/user/getStatusDelete?email=${localStorage.getItem("email")}`) }}>Отменить</button>
                                    : <button type="submit" className={style.submit} onClick={() => { axios.get(`/api/user/getStatusDelete?email=${localStorage.getItem("email")}`) }}>Задать вопрос</button>
                        }
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
        </div>
    );
}
export default UserProfile;