import React from "react";
import airtelLogo from "../assets/images/airtel.svg";
import gloLogo from "../assets/images/glo.svg";
import mtnLogo from "../assets/images/mtn.svg";
import nmobileLogo from "../assets/images/9mobile.svg";
import closeLogo from "../assets/images/close.svg";

export default function Purchase() {
  
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
          <p className=" text-3xl text-[#5D6C74] font-medium">Buy Data</p>
        </div>

        <div className="mt-8">
          <p className=" text-3xl font-medium">Select Network</p>
        </div>

        <div className=" flex justify-between mt-8">
          <figure>
            <div className=" h-32 md:h-40 lg:h-56 xl:h-64 w-auto bg-[#FEC52866] rounded-3xl p-2 shadow-2xl shadow-mtngrad">
              <img src={mtnLogo} alt="mtn logo" className=" h-full w-full" />
            </div>
            <figcaption className=" text-3xl text-[#5D6C74] font-normal mt-3 text-center">
              MTN
            </figcaption>
          </figure>
          <figure>
            <div className="h-32 md:h-40 lg:h-56 xl:h-64 w-auto bg-[#5BFD1F66] rounded-3xl p-2 shadow-2xl shadow-glograd">
              <img src={gloLogo} alt="glo logo" className=" h-full w-full" />
            </div>
            <figcaption className=" text-3xl text-[#5D6C74] font-normal mt-3 text-center">
              GLO
            </figcaption>
          </figure>
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
        <form className="mt-10">
          <fieldset className="mb-4">
            <label className=" text-3xl text-[#5D6C74] font-medium mx-10" htmlFor="phone">
              Phone Number:
            </label>
            <input
              className=" text-4xl font-normal w-auto my-4 md:my-4 border-2 ml-10 rounded-lg border-gradient1 p-2 "
              required
              placeholder="08x xxxxxxxx"
              type={"tel"}
              id="phone"
            />
          </fieldset>
          <fieldset className="my-8">
            <label className=" text-3xl text-[#5D6C74] font-medium mx-10" htmlFor="phone">
              Data Plan Group:
            </label>
            <input
              className=" text-4xl font-normal w-auto my-4 md:my-4 border-2 ml-10 lg:ml-7 rounded-lg border-gradient1 p-2"
              data-bs-toggle="modal" data-bs-target="#dataPlanGroup"
              readOnly
              placeholder="Select Data Plan Group"
              type={"text"}
              id="phone"
            />
          </fieldset>
          <fieldset className="my-8">
            <label className=" text-3xl text-[#5D6C74] font-medium mx-10" htmlFor="phone">
              Network Plans:
            </label>
            <input
              className=" text-4xl font-normal w-auto my-4 md:my-4 border-2 ml-10 lg:ml-14 rounded-lg border-gradient1 p-2"
              data-bs-toggle="modal" data-bs-target="#dataPlan"
              readOnly
              placeholder="Select a Data Plan"
              type={"text"}
              id="phone"
            />
          </fieldset>
          <fieldset className="my-8 w-2/3 flex justify-center">
            <legend className=" ml-9 text-3xl text-[#5D6C74] font-medium m-5">
              Payment Method:
              </legend>
              <label className=" text-4xl font-normal text-center text-gradient2 cursor-pointer bg-gradient1 w-full border-2 ml-12 rounded-lg border-gradient1 py-4 px-8">
            <input
              className=" hidden"
              name="payment"
              type={"radio"}
              id="wallet"
            />Wallet</label>
            <label className="text-4xl font-normal text-center text-gradient2 bg-gradient1 w-full cursor-pointer border-2 ml-12 rounded-lg border-gradient1 py-4 px-8">
            <input
              className=" hidden"
              name="payment"
              type={"radio"}
              id="card"
            />Card</label>
            
          </fieldset>
          <fieldset className="mb-8 mt-12">
            <label className=" text-3xl text-[#5D6C74] font-medium mx-10" htmlFor="phone">
              Password:
            </label>
            <input
              className=" text-4xl font-normal w-auto my-4 border-2 ml-10 rounded-lg border-gradient1 p-2 "
              required
              placeholder="????????????????????????"
              type={"tel"}
              id="phone"
            />
          </fieldset>
          <p className="text-2xl -mt-7 text-center text-[#5D6C74]">Forgot Password?</p>
          <div className="flex justify-center w-1/3 my-12 mx-auto">
            <button className=" text-3xl font-medium bg-[#6FE044] text-[#5D6C74] text-center w-full h-16 p-3 rounded-3xl shadow-2xl shadow-[#6FE044]">Subscribe</button>
          </div>
        </form>
      </div>

      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="dataPlan"
        tabindex="-1"
        aria-labelledby="dataPlanGroupLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto bg-primary rounded-xl pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <div className=" h-20 w-auto bg-[#FEC52866] rounded-2xl p-1">
                <img src={mtnLogo} alt="mtn logo" className=" h-full w-full" />
              </div>
              <p className=" text-2xl font-medium text-[#000000B2]">
                MTN Coperate Gifting Data
              </p>
              <img
                src={closeLogo}
                data-bs-dismiss="modal"
                alt="close icon"
                className=" h-8 w-8 cursor-pointer"
              />
            </div>
            <p className=" text-3xl font-normal text-gradient1 text-center -mt-10">
              Bal: *131*4#
            </p>
            <div>
              <ul className="py-2 px-4 space-y-5 scrollbar-thin scrollbar-thumb-gradient1 scrollbar-thumb-rounded scrollbar-track-black-300 h-screen overflow-y-scroll">
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">1GB</p>
                  <p className=" text-2xl text-[#000000B2]">???240</p>
                  <p className=" text-2xl text-[#000000B2]">30Days</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade fixed top-10 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="dataPlanGroup"
        tabindex="-1"
        aria-labelledby="dataPlanLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog relative w-auto bg-primary rounded-xl pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <div className=" h-20 w-auto bg-[#FEC52866] rounded-2xl p-1">
                <img src={mtnLogo} alt="mtn logo" className=" h-full w-full" />
              </div>
              <p className=" text-2xl font-medium text-[#000000B2]">
                MTN Data Plan Group
              </p>
              <img
                src={closeLogo}
                data-bs-dismiss="modal"
                alt="close icon"
                className=" h-8 w-8 cursor-pointer"
              />
            </div>
            <div>
              <ul className="py-2 px-4 space-y-5 scrollbar-thin scrollbar-thumb-gradient1 scrollbar-thumb-rounded scrollbar-track-black-300 h-60 overflow-y-scroll">
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">MTN SME Data</p>
                  <p className=" text-2xl text-[#000000B2]">Bal: *461*4#.</p>
                </li>
                <li className="flex justify-between bg-gradient2 rounded-2xl w-full h-16 p-2 my-3">
                  <p className=" text-2xl text-[#000000B2]">MTN Coperate Gifting Data</p>
                  <p className=" text-2xl text-[#000000B2]">Bal: *131*4#</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
