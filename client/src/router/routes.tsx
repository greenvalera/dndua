import {ComponentType} from "react";
import Home from "../components/pages/Home";
import {SignIn, SignUp} from "../components/auth";
import Race from "../components/races/Race";
import Class from "../components/classes/Class";

export interface IRoute {
    path: string,
    exact?: boolean,
    component: ComponentType<any>
}

export const privateRoutes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/race/:id',
        component: Race,
    },
    {
        path: '/class/:id',
        component: Class,
    },
    {
        path: '/spells',
        component: Home,
    },
    {
        path: '/items',
        component: Home,
    },
];

export const publicRoutes: IRoute[] = [
    {
        path: '/login',
        exact: true,
        component: SignIn,
    },
    {
        path: '/signUp',
        exact: true,
        component: SignUp,
    },
];