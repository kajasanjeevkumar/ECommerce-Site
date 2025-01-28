import { useState, useEffect } from "react";
import { useParams } from "react-router"



function ProductDetail() {
  const {id}=useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);
  if (!product) return <div>Loading...</div>;

  return (
    <>
          <div className="heading">
            <h1>Title: "{product.title}"</h1>
          </div>    
            <h3>Brand: "{product.brand}"</h3>
            <h3>Category: "{product.category}"</h3>
            <h3>Description: "{product.description}"</h3>
            <h3>Price: "{product.price}"</h3>
            <h3>Rating: "{product.rating}"</h3>
            <h3>Weight: "{product.weight} kg"</h3>
            <img className="detail-image" src={product.thumbnail} alt="_img" style={{height:"250px"}} />  
            
            
  
    </>
  )
}

export default ProductDetail
