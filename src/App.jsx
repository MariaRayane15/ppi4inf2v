import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { LuckyNumber } from "./components/LuckyNumber";

export default function App() {
  return (
    <>
      <div className="container">
        <LuckyNumber />
      </div>
    </>
  );
}