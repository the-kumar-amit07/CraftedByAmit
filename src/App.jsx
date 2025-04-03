import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { HomePage, AboutMe, ProjectPage } from "./pages";

function App() {
  const [loader, setLoader] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const introRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoader((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowLoader(false);
            introRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showLoader ? (
        <div
          className={`h-screen flex items-center justify-center lg:items-end lg:justify-end bg-[#2d2d38] text-gray-600 font-montserrat transition-transform duration-700 `}
        >
          <div className="p-10 text-9xl font-bold">
            <h1>{loader}%</h1>
          </div>
        </div>
      ) : (
        <div
          ref={introRef}
          className="overflow-x-hidden bg-[#bfc0c0] relative"
        >
          <div className="flex justify-center my-4 absolute top-0 left-1/2 z-50 *:transform -translate-x-1/2">
            <Navbar />
          </div>
          <HomePage />
          <ProjectPage />
          <AboutMe />
        </div>
      )}
    </>
  );
}

export default App;
