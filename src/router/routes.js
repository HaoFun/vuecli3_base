const Welcome = () => import('@/views/welcome').then(m => m.default || m)
const Login = () => import('@/views/auth/login').then(m => m.default || m)
const Register = () => import('@/views/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('@/views/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('@/views/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('@/views/errors/404').then(m => m.default || m)

const Home = () => import('@/views/home').then(m => m.default || m)
const Settings = () => import('@/views/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('@/views/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('@/views/settings/password').then(m => m.default || m)

export default [
    { path: '/', name: 'welcome', component: Welcome },

    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/password/reset', name: 'password.request', component: PasswordEmail },
    { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

    { path: '/home', name: 'home', component: Home },
    { path: '/settings',
        component: Settings,
        children: [
            { path: '', redirect: { name: 'settings.profile' } },
            { path: 'profile', name: 'settings.profile', component: SettingsProfile },
            { path: 'password', name: 'settings.password', component: SettingsPassword }
        ] },

    { path: '*', component: NotFound }
]
