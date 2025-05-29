import styles from "./MyTextList.module.css";
import { MyText } from "./MyText";

export default function App() {
  const texts = [
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
  ];

  return (
    // React Fragment
     <div className={styles.container}>
      {texts.map((text, index) => {
        return (
          <MyText key={index} title={`${text.title} ${index + 1}`}>
            {text.text}
          </MyText>
        );
      })}
    </>
  );
}