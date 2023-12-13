import FooterLogo from "../assets/FooterLogo.png"
import Instagram from "../assets/Instagram.png"
import Linkedin from "../assets/Linkedin.png"
import Twitter from "../assets/Twitter.png"
import Facebook from "../assets/Facebook.png"
import "../App.css"

const Details = () => {
    return (
        <>
            {/* <div className="details"> */}
            <div className="row details align-items-center">
                <div className="col-md-4 col-4">
                    <div className="row text-center">
                        <div>
                            <img className="py-4 img-fluid" src={FooterLogo} />
                        </div>
                        <div>
                            <div>
                                <p className="follow">Follow us</p>
                            </div>
                            <div className='d-flex flex-row justify-content-center'>
                                <div className="m-1">
                                    <img className="img-fluid" src={Facebook} alt="" style={{ minHeight: "11px", width: "auto", objectFit: "contain" }} />
                                </div>
                                <div className="p-2">
                                    <img className="img-fluid" src={Linkedin} alt="" />
                                </div>
                                <div className="p-2">
                                    <img className="img-fluid" src={Twitter} alt="" />
                                </div>
                                <div className="p-2">
                                    <img className="img-fluid" src={Instagram} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-sm text-md text-lg col-8 details-inder py-4">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">
                                <p className="details-bold">
                                    Company
                                </p>
                                <p>About Us</p>
                                <p>Jobs</p>
                                <p>Career</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <p className="details-bold">
                                    Product
                                </p>
                                <p>Candidates</p>
                                <p>Employer</p>
                                <p>Recruiter</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <p className="details-bold">
                                    More
                                </p>
                                <p>Account</p>
                                <p>User Guides</p>
                                <p>Webinar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mx-auto">
                    <div className="row p-3">
                        <h4>Subscribe Our Newsletter</h4>
                        <p style={{ color: "rgba(177, 177, 177, 1)" }}>Be the first one to know about discounts, offers and events Unsubscribe whenever you like.</p>
                        <div style={{ position: "relative" }}>
                            <input className="px-3" type="text" placeholder='Enter your email' style={{ height: "50px", width: "90%", borderRadius: "9px" }} />
                            <button className="btn px-4 py-2" style={{ position: "absolute", right: "15%", backgroundColor: "rgba(0, 0, 0, 1)", top: "3px", color: "rgba(255, 255, 255, 1)", borderRadius: "8px" }}>Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Details