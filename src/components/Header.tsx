import Logo from "../assets/Logo.png";
import "../App.css";
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <nav className="navbar header navbar-expand-lg" style={{ height: "74px" }}>
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img className="img-fluid" src={Logo} alt="Logo Icon" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: "#133D7A" }}></span>
                    </button>
                    <div className="offcanvas mt-5 w-85 offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <img className="ms-3" height={50} src={Logo} alt="Logo Icon" />
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <hr className="d-lg-none" />
                        <div className="offcanvas-body headerText">
                            <ul className="navbar-nav align-items-center justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item  ps-4 active">
                                    <a className="nav-link text-decoration-none" aria-current="page" href="#">
                                        <span className='headerText'>
                                            For Employer
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item ps-4 ">
                                    <a className="nav-link text-decoration-none" aria-current="page" href="#">
                                        <span className='headerText'>
                                            For Recruiter
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item ps-4 ">
                                    <a className="nav-link text-decoration-none" aria-current="page" href="#">
                                        <span className='headerText'>
                                            For Jobseeker
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item ps-4 ">
                                    <a className="nav-link text-decoration-none" aria-current="page" href="#">
                                        <span className='headerText'>
                                            About us
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item ps-4 ">
                                    <a className="nav-link text-decoration-none" aria-current="page" href="#">
                                        <span className='headerText'>
                                            FAQ’s
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item ps-4 pt-5 pt-md-0">
                                    <Link to="/login">
                                        <button className="btn ps-4 pe-4" style={{ color: "#1676F3", fontWeight: "700" }}>
                                            Login
                                        </button>
                                    </Link>
                                    <Link to={"/register"}>
                                        <Button name="Register" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* </div> */}
        </>
    )
}

export default Header