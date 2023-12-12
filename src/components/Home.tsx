import Header from './Header';
import Card from "./Card";
import Footer from './Footer';

import Card1 from "../assets/Card 1.png"
import Card2 from "../assets/Card 2.png"
import Card3 from "../assets/Card 3.png"

function Home() {


    return (
        <>
            <Header />
            <div className="mt-5">
                <div style={{ fontSize: "40px", fontWeight: 600, textAlign: "center" }}>Explore your path</div>
                <div style={{ fontSize: "24px", fontWeight: 400, textAlign: "center" }}>Find your path</div>
                <div className="row mb-4">
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center p-2">
                        <Card
                            img={Card1}
                            heading={"Empower Growth"}
                            subHeading={"Boost your team"}
                            text={"Discover top talent for your organization & accelerate your business growth. find the perfect match for your job opening with our AI driven candidate screening."}
                            button={"For Employer"}
                        />
                    </div>
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center p-2">
                        <Card
                            img={Card2}
                            heading={"Unlock Opportunities"}
                            subHeading={"Maximize earnings"}
                            text={"Take your recruitment career to new heights. Gain access to a pool of verified job openings and multiply your earnings with our attractive commission structure."}
                            button={"For Recruiters"}
                        />
                    </div>
                    <div className="col-md-4 col-sm-12 d-flex justify-content-center p-2">
                        <Card img
                            ={Card3} heading
                            ={"Your Dream Job"}
                            subHeading={"Within Reach"}
                            text={"Find your dream job with ease. Access validated job opportunities and receive personalized job alerts that match your skills and preferences."}
                            button={"For Jobseeker"}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
