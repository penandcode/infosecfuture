import Register from '../Register'
import Login from '../Login'
import Header from '../Header'

const RegisterPage = () => {
    return (
        <>
            <Header />
            <div className='row w-75 mx-auto'>
                <div className="col-md-8">
                    <Register />
                </div>

                <div className="col-md-4 d-none align-items-stretch d-md-flex">
                    <div className="vertical-line"></div>
                    <Login />
                </div>
            </div>
        </>
    )
}

export default RegisterPage