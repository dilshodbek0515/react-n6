import { useState } from "react"
import "./Menu.scss"
import { toast } from "react-toastify"
import Loading from "../loading/Loading"
import { useFetch } from "../hooks/useFetch"

const Menu = () => {
    const [category, setCategory] = useState("/")
    const [offset, setOffset] = useState(1)
    const { data, loading, error } = useFetch(`/products${category}`, { limit: offset * 3 }, [offset, category])
    const { data: categories } = useFetch("products/category-list")
    console.log(category); 


    const productsItems = data?.products?.map((pro) => (
        <div className="pro_card" key={pro.id}>
            <img
                onClick={() => toast.info(pro.brand)}
                className="pro_img" src={pro.images[0]} alt="pro_img"
            />
            <div className="name_wrap">
                <h3>{pro.title}</h3>
                <strong>{pro.price}$</strong>
            </div>
            <p className="pro_desc">{pro.description}</p>
        </div>
    ))

    const categoryItems = categories?.map((cate) => (
        <li
            onClick={() => setCategory(`/category/${cate}`)}
            className="category_list"
            key={cate}>
            {cate}
        </li >
    ))
    return (
        <div className="menu">
            <p className="menu_name">Menu</p>
            <h2 className="menu_title">Food Full of treaty Love</h2>
            <p className="menu_desc">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            <ul className="category">
                {categoryItems}
            </ul>
            <div className="menu_wrapper">
                {productsItems}
            </div>
            {loading && <Loading />}
            <button
                disabled={loading}
                onClick={() => setOffset(p => p + 1)}
                className="more disabled:bg-red-500 disabled:cursor-not-allowed">
                {
                    loading ? "Loading..." : "Learn More"
                }
            </button>
        </div>
    )
}

export default Menu