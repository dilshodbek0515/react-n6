import "./About.scss"
import about from "../../assets/images/about.png"
const About = () => {
    return (
        <div className="about">
            <img className="about_img" src={about} alt="about_img" />
            <div className="about_right">
                <p className="about_name">About US</p>
                <h3 className="about_title">Food Stalls with Persons but  to  Product marketing plane
                    catlogues etc to. </h3>
                <p className="about_desc">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also
                    equipment  make your marketing plane Effective.</p>
                <button className="about_btn">Read More</button>
            </div>
        </div>
    )
}

export default About