import Slider from "react-slick";

import { useCart } from "../../hooks/useCart";

import { coffees } from "../../utils/coffees";

import { IconArrowTop, IconCart } from "../../components/Icons";

import { PrimaryButton, SecondaryButton } from "../../components/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Menu.module.css";

function Menu() {
  const { addProductToCart } = useCart();

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
          slidesToShow: 1.3,
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
            {coffees.map((coffee) => (
              <div key={coffee.id} className={styles.coffee_card}>
                <img src={coffee.image} alt="categories of coffees" />
                <h3>{coffee.title}</h3>
                <p>{coffee.description}</p>
                <div>
                  <p>
                    R$ <span>{coffee.price}</span>
                  </p>
                  <SecondaryButton
                    hidden={false}
                    onClick={() => addProductToCart({ ...coffee })}
                  >
                    <IconCart />
                  </SecondaryButton>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <PrimaryButton hidden={false}>
          Ver todos <IconArrowTop />
        </PrimaryButton>
      </div>
    </section>
  );
}

export default Menu;
