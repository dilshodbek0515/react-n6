import "./Hero.scss"
import hero from "../../assets/images/hero.jpg"
const Hero = () => {
    return (
        <main className="hero">
            <div className="hero_left">
                <h2 className="hero_item">Making time a good time by making food the good food.</h2>
                <p className="hero_desc">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                <div className="hero_btn_content">
                    <button className="hero_btn">Order Now</button>
                    <button className="hero_btn">Food Details</button>
                </div>
            </div>
            <img className="hero_img" src={hero} alt="img" />
        </main>
    )
}

export default Hero