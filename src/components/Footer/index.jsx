import { IconFacebook, IconInstagram, IconSend, IconTwitter } from "../Icons";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_content}>
        <a href="/" alt="Coffee trip cup with site name" title="Back to home" />
        <div className={styles.content}>
          <h3 className={styles.subtitle}>
            Inscreva-se <br /> para saber mais
          </h3>
          <div className={styles.input_container}>
            <input type="email" placeholder="Email" />
            <button className={styles.send_button}>
              <IconSend />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.subtitle}>Siga-nos no</h3>
          <div className={styles.follow_up_container}>
            <a
              href="https://www.instagram.com/"
              className={styles.social_media_button}
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              className={styles.social_media_button}
            >
              <IconFacebook />
            </a>
            <a href="https://x.com/" className={styles.social_media_button}>
              <IconTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
