import { Link } from "react-router";
import { motion } from "motion/react";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center gap-2 p-3 select-none">
      <div className="flex flex-row gap-3 items-center">
        <div className="dark:bg-darkmode-accent rounded-full h-2 w-2 bg-lightmode-accent" />
        <p className=" dark:text-darkmode-text">Interactive Fiction</p>
        <div className="dark:bg-darkmode-accent rounded-full h-2 w-2 bg-lightmode-accent" />
      </div>
      <h1 className="dark:text-white text-lightmode-text text-6xl md:text-5xl">
        StoryForge
      </h1>
      <p className="dark:text-white w-[75%] md:w-[45%] mt-5 text-lightmode-text text-xs text-center">
        Immerse yourself in narratives where every choice matters. Shape the
        story, discover multiple endings, and experience interactive fiction
        like never before.
      </p>

      <motion.button
        whileHover={{ scale: 1.025 }}
        className="flex justify-center items-center font-semibold bg-lightmode-accent text-white dark:bg-darkmode-accent mt-10 rounded-md dark:text-white/60 w-40 h-12 cursor-pointer hover:dark:bg-darkmode-hover hover:dark:text-black transition-all ease-in-out delay-100 duration-500"
      >
        <Link
          to="/stories"
          className=" w-full h-full rounded-md flex items-center justify-center"
        >
          Start Story
        </Link>
      </motion.button>

      <div className="mt-10 text-xs  w-full h-10 flex justify-center items-center">
        <div className="flex items-center justify-center gap-4 animate-bounce">
          <div className="w-2 h-2 rounded-full dark:bg-white bg-black" />
          <p className="dark:text-white">Your choices shape the story</p>
          <div className="w-2 h-2 rounded-full dark:bg-white bg-black" />
        </div>
      </div>
    </div>
  );
}

export default App;
