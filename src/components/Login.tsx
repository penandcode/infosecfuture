import React from 'react'
import Button from './Button'

const Login = () => {
    return (
        <>
            <div className='login mx-auto mt-5'>
                <div className="loginText text-center">
                    <div>Already registered ?</div>
                    <div>Log in to your Account</div>
                </div>
                <form className="row formText">
                    <div className="pb-3">
                        <label htmlFor="email" className="form-label">Email Id:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="pb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                </form>
                <div className='row' style={{ fontSize: "12px" }}>
                    <div className="form-check col-lg-4">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">Remember Me</label>
                    </div>

                    <div className='col-lg-4' style={{ fontWeight: "600" }}>Forgot Password?</div>
                    <div className='col-lg-4'>
                        <Button name={"Login"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login