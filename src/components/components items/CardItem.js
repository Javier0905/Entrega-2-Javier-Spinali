import Image from "./Image";
import "../../Styles/CardItem.css";
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";


const CardItem = (props) => {
    return (
        <div className = "CardItems">
            <Image
             imagen= {props.imagen}/>
            <Description 
                title = {props.title}
                cantidad = {5}
                precio = {props.precio} />
        <div className = "buttons">
            <ButtonDetalles/>
            <ButtonAddCart/>
      
    </div>

    </div>
    )
}

export default CardItem;