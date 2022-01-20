import { useEffect } from "react";

export default function Spy(props) {
  useEffect(() => {
    const spyAction = () => console.log("YOU CLICKED");
    document.addEventListener("click", spyAction);

    return () => document.removeEventListener("click", spyAction);
  }, []);
  return (
    <div>
      <span onClick={props.onClick} style={{ fontSize: 50 }}>
        👮
      </span>
    </div>
  );
}
