import { Navigate } from "react-router-dom";
import AdminGuard from "../components/Guards/AdminGuard";
import GuestGuards from "../components/Guards/GuestGuards";
import UserGuard from "../components/Guards/UserGuard";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import UserList from "../pages/UserList";
import { PATHS } from "./paths";
import MainLayout from '../components/MainLayout'

// Roles:
// - guest: can view only(login, signup)
// - user: can view only(home, profile)
// - admin: can view only(home, profile, admin)

//Admin Router Pages
const adminPages = [
    {
        path: PATHS.HOME,
        element: <AdminGuard />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: PATHS.PROFILE,
                element: <Profile />
            },
            {
                path: PATHS.ADMIN.USERS,
                element: <UserList />
            },
        ]
    }
]

//user Router Pages
const userPages = [
    {
        path: PATHS.HOME,
        element: <UserGuard />,
        children:[
            {
                index: true,
                element :<HomePage />

            },
            {
                path: PATHS.PROFILE,
                element: <Profile />
            },
        ]
            
    }
]
//Guest Router Pages
const guestPages = [
    {
        path:PATHS.LOGIN,
        element:<Login />
    },
    {
        path:PATHS.SIGNUP,
        element:<SignUp />
    }
]

const routes = [
    ...adminPages,
    ...userPages,
    ...guestPages,
    {
        path: PATHS.ERRORS.NOT_FOUND,
        element: <h1>PAGE NOT FOUND Error 404</h1>
    },
    {
        path: '*',
        element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />
    },
]

export { routes }


// const userPages = [
//     {
//         path: PATHS.HOME,
//         element: <UserGuard />,
//         children: [
//             {
//                 index: true,
//                 element:
//                     // <MainLayout>
//                         <HomePage />
//                     // </MainLayout>
//             },
//             {
//                 path: PATHS.PROFILE,
//                 element:
//                     // <MainLayout>
//                     <Profile />
//                 // </MainLayout>
//             },
//             // {
//             //     path: '*',
//             //     element: <Navigate to={`${PATHS.HOME}`} />
//             // }
//         ]
//     }
// ]

// const guestPages = [
//     {
//         path: PATHS.LOGIN,
//         element: (
//             <Login />
//         )
//     },
//     {
//         path: PATHS.SIGNUP,
//         element: (
//             <SignUp />
//         )
//     }
// ]


// const routes = [
//     ...adminPages,
//     ...userPages,
//     ...guestPages,
//     {
//         path: PATHS.ERRORS.NOT_FOUND,
//         element: <h1>PAGE NOT FOUND Error 404</h1>
//     },
//     {
//         path: '*',
//         element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />
//     },
// ]


