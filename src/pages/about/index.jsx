import { PrimaryButton } from "../../components/Button";

import { IconArrowTop } from "../../components/Icons";

import coffe_cup_illustrarion from "../../assets/coffee-cup-illustration.png";

import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <article className={styles.article_content}>
          <h2 className={styles.subtitle}>Sobre nós</h2>
          <p className={styles.text}>
            Fundada com a paixão por oferecer a melhor experiência em café,
            nossa cafeteria combina grãos selecionados, técnicas de preparo
            apuradas e um ambiente acolhedor. Seja para uma pausa rápida ou um
            encontro com amigos, estamos aqui para tornar seu momento de café
            memorável. Venha nos visitar ou aproveite nosso serviço de entrega
            para saborear um café perfeito onde e quando quiser.
          </p>

          <PrimaryButton hidden={false}>
            Ver todos <IconArrowTop />
          </PrimaryButton>
        </article>
        <img
          src={coffe_cup_illustrarion}
          alt="blue illustration of a coffee cup"
        />
      </div>
    </section>
  );
}

export default About;
