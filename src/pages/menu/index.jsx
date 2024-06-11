import { coffees } from "../../utils/coffees";

import { IconArrowTop, IconCart } from "../../components/Icons";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Nossos cafés</h2>
        <div className={styles.cards_content}>
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
        </div>
        <button className={styles.sign_in_button}>
          Ver todos <IconArrowTop />
        </button>
      </div>
    </section>
  );
}

export default Menu;
