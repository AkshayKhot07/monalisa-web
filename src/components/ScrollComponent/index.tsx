"use client";
import useScrollSection from "@/hooks/useScrollSection";
import classNames from "classnames";
import "./FactsComponent.css";
import {
  MONALISA_GRID_IMAGE1,
  MONALISA_GRID_IMAGE2,
  MONALISA_GRID_IMAGE3,
  MONALISA_GRID_IMAGE4,
  MONALISA_GRID_IMAGE5,
  MONALISA_GRID_IMAGE6,
} from "@/constants/images";

const ScrollComponent = () => {
  const { divRef, current, scrollPercent } = useScrollSection();

  console.log({ current, scrollPercent });

  return (
    <div
      className={classNames(
        "relative hidden  h-full flex-col items-center  lg:flex lg:h-[400vh] bg-[#0b1215]"
      )}
      ref={divRef}
    >
      <div className="sticky top-10 flex w-full min-h-[100vh] flex-col items-center justify-center  gap-[99px]  overflow-hidden">
        <div className="flex py-5 w-[80%] items-center">
          <div className=" h-[300px] w-full flex items-center justify-start">
            {current === 0 && (
              <div className="flex flex-col items-center justify-start gap-2">
                <h2 className="text-4xl text-white font-bold w-full italic">
                  Artist: Leonardo da Vinci painted the Mona Lisa
                </h2>
                <p className="text-lg text-[#64748b]  italic">
                  Between 1503 and 1506, and may have continued working on it
                  until 1517
                </p>
              </div>
            )}
            {current === 1 && (
              <div className="flex flex-col items-center justify-start gap-2">
                <h2 className="text-4xl text-white font-bold  w-full  italic">
                  Strange fact about the painting
                </h2>
                <p className="text-lg text-[#64748b]  italic">
                The painting is thought to be of Lisa Gherardini, the wife of Francesco del Giocondo
                </p>
              </div>
            )}
            {current === 2 && (
              <div className="flex flex-col items-center justify-start gap-2">
                <h2 className="text-4xl text-white font-bold  w-full  italic">
                  Where is it Located?
                </h2>
                <p className="text-lg text-[#64748b]  italic">
                  The Mona Lisa is on display at the Louvre in Paris, France
                </p>
              </div>
            )}
            {current === 3 && (
              <div className="flex flex-col items-center justify-start gap-2">
                <h2 className="text-4xl text-white font-bold  w-full  italic">
                  Painting Techniques Used
                </h2>
                <p className="text-lg text-[#64748b]  italic">
                  {
                    'Da Vinci used a painting technique called "sfumato" to create a blurred effect and blend colors'
                  }
                </p>
              </div>
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            {current === 0 && (
              <div className="p-5 bg-white rounded-md">
                <img
                  src={MONALISA_GRID_IMAGE5}
                  alt=""
                  className="h-[380px] w-[300px] rounded-md"
                />
              </div>
            )}
            {current === 1 && (
              <div className="p-5 bg-white rounded-md">
                <img
                  src={MONALISA_GRID_IMAGE2}
                  alt=""
                  className="h-[380px] w-[300px]  rounded-md"
                />
              </div>
            )}
            {current === 2 && (
              <div className="p-5 bg-white rounded-md">
                <img
                  src={MONALISA_GRID_IMAGE6}
                  alt=""
                  className="h-[380px]  w-[300px]  rounded-md"
                />
              </div>
            )}
            {current === 3 && (
              <div className="p-5 bg-white rounded-md">
                <img
                  src={MONALISA_GRID_IMAGE4}
                  alt=""
                  className="h-[380px]  w-[300px] rounded-md"
                />
              </div>
            )}
          </div>
        </div>
        {/* <div className="relative grid grid-cols-4 gap-6">
          <div
            className={classNames(
              "absolute h-full w-[calc(25%-24px)] rounded-lg border-[3px] border-primary-1 shadow-lg shadow-[#0E0F11] transition-all duration-500",
              current === 0
                ? "left-0"
                : current === 1
                ? "left-[calc(25%+12px)]"
                : current === 2
                ? "left-[calc(50%+12px)]"
                : "left-[calc(75%+12px)]"
            )}
          />
          {sliderData.map((item, index) => (
            <div
              key={item?.title}
              className="flex flex-col items-center  gap-6 p-6"
            >
              <div
                className={classNames(
                  "relative h-[69px] w-[69px] rounded-lg",
                  current === index
                    ? "bg-primary-1 fill-white"
                    : "bg-light-text-2 fill-primary-1"
                )}
              >
                {current === index ? (
                  <Image
                    src={item?.iconOne}
                    alt={item?.alt}
                    fill
                    className="object-contain p-3"
                  />
                ) : (
                  <Image
                    src={item?.iconTwo}
                    alt={item?.alt}
                    fill
                    className="object-contain p-3"
                  />
                )}
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <h3
                  className={classNames(
                    "text-2xl font-[600]",
                    current === index ? "text-white" : "text-light-text-5"
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={classNames(
                    "text-justify text-sm font-[600] leading-6 ",
                    current === index ? "text-white" : "text-light-text-5"
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ScrollComponent;
