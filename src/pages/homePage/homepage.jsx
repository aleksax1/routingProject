import { Link, NavLink } from "react-router-dom";

import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";

function HomePage() {
  return (
    <>
      <Nav />
      
      <div className="glavni" style={{
        height:"73vh"
      }}></div>

      <Footer />
    </>
  );
}

export default HomePage;
