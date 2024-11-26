import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";

function About() {
  return (
    <>
      <Nav />
      <h1>COSMETICS PRODUCTS</h1>
        <img
            style={{
            width: '100%',
            height:"40vh",
            objectFit:"cover",
            }}
            src="https://www.shutterstock.com/image-photo/makeup-professional-cosmetics-on-pink-600nw-1398700589.jpg"
            alt=""
        />
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          minHeight: "40vh",
          padding: "15vh 20vh",
          
        }}
      >
        <h2 style={{
          fontSize:"10vh"  
        }}> About Us</h2>
        <p  style={{
          fontSize:"3vh"  
        }}>
          Welcome to our website! We are passionate about providing the best
          products and services to our customers. Our mission is to ensure
          quality and customer satisfaction in everything we do.
        </p>
        <p style={{
          fontSize:"3vh"  
        }}>
          Learn more about our <Link to="/products" style={{
            textDecoration: "none",
            color:"blue"
          }}>PRODUCTS</Link> or contact
          us for any inquiries.
        </p>
        
      </div>
      <Footer />
    </>
  );
}

export default About;
