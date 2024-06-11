import { categories } from "../../utils/categories";

import styles from "./Categories.module.css";

export const Categories = () => {
  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Principais categorias</h2>
        <div className={styles.cards_content}>
          {categories.map((category) => (
            <div key={category.id} className={styles.category_card}>
              <h3>{category.title}</h3>
              <img src={category.image} alt="categories of coffees" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
