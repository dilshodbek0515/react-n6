import "./Food.scss"
import { FOOD_CARD } from "../static/index"
const food = [
    FOOD_CARD?.map((item) => (
        <div className="food_card">
            <img className="food_img" src={item.image} alt="food_img" />
            <h4 className="food_text">{item.title}</h4>
            <p className="food_desc">{item.description}</p>
        </div>
    ))
]
const Food = () => {
    return (
        <section className="food">
            <p className="food_name">Features</p>
            <h3 className="food_title">Food with a New Passion</h3>
            <div className="food_card_wrapper">
                {food}
            </div>
        </section>
    )
}

export default Food