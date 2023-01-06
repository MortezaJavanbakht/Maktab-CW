import { useState } from "react"
import "./Card.css"

function Card({id, title, price, imgSrc}){
    const [count, setCount] = useState(0)
    return(
        <div className="product" id={id}>
            <img src={imgSrc} alt="" />
            <div className="product__spec d-flex f-d-c j-s-e w-full">
              <h3>{title}</h3>
              <h5>{price} تومان</h5>
              <div className="d-flex j-s-b">
                <div className="product__spec__counter">
                  <a className="plusBtn" title="افزودن" onClick={()=>{setCount(count+1)}}
                    ><span className="bi bi-plus-square-fill plusBtn">+</span
                  ></a>
                  <label>{count}</label>
                  <a className="minusBtn" title="حذف" onClick={()=>{if(count>0) setCount(count-1)}}
                    ><span className="bi bi-dash-square-fill minusBtn">-</span
                  ></a>
                </div>
                <div><span className="product__totalPrice">{count * price}</span> تومان</div>
              </div>
            </div>
          </div>
    )
}

export default Card