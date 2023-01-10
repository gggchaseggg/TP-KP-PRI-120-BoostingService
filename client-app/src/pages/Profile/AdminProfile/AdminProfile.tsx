import axios from "axios";
import React from "react";
import style from "./AdminProfile.module.scss";
import { useNavigate } from 'react-router-dom';


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
            <h1> Я админ </h1>
        </div>
    );
}
export default UserProfile;
