import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Beaches from '../pages/Beaches'
import Schedule from '../pages/Schedule'



const publicRoutes = [
    { path: '/', component: Login, layout: null},
    { path: '/register', component: Register, layout: null},
    { path: '/schedule', component: Schedule},
    { path: '/home', component: Home},
    { path: '/beaches', component: Beaches}
]

export {publicRoutes} 