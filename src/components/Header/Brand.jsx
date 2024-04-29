import brand from "../../img/Electronica 555";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Tienda Electrónica 555" title="Tienda Electrónica 555"></img>
        </Link>
    )
}

export default Brand;