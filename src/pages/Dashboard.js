import React from "react";
import gloLogo from "../assets/images/glo.svg";
import airtelLogo from "../assets/images/airtel.svg";
import mtnLogo from "../assets/images/mtn.svg";

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="w-auto h-52 md:h-72 lg:h-96 py-3 md:py-6 lg:py-10 px-6 lg:px-20 bg-gradient-to-r flex justify-between from-gradient1 to-gradient2 rounded-3xl shadow-2xl shadow-gradient1">
        <div className="relative">
          <div className=" w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full bg-gradient-to-r from-balancegrad1 to-balancegrad2"></div>
          <div className=" w-40 h-40 md:w-52 md:h-52  lg:h-64 lg:w-64  rounded-full absolute top-1 left-2 md:bottom-12 md:left-3 bg-primary">
            <p className=" text-base md:text-2xl font-medium ml-5 lg:ml-9 mt-10 md:mt-14 font-sans">
              Wallet Balance:
            </p>
            <p className=" text-xl md:text-3xl font-bold ml-10 lg:ml-14 mt-3 font-sans">
              ₦20000
            </p>
          </div>
        </div>
        <div className="flex flex-col px-3 my-10 lg:my-20">
          <button className=" w-36 md:w-auto h-10 md:h-12 lg:h-16 bg-[#000000] rounded-xl flex justify-around p-3 text-primary place-items-center text-base md:text-xl">
            <svg
              className="h-7 md:h-10 w-7 md:w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill="#fff"
                fill-opacity=".5"
                d="M2 .675v2H0v1.333h2v2h1.333v-2h2V2.675h-2v-2H2Zm4.667 2v1.333h6v1.334h-4c-.734 0-1.334.6-1.334 1.333v4c0 .733.6 1.333 1.334 1.333h4v1.334H3.333v-6H2v6a1.333 1.333 0 0 0 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333v-1.52a1.333 1.333 0 0 0 .667-1.147v-4A1.333 1.333 0 0 0 14 5.528v-1.52c0-.733-.6-1.333-1.333-1.333h-6Zm2 4h4.666v4H8.667v-4Zm2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
              />
            </svg>
            <span>Fund Wallet</span>
          </button>
          <button className=" w-36 md:w-auto h-10 md:h-12 lg:h-16 bg-primary mt-5 rounded-xl flex justify-around p-1 md:p-3 place-items-center text-[#5D6C74] text-base md:text-xl">
            <svg
              className=" h-8 md:h-10 w-8 md:w-10 place-self-center"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity=".5"
                d="M4.471 5.838a.667.667 0 0 1 0 .943L3.253 8h6.414a.667.667 0 0 1 0 1.333H3.253l1.219 1.219a.667.667 0 0 1-.943.943L1.172 9.138a.667.667 0 0 1 0-.943l2.357-2.357a.667.667 0 0 1 .943 0ZM9.53.505a.667.667 0 0 1 .88-.056l.062.056 2.358 2.357a.667.667 0 0 1 .055.88l-.055.063L10.47 6.16a.666.666 0 0 1-.998-.88l.056-.062L10.747 4H4.333a.667.667 0 0 1-.078-1.329l.078-.004h6.414L9.53 1.447a.667.667 0 0 1 0-.943Z"
              />
            </svg>
            <span>Transfer Funds</span>
          </button>
        </div>
        <div className="my-5">
          <p className=" font-sans text-base md:text-xl lg:text-2xl text-[#5D6C74] font-medium">
            You are able to:
          </p>
          <div className="flex justify-between mt-3">
            <svg
              className=" h-7 md:h-8 lg:h-10 w-7 md:w-8 lg:w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity=".35"
                d="M7.597 1.413a.5.5 0 0 1-.851.524.427.427 0 0 0-.113-.088c-.098-.056-.311-.135-.71-.062-.272.05-.412.223-.499.445a1.4 1.4 0 0 0-.09.435V3.5A.667.667 0 0 0 6 4.167h.167a.667.667 0 0 0 .646-.5H6.5a.5.5 0 0 1 0-1h.833a.5.5 0 0 1 .5.5V3.5a1.667 1.667 0 0 1-1.666 1.667H6A1.667 1.667 0 0 1 4.333 3.5v-.86l.003-.054a2.4 2.4 0 0 1 .157-.718c.163-.418.522-.93 1.25-1.065.608-.111 1.061-.005 1.378.172.154.086.266.184.343.265.047.05.09.104.127.161l.004.007.001.003v.001h.001ZM1.17 1.278a.5.5 0 0 1 .497-.445h1.666a.5.5 0 0 1 0 1H2.114l-.043.388.011-.002a1.485 1.485 0 1 1 .266 2.948h-.147a1.5 1.5 0 0 1-1.247-.668l-.037-.055a.5.5 0 0 1 .832-.555l.037.055a.5.5 0 0 0 .416.223h.146a.485.485 0 1 0-.087-.964l-.672.122a.5.5 0 0 1-.586-.546l.166-1.5.001-.001ZM6.833 7a.5.5 0 0 1 .496.432l.004.068v5a.5.5 0 0 1-.995.068l-.005-.068v-5a.5.5 0 0 1 .5-.5ZM9.5 5a.5.5 0 0 1 .495.432L10 5.5v7a.5.5 0 0 1-.995.068L9 12.5v-7a.5.5 0 0 1 .5-.5Zm-8 6a.5.5 0 0 1 .495.432L2 11.5v1a.5.5 0 0 1-.995.068L1 12.5v-1a.5.5 0 0 1 .5-.5Zm10.662-8a.5.5 0 0 1 .5.427l.005.068v9a.5.5 0 0 1-.995.078l-.005-.068v-9A.5.5 0 0 1 12.162 3ZM4.167 9a.5.5 0 0 1 .495.432l.005.068v3a.5.5 0 0 1-.996.067l-.004-.068V9.5a.5.5 0 0 1 .5-.5Z"
              />
            </svg>
            <p className=" text-base md:text-xl lg:text-2xl font-sans font-normal">
              7.0GB Data
            </p>
          </div>
          <div className="flex justify-between mt-3">
            <svg
              className="h-7 md:h-8 lg:h-10 w-7 md:w-8 lg:w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity=".3"
                stroke-width="2"
                d="M9.367 1A6 6 0 0 1 14.7 6.293M9.367 3.667A3.333 3.333 0 0 1 12 6.333m2.667 4.614v2a1.332 1.332 0 0 1-1.454 1.333 13.195 13.195 0 0 1-5.753-2.047 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.047-5.78A1.333 1.333 0 0 1 2.74 1h2a1.333 1.333 0 0 1 1.333 1.147A8.56 8.56 0 0 0 6.54 4.02a1.333 1.333 0 0 1-.3 1.407l-.847.846a10.667 10.667 0 0 0 4 4l.847-.846a1.333 1.333 0 0 1 1.407-.3 8.56 8.56 0 0 0 1.873.466 1.334 1.334 0 0 1 1.147 1.354Z"
              />
            </svg>
            <p className="text-base md:text-xl lg:text-2xl font-sans font-normal">
              3hrs call
            </p>
          </div>
          <div className="flex justify-between mt-3">
            <svg
              className="h-7 md:h-8 lg:h-10 w-7 md:w-8 lg:w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill="#000"
                fill-opacity=".35"
                d="M0 .5v10h2.5v2.547l.813-.657 2.359-1.89H14V.5H0Zm1 1h12v8H5.328l-.14.11L3.5 10.953V9.5H1v-8ZM3 4v1h8V4H3Zm0 2v1h6V6H3Z"
              />
            </svg>
            <p className=" text-base md:text-xl lg:text-2xl font-sans font-normal">
              500+ SMS
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-12">
        <p className=" text-3xl font-normal mb-5">Services</p>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-10 lg:gap-x-10 gap-y-4 lg:gap-y-6">
          <button className=" w-auto h-12 lg:h-16 bg-gradient1 rounded-xl flex justify-around p-1 lg:p-3 text-primary place-items-center text-lg lg:text-xl shadow-2xl shadow-gradient1">
            <svg
              className=" h-6 w-6 lg:h-10 lg:w-10 "
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill="#fff"
                d="M7.597 1.413a.5.5 0 0 1-.851.524.427.427 0 0 0-.113-.088c-.098-.056-.311-.135-.71-.062-.272.05-.412.223-.499.445a1.4 1.4 0 0 0-.09.435V3.5A.667.667 0 0 0 6 4.167h.167a.667.667 0 0 0 .646-.5H6.5a.5.5 0 0 1 0-1h.833a.5.5 0 0 1 .5.5V3.5a1.667 1.667 0 0 1-1.666 1.667H6A1.667 1.667 0 0 1 4.333 3.5v-.86l.003-.054a2.4 2.4 0 0 1 .157-.718c.163-.418.522-.93 1.25-1.065.608-.111 1.061-.005 1.378.172.154.086.266.184.343.265.047.05.09.104.127.161l.004.007.001.003v.001h.001ZM1.17 1.278a.5.5 0 0 1 .497-.445h1.666a.5.5 0 1 1 0 1H2.114l-.043.388.011-.002a1.486 1.486 0 1 1 .266 2.948h-.147a1.5 1.5 0 0 1-1.247-.668l-.037-.055a.5.5 0 0 1 .832-.555l.037.055a.5.5 0 0 0 .416.223h.146a.485.485 0 1 0-.087-.964l-.672.122a.5.5 0 0 1-.586-.546l.166-1.5.001-.001ZM6.833 7a.5.5 0 0 1 .496.432l.004.068v5a.5.5 0 0 1-.995.068l-.005-.068v-5a.5.5 0 0 1 .5-.5ZM9.5 5a.5.5 0 0 1 .495.432L10 5.5v7a.5.5 0 0 1-.995.068L9 12.5v-7a.5.5 0 0 1 .5-.5Zm-8 6a.5.5 0 0 1 .495.432L2 11.5v1a.5.5 0 0 1-.995.068L1 12.5v-1a.5.5 0 0 1 .5-.5Zm10.662-8a.5.5 0 0 1 .5.427l.005.068v9a.5.5 0 0 1-.995.078l-.005-.068v-9A.5.5 0 0 1 12.162 3ZM4.167 9a.5.5 0 0 1 .495.432l.005.068v3a.5.5 0 0 1-.996.067l-.004-.068V9.5a.5.5 0 0 1 .5-.5Z"
              />
            </svg>
            <span>Buy Data</span>
          </button>

          <button className=" w-auto h-12 lg:h-16 bg-gradient1 rounded-xl flex justify-around p-3 text-primary place-items-center text-base lg:text-xl shadow-2xl shadow-gradient1">
            <svg
              className="h-4 w-4 lg:h-10 lg:w-10 "
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path fill="#fff" d="m5.333 3-2 3h1.334v2l2-3H5.333V3Z" />
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M9.637 5.424a4.522 4.522 0 0 1-.995 2.339c-.32.391-1.135 1.51-1.309 2.237H2.667c-.174-.727-.99-1.846-1.31-2.238a4.49 4.49 0 0 1-.563-4.837 4.605 4.605 0 0 1 1.722-1.89A4.738 4.738 0 0 1 5.001.333c.879 0 1.74.244 2.484.703a4.604 4.604 0 0 1 1.722 1.89c.38.774.53 1.642.43 2.498ZM6.86 9.334H3.139a7.038 7.038 0 0 0-.509-.936c-.232-.366-.485-.72-.757-1.058a3.823 3.823 0 0 1-.48-4.122 3.938 3.938 0 0 1 1.473-1.616A4.072 4.072 0 0 1 5 1c.756 0 1.496.21 2.135.603.633.39 1.144.95 1.472 1.616a3.823 3.823 0 0 1-.482 4.122c-.272.338-.525.691-.757 1.058a7.029 7.029 0 0 0-.508.934Z"
                clip-rule="evenodd"
              />
              <path
                fill="#fff"
                d="M2.667 11A.333.333 0 0 1 3 10.667h4a.333.333 0 1 1 0 .666H3A.333.333 0 0 1 2.667 11Z"
              />
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M2.667 12h4.666v1a.667.667 0 0 1-.666.667H3.333A.667.667 0 0 1 2.667 13v-1Zm.666.667h3.334V13H3.333v-.333Z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Electricty payment</span>
          </button>
          <button className=" w-auto h-12 lg:h-16 bg-gradient1 rounded-xl flex justify-around p-3 text-primary place-items-center text-base lg:text-xl shadow-2xl shadow-gradient1">
            <svg
              className="h-6 w-6 lg:h-10 lg:w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 25 20"
            >
              <path
                fill="#fff"
                d="M14.667 10.947v2a1.332 1.332 0 0 1-1.454 1.333 13.193 13.193 0 0 1-5.753-2.047 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.047-5.78A1.333 1.333 0 0 1 2.74 1h2a1.333 1.333 0 0 1 1.333 1.147A8.56 8.56 0 0 0 6.54 4.02a1.333 1.333 0 0 1-.3 1.407l-.847.846a10.667 10.667 0 0 0 4 4l.847-.846a1.334 1.334 0 0 1 1.407-.3 8.561 8.561 0 0 0 1.873.466 1.334 1.334 0 0 1 1.147 1.354ZM9.367 1A6 6 0 0 1 14.7 6.293M9.367 3.667A3.333 3.333 0 0 1 12 6.333"
              />
              <path
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity=".3"
                stroke-width="2"
                d="M9.367 1A6 6 0 0 1 14.7 6.293M9.367 3.667A3.333 3.333 0 0 1 12 6.333m2.667 4.614v2a1.332 1.332 0 0 1-1.454 1.333 13.193 13.193 0 0 1-5.753-2.047 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.047-5.78A1.333 1.333 0 0 1 2.74 1h2a1.333 1.333 0 0 1 1.333 1.147A8.56 8.56 0 0 0 6.54 4.02a1.333 1.333 0 0 1-.3 1.407l-.847.846a10.667 10.667 0 0 0 4 4l.847-.846a1.334 1.334 0 0 1 1.407-.3 8.561 8.561 0 0 0 1.873.466 1.334 1.334 0 0 1 1.147 1.354Z"
              />
            </svg>
            <span>Buy Airtime</span>
          </button>
          <button className=" w-auto h-12 lg:h-16 bg-gradient1 rounded-xl flex justify-around p-3 text-primary place-items-center text-base lg:text-xl shadow-2xl shadow-gradient1">
            <svg
              className="h-6 w-6 lg:h-10 lg:w-10"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="11"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill="#fff"
                d="m12.727 6.893.773.94L10.333 11 8.5 9l.773-.773 1.06 1.06 2.394-2.394ZM11.713.287l-.94.94A5.305 5.305 0 0 1 12.333 5v.227a4.14 4.14 0 0 1 1.254.726c.046-.313.08-.62.08-.953 0-1.84-.747-3.507-1.954-4.713ZM9.64 5.24c.427-.153.88-.24 1.36-.24 0-1.1-.447-2.1-1.173-2.827l-.94.94A2.66 2.66 0 0 1 9.667 5c0 .08-.02.16-.027.24ZM7 3.667c-.733 0-1.333.6-1.333 1.333S6.267 6.333 7 6.333 8.333 5.733 8.333 5 7.733 3.667 7 3.667Zm-3.773-2.44-.94-.94A6.646 6.646 0 0 0 .333 5c0 1.84.747 3.507 1.954 4.713l.94-.94A5.292 5.292 0 0 1 1.667 5c0-1.473.593-2.813 1.56-3.773Zm.946.946A3.986 3.986 0 0 0 3 5c0 1.1.447 2.1 1.173 2.827l.94-.94A2.66 2.66 0 0 1 4.333 5c0-.74.3-1.407.78-1.887l-.94-.94Z"
              />
            </svg>
            <span>Check balance</span>
          </button>
          <button className=" w-auto h-12 lg:h-16 bg-gradient1 rounded-xl flex justify-around p-3 text-primary place-items-center text-base lg:text-xl shadow-2xl shadow-gradient1">
            <svg
              className="h-6 w-6 lg:h-10 lg:w-10 "
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill="#fff"
                d="M3.7 1.333a2.346 2.346 0 0 0 0 3.314L9.36 10.3a1.002 1.002 0 0 1-1.42 1.413L5.113 8.887l.707-.707-2.353-2.36-.24.24-.94-.947a.68.68 0 0 0-.954 0L.4 6.06A.664.664 0 0 0 .4 7l.933.94-.226.24 2.36 2.353.706-.706L7 12.667a2.354 2.354 0 0 0 3.3 0c.913-.92.913-2.4 0-3.307L4.64 3.7a1.002 1.002 0 0 1 1.42-1.413l2.827 2.826-.707.707 2.353 2.36.24-.24.94.947c.26.26.687.26.954 0l.933-.947a.664.664 0 0 0 0-.94l-.933-.94.226-.24-2.36-2.353-.706.706L7 1.333a2.354 2.354 0 0 0-3.3 0ZM.873 6.527l.94-.94.947.94-.947.946m9.427 0 .947-.946.94.946-.94.94-.947-.94Z"
              />
            </svg>
            <span>Cable payment</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:gap-10 justify-between mt-12">
        <div className=" bg-gradient-to-r from-glograd to-balancegrad2 w-auto h-44 lg:h-60 rounded-3xl px-5 py-7 lg:p-14 flex justify-between shadow-2xl shadow-glograd">
          <div>
            <p className=" text-base lg:text-2xl font-normal mb-3 text-[#5D6C74]">
              Glo data @85% 🔥
            </p>
            <p className=" text-base lg:text-2xl font-medium mb-3 text-[#000]">
              1GB ₦450
            </p>
            <p className=" text-base lg:text-2xl font-medium mb-3 text-[#000]">
              2.9GB ₦850
            </p>
          </div>
          <div className="place-self-center">
            <img src={gloLogo} alt="glo logo" className=" h-20 w-20" />
          </div>
        </div>
        <div className=" bg-gradient-to-r from-airtelgrad to-balancegrad2 w-auto h-44 lg:h-60 rounded-3xl px-2 py-7 lg:p-14 flex justify-between shadow-2xl shadow-airtelgrad">
          <div>
            <p className=" text-base lg:text-2xl font-normal mb-3 text-[#5D6C74]">
              Airtel Coperate Gifting 🔥{" "}
            </p>
            <p className=" text-base lg:text-2xl font-medium mb-3 text-[#000]">
              1GB ₦240
            </p>
          </div>
          <div className="place-self-center">
            <img src={airtelLogo} alt="airtel logo" className=" h-16 w-16" />
          </div>
        </div>
        <div className=" bg-gradient-to-r from-mtngrad to-balancegrad2 w-auto h-44 lg:h-60 rounded-3xl px-2 py-7 lg:p-14 flex justify-between shadow-2xl shadow-mtngrad">
          <div>
            <p className=" text-base lg:text-2xl font-normal mb-3 text-[#5D6C74]">
              MTN Coperate Gifting 🔥{" "}
            </p>
            <p className=" text-base lg:text-2xl font-medium mb-3 text-[#000]">
              1GB ₦240
            </p>
          </div>
          <div className="place-self-center">
            <img src={mtnLogo} alt="mtn logo" className=" h-16 w-16" />
          </div>
        </div>
      </div>
      <div className="w-auto flex justify-center my-12">
        <button className=" bg-[#FFF] text-base lg:text-2xl text-[##5D6C74] font-normal w-64 lg:w-72 h-10 lg:h-14 rounded-3xl ">
          FAQS | Contact Us
        </button>
      </div>
    </div>
  );
}
