import "./App.css";
import MyPhoto from "./assets/MyPhoto.png";
import Laptop from "./assets/apple macbook pro laptop mockup.png"

function App() {
  return (
    <>
      <div className="bg-gray-900 overflow-hidden">
        {/* Introduction */}
        <div className="h-screen flex items-center overflow-hidden">
          <div className="flex-3">
            <h1 className="text-gray-500 text-[60vw] cursor-default">{`Hi`}</h1>
          </div>
          <div className="flex-1">
            <img src={MyPhoto} alt="" className="w-full" />
          </div>
        </div>
        {/* name container */}
        <div className="h-screen bg-slate-600 flex items-center justify-center">
          <h2 className="text-[20vw] text-gray-500 cursor-default">{`I'm Amit`}</h2>
        </div>
        {/* job tittle container */}
        <div className="h-screen bg-slate-800 jobTitleContainerOne">
          <h2 className="text-[10vw] text-gray-500 h-screen flex items-center justify-center">a Web Developer</h2>
        </div>
        <div className="h-screen bg-slate-600 jobTitleContainerTwo">
          <h2 className="text-[10vw] text-gray-800 h-screen flex items-center justify-center">and UI/UX Designer</h2>
        </div>
      </div>
      {/*Projects*/}
      <div className="flex flex-col gap-[30vw] px-[100px]">
        <h2 className="text-[10vw] text-gray-500">Here are my recent projects</h2>
        {/* Project One */}
        <div className="flex items-center gap-[100px] h-screen flex-col lg:flex-row ">
          <div className="relative w-[300px] h-[600px]">
            <img src={Laptop} alt="project_one" />
            <div className="absolute">
              <img src="" alt="" />
            </div>
          </div>
          {/* projectDetail */}
          <div>
            <h1>QuikNest</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia debitis, aspernatur consequatur distinctio, aliquam recusandae voluptate quasi quam a reprehenderit voluptatibus. Id similique nulla optio at aliquam impedit recusandae! Porro.
            </p>
            {/* Button */}
            <button>View Project</button>
          </div>
        </div>
        {/* Project Two */}
        <div>
          <div>
            <img src={Laptop} alt="project_two" />
            <div>
              <img src="" alt="" />
            </div>
          </div>
          {/* projectDetail */}
          <div>
            <h1>QuikNest</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia debitis, aspernatur consequatur distinctio, aliquam recusandae voluptate quasi quam a reprehenderit voluptatibus. Id similique nulla optio at aliquam impedit recusandae! Porro.
            </p>
            {/* Button */}
            <button>View Project</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
