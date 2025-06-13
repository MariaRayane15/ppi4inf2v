import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <header className={styles.header} />
      <div className={styles.header}>
        <h1>Foco, Força e Fé</h1>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h4>My Text 0</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odit nihil labore ex quibusdam, fuga minus saepe ad amet 
              aperiam corrupti dolores laborum animi aut natus quia id. Ex, odio nulla?.</p>
          </div>
          <div className={styles.card}>
            <h2>My Text 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis labore amet 
              alias eveniet fuga! Minus hic quis sint harum impedit, delectus ut aliquam? 
              Delectus praesentium quidem aspernatur, rerum reiciendis quos!</p>
          </div>
          <div className={styles.card}>
            <h2>My text 2</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Deleniti, accusantium ipsum? Id, iste placeat! Perspiciatis temporibus ipsam ab alias obcaecati, 
              culpa, saepe facere iure itaque consequatur eius? Eos, natus odit.</p>
          </div>
          <div className={styles.card}>
            <h2>My Text 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Delectus blanditiis corrupti nemo reiciendis quos, quia quaerat ipsam hic? 
              Ratione, libero magnam cum deserunt est quidem eligendi molestiae perferendis? Commodi, ratione!</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer} />
      <div className={styles.footer}>
        <h3>IFRN - Campus Macau</h3>
        <h3>Curso Técnico em Informática</h3>
        <h3>Programação para Internet 2025</h3>
      </div>
    </div>
  );
}