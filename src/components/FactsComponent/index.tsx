"use client";
import useScrollSection from "@/hooks/useScrollSection";
import classNames from "classnames";
import {
  MONALISA_GRID_IMAGE2,
  MONALISA_GRID_IMAGE4,
  MONALISA_GRID_IMAGE5,
  MONALISA_GRID_IMAGE6,
} from "@/constants/images";

const FactsComponent = () => {
  const { divRef, current } = useScrollSection();

  return (
    <section
      className={classNames(
        "relative flex-col items-center flex h-[400vh] bg-[#0b1215]"
      )}
      ref={divRef}
    >
      <div className="container sticky top-10 flex w-full min-h-[100vh] flex-col items-center justify-center  gap-[99px]  overflow-hidden">
        <div className="flex py-5 w-[80%] items-center gap-5">
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
                  The painting is thought to be of Lisa Gherardini, the wife of
                  Francesco del Giocondo
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
          <div className="w-full hidden md:flex items-center justify-center">
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
      </div>
    </section>
  );
};

export default FactsComponent;
