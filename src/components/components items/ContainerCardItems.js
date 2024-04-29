import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import { useState,useEffect } from "react";
import "../../Styles/containerCardItems.css"
import { useParams } from "react-router";

const ContainerCardItem = () => {
    const [datos, setDatos] = useState ([]);
    const {idCategory} = useParams ();

    useEffect (() => {
        setDatos( [] );

        if(idCategory === undefined){
            fetchSimulation(productos, 1000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else {
            fetchSimulation(productos.filter(filter => filter.type === idCategory ), 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }

    }, [idCategory])

    return (
     <div className="containerCardItems">
     {
     datos.map ( product => (
         <CardItem
             key={product.id}
            imagen={product.imageProduct.firstImage}
            title={product.title}
            precio={product.stock}
            cantidad={product.price}
        />
        
     ))
        }
    </div>
    )
}

export default ContainerCardItem;