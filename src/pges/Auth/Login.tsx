import React, { FC, useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import ApiService from '../../services/ApiService';
import { INIT_ACTION, LOGIN_ACTION } from '../../store/authReducers';

function Login() {

    const Api = new ApiService();
    const dispatch = useDispatch()
    const [isLoad, setisLoad] = useState(false);
    const [Msg, setMsg] = useState();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {


        var response = await Api.postData("auth/login", data);
        // console.log(response.data.success);

        if (response.data.success) {
            console.log(response.data.data);
            localStorage.setItem("isAuthenticated", JSON.stringify(response.data.data))
            setMsg(response.data.message)
            window.location.replace("/");
        } else {
            setMsg(response.data.message)
        }




    }
    const getUser = async (data: any) => {
        const user = JSON.parse(data);
        console.log("user data list");

        console.log(user);


        dispatch(LOGIN_ACTION(user))



    }

    const init = () => {
        const userdata = localStorage.getItem("isAuthenticated");

        if (userdata) {
            //console.log("user data for me");
            //console.log(userdata);   
            getUser(userdata)

        }
        console.log("no user data for me");
        dispatch(INIT_ACTION())
    }

    React.useEffect(() => {
        init()
        console.log("init");
    }, [])


    return (
        <>
            <div className="col-lg-6 col-lg-12">
                <div className="p-5">
                    <div className="text-center"><img src="assets/img/assets/logo125.png" width="90" height="80" /></div>
                    <form className="user" method="post" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <h4 className="text-center text-dark mb-4">PULSEBOOK</h4>
                            <h5 className="text-center text-danger  mb-4">{Msg}</h5>
                            <input className="form-control form-control-user" type="email" {...register("email", { required: true })} id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" />
                            {errors.email && <span style={{ color: "red" }}>Adresse email obligatoire</span>}
                        </div>
                        <div className="mb-3">
                            <input className="form-control form-control-user" {...register("password", { required: true })} type="password" id="exampleInputPassword" placeholder="Password" name="password" />
                            {errors.password && <span style={{ color: "red" }}>Mot de passe obligatoire</span>}
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox small">
                                <div className="form-check">
                                    <input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" />
                                    <label className="form-check-label custom-control-label" htmlFor="formCheck-1">Remember Me</label></div>
                            </div>
                        </div>
                        <button className="btn btn-primary d-block btn-user w-100" type="submit" style={{ backgroundColor: "#fe9329 !important", border: "none" }}>
                            Login
                        </button>
                    </form>
                    <div className="text-center"></div>
                    <div className="text-center"></div>
                </div>
            </div>
        </>
    );
}

export default Login; 
