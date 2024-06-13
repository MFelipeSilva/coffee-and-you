import Slider from "react-slick";
import { categories } from "../../utils/categories";

import styles from "./Categories.module.css";

export const Categories = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    initialSlides: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        <h2 className={styles.subtitle}>Principais categorias</h2>
        <Slider {...settings} className={styles.slick_container}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category_card}>
              <h3>{category.title}</h3>
              <img src={category.image} alt="categories of coffees" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
