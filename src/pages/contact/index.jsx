import { PrimaryButton } from "../../components/Button";

import { IconEmail } from "../../components/Icons";

import styles from "./Contact.module.css";

function Contact() {
  const handleSubmit = () => {
    window.location.reload();
  };

  return (
    <section className={styles.section_container}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Contato</h2>
        <div className={styles.form_container}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label>
              <input type="text" placeholder="Nome" required />
            </label>
            <label>
              <input type="email" placeholder="Email" required />
            </label>
            <label>
              <textarea
                placeholder="Digite sua mensagem aqui"
                required
              ></textarea>
            </label>
            <PrimaryButton type="submit">Enviar</PrimaryButton>
          </form>
          <a
            href="mailto:sac@cafeevoce.com.br"
            className={styles.email_container}
          >
            <div>
              <IconEmail />
            </div>
            <p>sac@cafeevoce.com.br</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
