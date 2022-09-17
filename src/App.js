import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// let name = "Robin";
function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyze"/> 
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
