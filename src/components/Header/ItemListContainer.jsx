import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Diodos Led"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Transistores Bipolares BJT">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Capacitores Electrolíticos">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Puente Rectificador de Diodos">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

