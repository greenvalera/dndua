import {ComponentType} from "react";
import Home from "../components/pages/Home";
import {SignIn, SignUp} from "../components/auth";
import Race from "../components/races/Race";

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
        path: '/race/:race',
        component: Race,
    },
    {
        path: '/class/:class',
        component: Home,
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