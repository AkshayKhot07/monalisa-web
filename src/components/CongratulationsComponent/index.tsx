import classNames from "classnames";

const CongratulationsComponent = () => {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.8) 0.5px, rgba(0, 0, 0, 0.8) 0.5px)",
        backgroundSize: "10px 10px",
      }}
    >
      <div
        className={classNames(
          "container text-2xl min-h-[100vh] flex flex-col items-center justify-center"
        )}
      >
        <p className="font-bold text-center bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
          Congratulations, you owe my daughter Lisa now!
        </p>
        <div className="mt-2">
          <p className="text-white text-center text-base">
            Keep my daughter protected at all cost,{" "}
          </p>
          <p className="text-white text-center text-base">
            because your value will decline eventually but not hers!
          </p>
          <p className="text-yellow-500 text-end text-base">
            {" "}
            - Leonardo Da Vinci
          </p>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsComponent;
