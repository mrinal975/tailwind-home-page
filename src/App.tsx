import "./App.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ReactTyped } from "react-typed";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold ">Hello world!</h1>
      <AiOutlineClose />
      <AiOutlineMenu size={25} />
      <ReactTyped
        strings={["Hello", "World"]}
        typeSpeed={120}
        backSpeed={140}
        loop
      />
    </>
  );
}

export default App;
