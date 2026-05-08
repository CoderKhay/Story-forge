import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { theKnock } from "../data";
import StoryEnd from "./StoryEnd";

const AvailableStories = () => {
  const [currentNode, setCurrentNode] = useState(theKnock);
  const [direction, setDirection] = useState(1);

  return (
    <>
      {currentNode?.choices.length === 0 ? (
        <StoryEnd onRestart={() => setCurrentNode(theKnock)} />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={currentNode.id}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.35 }}
            className="dark:text-white h-full flex flex-col justify-center items-center w-full md:w-150 text-center p-3"
          >
            <div className="border dark:border-darkmode-accent/40 border-lightmode-accent mr-3 mt-12 p-3 rounded-xl">
              <h1 className="text-left mb-10 text-3xl border-b-2 w-50 pb-4 dark:border-darkmode-accent/20 border-lightmode-accent/40 select-none">
                {currentNode?.title}
              </h1>
              <p className="text-xs md:text-sm">{currentNode.text}</p>
            </div>
            <div className="mt-10 p-5 md:p-2 flex justify-between w-full ">
              {currentNode.choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() => {
                    setDirection(1);
                    setCurrentNode(choice);
                  }}
                  className="text-xs border border-darkmode-accent hover:border-darkmode-accent/50 hover:scale-115 transition-all ease-in-out duration-100 delay-100 cursor-pointer p-3 rounded-md text-wrap w-40 md:w-50 dark:bg-darkmode-accent bg-lightmode-accent text-white hover:dark:shadow-darkmode-accent/40 shadow-lg hover:shadow-lightmode-accent"
                >
                  {choice?.label}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default AvailableStories;
