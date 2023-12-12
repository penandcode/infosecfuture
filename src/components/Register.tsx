import React from 'react'
import Button from './Button'

const Register = () => {
    return (
        <>
            <div className="register mt-5">
                <p className="registerText">Register today.</p>
                <form className='row formText'>
                    <div className="col-md-6 pb-3">
                        <label htmlFor="name" className="form-label">Full Name:</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="col-md-6 pb-3">
                        <label htmlFor="email" className="form-label">Email Id:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="col-md-6 pb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="col-md-6 pb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" />
                    </div>
                    <div className='d-flex flex-column flex-sm-row'>
                        <div>
                            Register as:
                        </div>
                        <div>
                            <div className='form-check form-check-inline'>
                                <input checked className="form-check-input py-2" type="radio" />
                                <label className="form-check-label">Jobseeker</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className="form-check-input py-2" type="radio" />
                                <label className="form-check-label">Recruiter</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input className="form-check-input py-2" type="radio" />
                                <label className="form-check-label">Employer</label>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='py-2'>
                    <Button name={"Register"} />
                </div>
            </div>
        </>
    )
}

export default Register