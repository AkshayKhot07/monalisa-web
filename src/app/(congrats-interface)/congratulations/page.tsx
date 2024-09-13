import classNames from "classnames";

async function Congratulations() {
  return (
    <div
      className={classNames(
        "text-2xl min-h-[80vh] flex flex-col items-center justify-center",
        "bg-[#0b1215] bg-opacity-80 bg-[radial-gradient(0.5px_0.5px,#FFFFFF_0.5px,#000000_0.5px)] bg-[length:10px_10px]",

      )}
    >
      <p className="font-bold text-center bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
        Congratulations, you owe my daughter Lisa now!
      </p>
      <div className="mt-2">

      <p className="text-white text-center text-base">Keep my daughter protected at all cost, </p>
      <p className="text-white text-center text-base">because your value will decline eventually but not hers!</p>
      <p className="text-yellow-500 text-end text-base"> - Leonardo Da Vinci</p>
      </div>
    </div>
  );
}

export default Congratulations;
