import axios from "axios";
import React, { useState } from "react";
import style from "./AdminProfile.module.scss";
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from "react-hook-form";

type FormBlockValueType = {
    blockEmail: string;
}


const UserProfile = () => {

    const [emailForBlock, setEmail] = useState();

    const changeEmail = (event: any) => {
        setEmail(event.target.value);
    };

    //const navigate = useNavigate();

    //const {
    //    register: blockRegister,
    //    handleSubmit: blockHandleSubmit,
    //    reset: blockReset,
    //    setError: blockSetError
    //} = useForm<FormBlockValueType>();

    //const onBlockSubmit: SubmitHandler<FormBlockValueType> = async (data) => {
    //    const usersWithEmail = await axios.get("api/account/existsemail", { params: { email: data.blockEmail } }).then(({ data }) => data)
    //    if (usersWithEmail) {
    //        blockSetError("blockEmail", { type: "custom", message: "userEmail not found" })
    //    } else {
    //        await axios.get("/api/admin/blockUser", { params: { email: data.blockEmail } });
    //        blockReset();
    //    }
    //}

    //const {
    //    register: unblockRegister,
    //    handleSubmit: unblockHandleSubmit,
    //    reset: unblockReset,
    //    setError: unblockSetError
    //} = useForm<FormBlockValueType>();

    //const onUnblockSubmit: SubmitHandler<FormBlockValueType> = async (data) => {
    //    const usersWithEmail = await axios.get("api/account/existsemail", { params: { email: data.blockEmail } }).then(({ data }) => data)
    //    if (usersWithEmail) {
    //        unblockSetError("blockEmail", { type: "custom", message: "userEmail not found" })
    //    } else {
    //        await axios.get("/api/admin/unblockUser", { params: { email: data.blockEmail } });
    //        unblockReset();
    //    }
    //}

    //const [user, setUser] = React.useState<UserProfileTypes>();

    //React.useEffect(() => { axios.get(`api/admin/blockUser?email=${localStorage.getItem("email")}`).then(({ data }) => setUser(data)) }, [])

    return (
        <div>
            <h1> Я админ </h1>
            <form>
                <input type="email"
                    className={style.input}
                    placeholder={"E-mail"}
                    autoComplete={"off"}
                    value={emailForBlock}
                    onChange={changeEmail}                />
                <button type="submit" className={style.submit} onClick={() => { axios.get(`/api/admin/blockUser?email=${emailForBlock}`) }}>Заблокировать</button>
                <button type="submit" className={style.submit} onClick={() => { axios.get(`/api/admin/unblockUser?email=${emailForBlock}`) }}>Разблокировать</button>
                <button type="submit" className={style.submit} onClick={() => { axios.get(`/api/admin/setrolebooster?email=${emailForBlock}`) }}>Сделать бустером</button>
            </form>
        </div>
    );
}
export default UserProfile;
