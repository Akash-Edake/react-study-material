import React from "react";
import { useCart } from "react-use-cart";

function Card() {
  const {
  
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <h5>
            {/* Items: ({totalUniqueItems}) */}
               total Items: ({totalItems})
            </h5>
            <table  class="table">
                <tbody>
              {items.map((item, index) => {
            return(
                <>
                <tr key={index}>
                  <td><img src={item.img} style={{width:"7rem"}} alt="" /></td>
                  <td>{item.title} </td>
                  <td>$ {item.price} </td>
                  <td>{item.quantity} </td>
                  <td>$ {item.price * item.quantity}</td>
                  <td>₹ {item.price * item.quantity*74}</td>
                  <td>
                  <button className="m-2 px-2" onClick={()=> updateItemQuantity(item.id, item.quantity+1)}>+</button>
                  <button className="m-2 px-2" onClick={()=> updateItemQuantity(item.id, item.quantity-1)}>-</button>
                  <button className="m-2 px-2" onClick={()=>removeItem(item.id)}>remove</button>
                  </td>
                </tr>
                </>
                )
              })}
              </tbody>
            </table>
          </div>
          <div style={{textAlign:'end'}}>
            <h2>total price ${cartTotal} = ₹{cartTotal*74}</h2>
          </div>
          <div style={{textAlign:'end'}}>
            <button onClick={()=>emptyCart()}>clear All</button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Card;
