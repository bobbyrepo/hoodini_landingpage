import "./App.css";
import bg from "./landingbg.png";

function App() {
  return (
    <div className="relative ">
      <img src={bg} alt="" className="w-full h-full blur"></img>
      <div className="absolute top-0 left-0 w-full h-full bgCol1 opacity-50"></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center z-10">
        <h1 className="myFont text-3xl mb-8 font-bold text-white">
          Coming Soon
        </h1>
        <p className="text-2xl font-medium text-white">
          Generate High-Quality AI generated Design prints on
        </p>
        <p className="text-2xl font-medium text-white">
          Fits and order it right away!
        </p>
        <p className="text-2xl font-medium text-white">
          Explore the era of AI generated Fashion.
        </p>
      </div>
    </div>
  );
}

export default App;
