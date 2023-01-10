import axios from "axios";
import React from "react";
import style from "./Profile.module.scss";
import UserProfile from "./UserProfile/UserProfile";
import AdminProfile from "./AdminProfile/AdminProfile";
import BoosterProfile from "./BoosterProfile/BoosterProfile";
import { useNavigate } from "react-router-dom";

type UserProfileTypes = {
    id: number;
    nickname: string;
    email: string;
    phone: string;
    password: null;
    role: string;
}


const Profile = () => {

    const navigate = useNavigate();

    const [user, setUser] = React.useState<UserProfileTypes>();

    React.useEffect(() => 
    { axios.get(`api/account/getUserInfo?email=${localStorage.getItem("email")}`).then(({data})=>setUser(data))}, [])

    return (
        <div className={style.wrapper}>
            {(user?.role === "admin")
                ? <AdminProfile/>
                : !(user?.role === "booster")
                    ? <UserProfile />
                    : <BoosterProfile />
            }
            <button className={style.exitButton} onClick={
                () => {
                    localStorage.clear();
                    navigate("/");
                }
            }>Выйти
            </button>
        </div>
    );
}
export default Profile;