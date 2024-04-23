import Image from "./Image";
import "../../Styles/CardItem.css";
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import ImgPrueba from "../../img/prueba.svg"

const CardItem = () => {
    return (
        <div className = "CardItems">
            <Image imagen= {ImgPrueba}/>
            <Description 
                title ="Placa de Video"
                cantidad = {5}
                precio = {20000} />
        <div className = "buttons">
            <ButtonDetalles/>
            <ButtonAddCart/>
      
    </div>

    </div>
    )
}

export default CardItem;