    import axios from "axios";
    import React, { useEffect, useState } from "react";
    import "./products.css"
    import Footer from "../../components/footer/footer";
    import Nav from "../../components/nav/nav";
    import ProductsCard from "../../components/products/productsCard";

    function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
        .get("https://dummyjson.com/products?limit=10")
        .then((response) => {
            setProducts(response.data.products);
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
        });
    }, []);

    return (
        <>
            <Nav />
            <h1>COSMETICS PRODUCTS</h1>
        <img
            style={{
            width: '100%',
            height:"50vh",
            objectFit:"cover",
            }}
            src="https://www.shutterstock.com/image-photo/makeup-professional-cosmetics-on-pink-600nw-1398700589.jpg"
            alt=""
        />
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "50px",
            paddingBottom: "50px",
            flexWrap: "wrap",
            gap: "20px",
            }}
        >
            {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
            ))}
        </div>
        <Footer />
        </>
    );
    }

    export default Products;
