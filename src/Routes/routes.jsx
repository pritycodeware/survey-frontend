import React from "react";
import { Header, Loader } from "components";
import Login from "pages/Login/Login";
import VerifyOtp from "pages/VerifyOtp/VerifyOtp";
import ForgetPassord from "pages/ForgetPassword/ForgetPassord";
import Signup from "pages/Signup/Signup";
import SurveyForm from 'pages/SurveyForm/SurveyForm';
import Subscribe from "pages/Subscribe/Subscribe";
const Home = React.lazy(() => import("pages/Home/Home"));

export const PublicRoutes = [
    {
        path: "/forget",
        component: <Header />,

    },
    {
        path: "/verify-otp",
        component: <VerifyOtp />,

    },
    {
        path: "/forget-password",
        component: <ForgetPassord />,

    },
    {
        path: "/login",
        component: <Login />,

    },
    {
        path: "/signup",
        component: <Signup />,

    },
    {
        path: "*",
        component: <h1>not found </h1>,
    },

];

export const PrivateRoutes = [
    {
        path: "/",
        component: (
            <React.Suspense fallback={<Loader />}>
                <Home />
            </React.Suspense>
        ),
    },
    {
        path: '/form',
        component: <SurveyForm />
    },
    {
        path: "/subscribe",
        component: <Subscribe />
    },
    {
        path: "*",
        component: <h1>now found </h1>,
    },
];
