import React from "react";

const ProductsCard = ({ product }) => {
  const imageUrl = product.images && product.images.length > 0 ? product.images[0] :'fallback_image_url.png';
  return (
    <div
      style={{
        width: "28vw",
        backgroundColor: "pink",
        borderRadius: "10px",
        padding: "10px",
        color:"white",
        margin: "10px",
      }}
    >
      <img
        src={imageUrl}
        alt={product.title}
        style={{
          width: "100%",       
          height: "auto",      
          borderRadius: "10px", 
          objectFit: "cover",  
        }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductsCard;
