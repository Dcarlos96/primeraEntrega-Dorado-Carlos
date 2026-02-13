import { useState, useEffect } from "react"
import { getProductos } from "../mock/asyncMock"
import ItemList from "./itemList"
import { useParams } from "react-router-dom"

const ItemlistContainer = (props) => {
     const [data, setData] = useState([])
    const {type}= useParams()
    console.log(type)
     useEffect(() => {
        getProductos()
        .then((res) =>{
            if(type){
                setData(res.filter((prod)=> prod.category.includes(type)))
            }else{
                setData(res)
            }
        } )


        .catch((err) => console.log(err, 'error'))
        },[type])

  return (
    <div>
        <h2>{props.mensaje} </h2>
        {/* {data.map((prod)=><p key={prod.id}> {prod.name} </p>)} */}
        <ItemList data={data}/>
    </div>
  )
}    
export default ItemlistContainer