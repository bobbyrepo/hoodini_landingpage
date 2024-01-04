import "./App.css";
import bg from "./landingbg.png";
import grid from "./assets/background.png";
import insta from "./assets/mdi_instagram.png";

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
        <h1 className="myFont px-5 lg:text-8xl md:text-7xl sm:text-6xl text-5xl md:mb-8 mb-3 text-white">
          Coming Soon
        </h1>
        <p className="myFont1 pt-5 lg:text-4xl sm:text-3xl text-2xl">
          (That’s what she said)
        </p>
        <button className="md:py-3 py-1 lg:px-14 md:px-10 sm:px-6 px-3 flex md:space-x-8 space-x-3 justify-evenly items-center bgCol2 mt-12 mx-auto border-2 border-black">
          <h1 className="myFont lg:text-2xl md:text-xl sm:text-lg text-sm">
            Follow Our Journey
          </h1>
          <span>
            <img className="" src={insta} alt="" />
          </span>
        </button>
        {/* <div className="myFont1 ">
          <p className="md:text-2xl sm:text-lg text-md font-medium">
            Generate High-Quality AI generated Design prints on
          </p>
          <p className="md:text-2xl sm:text-lg text-md font-medium ">
            Fits and order it right away!
          </p>
          <p className="md:text-2xl sm:text-lg text-md font-medium">
            Explore the era of AI generated Fashion.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
