import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import img_about from "../assets/images/ThierryGrossePiece.jpg";
const About = () => {
  return (
    <>
      <Navigation />
      <div className="container_about">
        <img className="img_about" src={img_about} alt="image grosse pices" />
        <h1 className="h1_aboutUs">À propos de nous</h1>

        <p className="p_AboutUs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non
          facilis est autem suscipit corrupti laudantium, magni quae! Libero,
          dicta aperiam inventore consectetur enim consequatur sint! Aut quia
          nostrum eum, soluta repellendus tenetur ex ab eius sit! Ad sed aperiam
          a rem et porro fugit ex facilis eum neque, natus, amet totam! Porro,
          voluptates cumque sit obcaecati ducimus consectetur dignissimos,
          tenetur maiores animi quas, rem totam officiis illum labore
          repellendus iure architecto velit iste vel. Distinctio natus quisquam
          ipsa dolorem earum impedit ducimus, beatae harum voluptatum quo omnis
          quia nam, officiis eius ad tempora facilis voluptate ex fuga eveniet!
          Officia, repellat. Ducimus quidem a enim quasi debitis ea cumque,
          ipsum eligendi dolor, beatae repudiandae molestiae hic repellendus
          voluptate temporibus nostrum at saepe architecto error consectetur
          odit tenetur dolorum. Quis neque velit provident assumenda illum hic
          sint rerum vero, magni numquam odio inventore nisi laboriosam est
          officiis ut doloribus dolor iste cum, facere eum illo! Laudantium
          molestias similique nostrum quae sit. Cum ab aspernatur hic blanditiis
          eligendi maiores debitis consequatur laboriosam, asperiores rerum
          dolorum accusantium natus. Voluptatum error obcaecati odit animi,
          reprehenderit aut consectetur quos tenetur doloribus soluta ullam
          officia, minus numquam. Magnam corporis unde reprehenderit eos
          pariatur earum eligendi magni.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
