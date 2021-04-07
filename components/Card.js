import cardCss from "../styles/Card.module.css";

export default function Card(props) {
  return (
    <div>
      <div className={cardCss.center}>
        <div className={cardCss.property_card}>
          <a>
            <div className={cardCss.property_image}>
              <div className={cardCss.property_image_title}>
                {props.data.product_title}
              </div>
            </div>
          </a>
          <div className={cardCss.property_description}>
            <h5> {props.data.product_title}</h5>
            <p>
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </p>
          </div>
          <div className={cardCss.property_social_icons}>
            <button>asd</button>
            <button>asd</button>
          </div>
        </div>
      </div>
    </div>
  );
}
