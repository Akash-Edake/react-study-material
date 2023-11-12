import React, {useEffect, useState} from 'react'
import ItemCard from './ItemCard'
import axios from 'axios';
import {Link} from 'react-router-dom'
import { useCart } from "react-use-cart";
function Home() {
  const { addItem, totalItems } = useCart();
  
  const [Filter, setFilter] = useState("");
  const [Json, setJson] = useState([]);
  const [button, setbutton] = useState([]);
  const [Gender, setgender] = useState([]);
  useEffect(()=>{
    GetData()
  },[])
  const GetData=async()=>{
    let data = await axios.get("http://localhost:3003/product")
    setJson(data.data)
  }
  return (
    <>
     <section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-3">
          <div className="container-fluid">
            <div className="row w-100">
              <div className=" col-sm-12 col-lg-7">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      {/* <a className="nav-link" >Home</a> */}
                    </li>
                    <li className="nav-item">
                      {/* <Link className="nav-link active" aria-current="page" to={'/'}>Shop</Link> */}
                    </li>
                    <li className="nav-item">
                      {/* <Link className="nav-link" to={'/'}>Featured</Link> */}
                    </li>

                    <li className="nav-item">
                      {/* <Link className="nav-link">Recommended</Link> */}
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      onChange={(e) => {
                        setFilter(e.target.value);
                      }}
                    />
                    {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                  </form>
                </div>
              </div>
              <div className="col-sm-12 col-lg-5">
                <form className="d-flex justify-content-end">
                  <button
                    className="btn btn-outline-success me-2"
                    type="button"
                  >
                    Sign In
                  </button>
                  <button
                    className="btn btn-outline-secondary me-2"
                    type="button"
                  >
                    SignUp
                  </button>
                  <button
                    type="link"
                    className="position-relative bg-transparent text-white shadow-none border-0"
                  >
                    <span className="fs-4">
                    <i className="fa-solid fa-cart-shopping"></i>
                      
                    </span>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>

                  <button className="btn text-white me-2">Cart</button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </section>
   
       <section>
       <div className='btn_grp'>
       <button className='red color' onClick={()=>setbutton("red")}>Red</button>
        <button className='green color' onClick={()=>setbutton("green")}>Green</button>
        <button className='blue color' onClick={()=>setbutton("blue")}>Blue</button>
        <button className='pink color' onClick={()=>setbutton("pink")}>Pink</button>
        <button className='reset' onClick={()=>setbutton("")}> Reset</button>
        <div>
          
        <button className='reset' onClick={()=>setgender("male")}> male</button>
        <button className='reset' onClick={()=>setgender("fe")}> female</button>
        <button className='reset' onClick={()=>setgender("")}> Reset</button>
        </div>
       </div>
       <div className="containet m-5">
            <div className="row">
                <div className="col-12 " style={{display:"contents"}}>
                  {
                    Json.filter((value) => {
                      if (value === "") {
                        return value;
                      } else if ((value.title.toLowerCase().includes(Filter.toLowerCase())) && (value.color.toLowerCase().includes(button)) && (value.gender.toLowerCase().includes(Gender))) {
                        return value;
                      }
                    }).map((item,index)=>{
                      const {title,desc,price,img}=item
                      return(
                        // <ItemCard title={title} desc={desc} item={item} price={price} key={index} />
                        <div className="col-2 m-2 shadow-lg">
        <div class="card">
          <img src={img}
            // src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a"
            class="card-img-top img"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{desc}</p>
            <p class="card-text">$ {price}</p>
            <button class="btn btn-primary" onClick={() => {addItem(item)}}>ADD</button>
          </div>
        </div>
      </div>
                      )
                    })
                  }
                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default Home