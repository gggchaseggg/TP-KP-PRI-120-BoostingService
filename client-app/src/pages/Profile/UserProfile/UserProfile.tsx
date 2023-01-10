import axios from "axios";
import React from "react";
import style from "./UserProfile.module.scss";

type UserProfileTypes = {
    id: number;
    nickname: string;
    email: string;
    phone: string;
    password: null;
    role: string;
}


const UserProfile = () => {

    const [user, setUser] = React.useState<UserProfileTypes>();

    React.useEffect(() => { axios.get(`api/account/getUserInfo?email=${localStorage.getItem("email")}`).then(({ data }) => setUser(data)) }, [])

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

            </div>
        </div>
    );
}
export default UserProfile;