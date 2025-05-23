import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";

export default function App() {
  return (
    <div>
      <h1>Meu primeiro React App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsum,
        aliquid alias nemo consectetur dignissimos delectus quos nisi deleniti
        obcaecati vitae dolorem fuga, neque placeat laborum deserunt maiores
        mollitia? Excepturi?
      </p>
    </div>
    // React Fragment
    <>  
      <MyText />
      <MyText />
      <MyText />
    </>
  );
}



// import "./styles/theme.css";
// import "./styles/global.css";
// import { MyText } from "./components/MyText";

// export default function App() {
//   return (
//     <div>
//       <h1>Meu primeiro React App</h1>
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//         Quod quas error aliquam eligendi sit in est, a repellendus cupiditate. 
//         Atque sunt quam culpa inventore dolor dolorum neque suscipit reprehenderit nihil!</p>
//     </div>

    
//   );
// }
