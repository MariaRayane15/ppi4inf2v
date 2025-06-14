import styles from "./Footer.module.css";
import { Github, Instagram, Phone} from "lucide-react";

export function Footer() {
  
  return (
   <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            <h1>IFRN - Campus Macau</h1>
            <h1>Curso Técnico em Informática</h1>
            <h1>Programação para Internet 2025</h1>
          </div>
          <div>
            <p>Maria Rayane Nascimento Miranda</p>
          </div>
          <div className={styles.icons}>
            <a href="https://github.com/MariaRayane15/ppi4inf2v" target="_blank">
              <Github />
            </a>
            <a href="https://www.instagram.com/maah_rayane15/?utm_source=ig_web_button_share_sheet" target="_blank">
              <Instagram />
            </a>
            <a href="https://web.whatsapp.com/" target="_blank">
              <Phone />
            </a>
          </div>
        </div>
      </footer>
  );
}