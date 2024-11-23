import { Link } from "react-router-dom";

import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
function About() {
  return (
    <>
      <Nav />
      <div>
        <Link to="/">NAZAD</Link>
      </div>
      <Footer />
    </>
  );
}

export default About;
