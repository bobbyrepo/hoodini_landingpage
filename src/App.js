import "./App.css";
import bg from "./landingbg.png";
import grid from "./assets/background.png";

function App() {
  return (
    <div
      className="relative bgCol1"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-screen h-screen"></div>
      {/* <img src={bg} alt="" className=" w-[900px] blur"></img> */}
      {/* <div className="absolute top-0 left-0 w-full h-full bgCol1"></div> */}

      <div className="w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center z-10">
        <h1 className="myFont md:text-3xl sm:text-2xl text-xl md:mb-8 mb-3 font-bold text-white">
          Coming Soon
        </h1>
        <div className="myFont1 ">
          <p className="md:text-2xl sm:text-lg text-md font-medium">
            Generate High-Quality AI generated Design prints on
          </p>
          <p className="md:text-2xl sm:text-lg text-md font-medium ">
            Fits and order it right away!
          </p>
          <p className="md:text-2xl sm:text-lg text-md font-medium">
            Explore the era of AI generated Fashion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
