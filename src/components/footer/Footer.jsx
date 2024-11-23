import React from "react";
import './footer.css';
function Footer() {
    return (
      <>
       <div className="footer" style={{
        height:"20vh",
        display:"flex",
        alignItems:"center",
        justifyContent:'space-evenly',
        gap:"15vw"
      }}>
        <h3>COSMETICS SHOP ®</h3>
        <div style={{
            color:"white",
            textDecoration:'none',
            display:'flex'

        }}>
          <div style={{
            display:"flex",
            alignItems:"center",
            paddingRight: 20,
          }}> 
          <h4>created by: Aleksa Jankovic</h4> 
          </div>
          <div>
          </div>
        </div>
        </div>
    
      </>
    );
  }
  
  export default Footer;
  

