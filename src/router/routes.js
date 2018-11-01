const About = () => import('@/views/About').then(m => m.default || m)
const Home = () => import('@/views/Home').then(m => m.default || m)

export default [
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]