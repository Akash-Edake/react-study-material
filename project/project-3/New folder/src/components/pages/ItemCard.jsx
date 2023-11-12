import React from "react";
import { useCart } from "react-use-cart";
function ItemCard(props) {
  const { addItem } = useCart();
  return (
    <>
      <div className="col-2 m-2 shadow-lg">
        <div class="card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.desc}</p>
            <p class="card-text">$ {props.price}</p>
            <button class="btn btn-primary" onClick={() => addItem(props.item)}>ADD</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
