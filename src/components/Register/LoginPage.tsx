import Header from '../Header'
import Login from '../Login'
import RegisterPage from './RegisterPage'


const LoginPage = () => {
    return (
        <>
            <div className="d-md-none">
                <Header />
                <Login />
            </div>
            <div className="d-none d-md-block">
                <RegisterPage />
            </div>
        </>
    )
}

export default LoginPage