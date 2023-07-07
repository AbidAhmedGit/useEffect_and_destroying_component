import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useEffect(() => {
  //   console.log("each time render");
  // },[]);
  // destroy component for not going to next page
  useEffect(() => {
    console.log("on page mount");
    return () => {
      console.log("ummount");
    };
  }, []);

  // useEffect(() => {
  //   console.log("on couneter change");
  // }, [counter2]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setCounter2(counter2 + 1)}> increment </button>
    </div>
  );
}
