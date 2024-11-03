import "./Header.scss"
import logo from "../../assets/images/logo.svg"
import { NAVBAR_ITEM } from "../static/index"
const Header = () => {
    const LIST = [
        NAVBAR_ITEM?.map((items) => (
            <li key={items.id} className="navbar_item">
                <a href="#">
                    <span>{items}</span>
                </a>
            </li>
        ))
    ]
    return (
        <header className="header">
            <div className="header_left">
                <a href="#">
                    <img className="logo" src={logo} alt="logo" />
                </a>
                <ul className="navbar">
                    {LIST}
                </ul>
            </div>
            <button className="header_btn">
                Booking Now
            </button>
        </header>
    )
}

export default Header