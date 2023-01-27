import React from "react";
import airtelLogo from "../assets/images/airtel.svg";
import gloLogo from "../assets/images/glo.svg";
import mtnLogo from "../assets/images/mtn.svg";
import nmobileLogo from "../assets/images/9mobile.svg";

export default function Balance() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-start">
          <svg
            className="h-12 w-12"
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="11"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill="#000"
              fill-opacity=".7"
              d="M5.193 10.43.629 5.88a.472.472 0 0 1-.115-.177A.595.595 0 0 1 .48 5.5c0-.072.012-.14.034-.203A.472.472 0 0 1 .63 5.12L5.193.557a.643.643 0 0 1 .474-.19c.19 0 .352.068.487.204a.65.65 0 0 1 .203.474.65.65 0 0 1-.203.474L2.173 5.5l3.981 3.981c.127.127.19.282.19.467a.658.658 0 0 1-.203.481.65.65 0 0 1-.474.203.65.65 0 0 1-.474-.203Z"
            />
          </svg>
          <p className=" text-3xl text-[#5D6C74] font-medium">Balance Codes</p>
        </div>

        <div className="mt-8">
          <p className=" text-3xl font-medium">
            Choose your Network Provider and your Data Type
          </p>
        </div>

        <div className=" flex flex-col justify-between mt-8">
          <div className="flex justify-around my-5">
            <figure>
              <div className=" h-32 md:h-40 lg:h-56 xl:h-64 w-auto bg-[#FEC52866] rounded-3xl p-2 shadow-2xl shadow-mtngrad">
                <img src={mtnLogo} alt="mtn logo" className=" h-full w-full" />
              </div>
              <figcaption className=" text-3xl text-[#5D6C74] font-normal mt-3 text-center">
                MTN
              </figcaption>
            </figure>
            <div className="flex flex-col text-3xl text-[#5D6C74] font-normal gap-10 justify-center">
                <p>Normal Data : *131*4#</p>
                <p>SME Data : *461*4#</p>
                <p>Airtime  : *461*4#</p>
            </div>
          </div>
          <div className="flex justify-between my-5">
            <figure>
              <div className="h-32 md:h-40 lg:h-56 xl:h-64 w-auto bg-[#5BFD1F66] rounded-3xl p-2 shadow-2xl shadow-glograd">
                <img src={gloLogo} alt="glo logo" className=" h-full w-full" />
              </div>
              <figcaption className=" text-3xl text-[#5D6C74] font-normal mt-3 text-center">
                GLO
              </figcaption>
            </figure>
          </div>
          <div className="flex justify-between my-5">
            <figure>
              <div className="h-32 md:h-40 lg:h-56 xl:h-64 w-auto bg-[#ED1B2466] rounded-3xl p-2 shadow-2xl shadow-airtelgrad">
                <img
                  src={airtelLogo}
                  alt="airtel logo"
                  className=" h-full w-full"
                />
              </div>
              <figcaption className=" text-3xl text-[#5D6C74] font-normal mt-3 text-center">
                AIRTEL
              </figcaption>
            </figure>
          </div>
          <div className="flex justify-between my-5">
            <figure>
              <div className="h-32 md:h-40 lg:h-56 xl:h-64 w-auto bg-[#123B0280] rounded-3xl p-2 shadow-2xl shadow-[#123B0280]">
                <img
                  src={nmobileLogo}
                  alt="9mobile logo"
                  className=" h-full w-full"
                />
              </div>
              <figcaption className=" text-3xl text-[#5D6C74] font-normal mt-3 text-center">
                9MOBILE
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
