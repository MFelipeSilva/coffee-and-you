import Slider from "react-slick";

import { coffees } from "../../utils/coffees";

import { IconArrowTop, IconCart } from "../../components/Icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Menu.module.css";

function Menu() {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    initialSlides: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Nossos cafés</h2>
        <div className={styles.carousel_content}>
          <Slider {...settings}>
            {coffees.map((coffe) => (
              <div key={coffe.id} className={styles.coffe_card}>
                <img src={coffe.image} alt="categories of coffees" />
                <h3>{coffe.title}</h3>
                <p>{coffe.description}</p>
                <div>
                  <p>
                    R$ <span>{coffe.price}</span>
                  </p>
                  <button className={styles.cart_button}>
                    <IconCart />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className={styles.sign_in_button}>
          Ver todos <IconArrowTop />
        </button>
      </div>
    </section>
  );
}

export default Menu;
