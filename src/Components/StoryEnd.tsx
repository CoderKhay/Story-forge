type StoryEndProps = {
  onRestart: () => void;
};

const StoryEnd = ({ onRestart }: StoryEndProps) => {
  return (
    <div className="dark:text-white flex flex-col gap-4 items-center">
      <p>The End</p>
      <button
        className="cursor-pointer dark:bg-darkmode-accent bg-lightmode-accent text-white p-2 rounded-md w-20 dark:shadow-darkmode-accent/60 shadow-lightmode-accent shadow-lg"
        onClick={onRestart}
      >
        Restart
      </button>
    </div>
  );
};

export default StoryEnd;
