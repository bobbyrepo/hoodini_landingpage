import "./App.css";
import bg from "./landingbg.png";

function App() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="w-screen h-screen"></div>
      {/* <img src={bg} alt="" className=" w-[900px] blur"></img> */}
      <div className="absolute top-0 left-0 w-full h-full bgCol1 opacity-50"></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center z-10">
        <h1 className="myFont md:text-3xl sm:text-2xl text-xl md:mb-8 mb-3 font-bold text-white">
          Coming Soon
        </h1>
        <p className="md:text-2xl sm:text-lg text-md font-medium text-white">
          Generate High-Quality AI generated Design prints on
        </p>
        <p className="md:text-2xl sm:text-lg text-md font-medium text-white">
          Fits and order it right away!
        </p>
        <p className="md:text-2xl sm:text-lg text-md font-medium text-white">
          Explore the era of AI generated Fashion.
        </p>
      </div>
    </div>
  );
}

export default App;
