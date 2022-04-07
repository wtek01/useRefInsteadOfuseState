import "./styles.css";
import { useRef, useState } from "react";

export default function LogButtonClicks() {
  const countRef = useRef(0);
  const [countState, setCountState] = useState(0);
  const handle = () => {
    setCountState(countRef.current++);
    console.log(`Clicked ref ${countRef.current} times`);
    console.log(`Clicked state ${countState} times`);
  };
  console.log("I rendered!");
  return <button onClick={handle}>Click me</button>;
}
