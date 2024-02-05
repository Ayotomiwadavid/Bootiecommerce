import React, { useEffect, useState } from "react";
import Products from "./Products";

function Newarrivals() {
    let [products, setProduct] = useState([]);
    useEffect(() =>{
        const fetchProducts = async () =>{
           await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=> setProduct(data))
            .catch(err =>{
              console.log(err)
            })
        }
        fetchProducts()
    },[]);

  return (
    <section className="newArrivalSection">
      <p className="sectionTitle">new arrivals</p>
      <div className="newArrivalsProducts">
      {products.map((product,index) =>{
        return(
            <Products
            title={product.title.substring(0, 20)}
            key={product.id}
            image={product.image}
            price={product.price}
            rate={product.rating.rate}
            />
        )
      })}
      </div>
    </section>
  );
}

export default Newarrivals;
