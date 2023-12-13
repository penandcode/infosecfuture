import Hero2 from "../assets/Hero2.png"
import "../App.css"
import Button from "./Button"

const Hero = () => {
    return (
        <>
            <div className="backgroundHero mt-4">
                <div className="row">
                    <div className="col-md-6 p-5 text-center text-sm-start" >
                        <h1 style={{ color: "rgba(19, 61, 122, 1)" }}>DISCOVER TOP TALENT</h1>
                        <h3>AI Powered Talent Solution</h3>
                        <p>Unlock top- tier candidates matched to you specific needs effortlessly with our AI driven platform. Streamlined hiring, expectational result. </p>
                        <Button name={"Hire with AI Precision"} />
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className="heroImg">
                            <img src={Hero2} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero