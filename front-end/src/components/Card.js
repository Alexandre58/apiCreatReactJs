import React from "react";
import imgThierry from "../assets/images/photo-thierry.jpg";
import imgThierryGrossePieces from "../assets/images/ThierryGrossePiece.jpg";
const Card = () => {
  return (
    <article className="article_Card_container">
      <div className="img_Card_container">
        <img
          src={imgThierry}
          alt={`image grosse piece ${imgThierry} `}
          width={200}
        />
        <img
          src={imgThierryGrossePieces}
          alt={`image grosse piece ${imgThierry} `}
          width={200}
        />
      </div>
      <div className="p_card">
        <h2 className="title_card">Card.js</h2>
        <p className="p_card_unity">
          <em>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            ipsam. Consequatur et consectetur temporibus laborum cupiditate
            inventore, deleniti exercitationem sunt dignissimos pariatur enim
            <strong>natus dolorem labore</strong> excepturi non. Eveniet itaque,
            atque ipsa culpa, provident, perferendis maiores accusamus commodi
            distinctio ducimus iusto. Atque fuga nulla, illo tenetur optio at
            aliquam facere dolore. Optio, obcaecati, aliquam quisquam veritatis
            perspiciatis magni labore reiciendis quo ea adipisci velit
            inventore, quas eum explicabo sit nesciunt ratione assumenda a
            soluta sapiente quia autstrong ab culpa quidem. Aliquid tempore at,
            nulla facilis delectus adipisci beatae doloribus qui numquam
            provident. Quod optio, eius doloribus sequi minima sit consequuntur
            autem laboriosam quae voluptatem, omnis sint laborum quidem possimus
            aliquid aut soluta. Porro nemo veritatis laboriosam eum, deleniti
            totam perspiciatis. Alias quos molestiae obcaecati id aspernatur
            corporis amet, distinctio totam? Ratione minima ullam facilis,
            reiciendis hic unde dolorem aspernatur necessitatibus aliquid
            reprehenderit provident iure aut, ipsam saepe id minus voluptas
            temporibus alias! Illo quod facere animi accusantium dicta natus qui
            omnis quae. Minima nobis explicabo minus repellat! Quisquam impedit,
            pariatur veritatis omnis ut magni temporibus laboriosam eveniet quam
            incidunt aperiam assumenda rem repellendus, iste nobis, harum
            aliquam deleniti facilis consequatur? Inventore magni incidunt eius
            quaerat pariatur explicabo dolorum maiores asperiores.
          </em>
        </p>
      </div>
    </article>
  );
};

export default Card;
