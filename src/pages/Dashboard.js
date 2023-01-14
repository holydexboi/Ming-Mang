import React from 'react'

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className='w-auto h-96 py-10 px-20 bg-gradient-to-r flex justify-between from-gradient1 to-gradient2 rounded-3xl'>
            <div className='relative'>
                <div className='w-64 h-64 rounded-full bg-gradient-to-r from-balancegrad1 to-balancegrad2'></div>
                <div className='w-64 h-64 rounded-full absolute bottom-12 left-6 bg-primary'>
                    <p className=' text-2xl font-medium ml-9 mt-14 font-sans'>Wallet Balance:</p>
                    <p className=' text-3xl font-extrabold ml-14 mt-3 font-sans'>₦20000</p>
                </div>
            </div>
            <div className='flex flex-col my-20'>
                <button className=' w-48 h-16 bg-[#000000] rounded-xl text-primary text-xl'>Fund Wallet</button>
                <button>Transfer to User</button>
            </div>
            <div>
                <p className=' font-sans text-2xl text-[#5D6C74] font-medium'>You are able to:</p>
                <div className='flex justify-between mt-3'>
                    <svg className=' h-10 w-10' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 20 20" fill="none"><path fill="#000" fill-opacity=".35" d="M7.597 1.413a.5.5 0 0 1-.851.524.427.427 0 0 0-.113-.088c-.098-.056-.311-.135-.71-.062-.272.05-.412.223-.499.445a1.4 1.4 0 0 0-.09.435V3.5A.667.667 0 0 0 6 4.167h.167a.667.667 0 0 0 .646-.5H6.5a.5.5 0 0 1 0-1h.833a.5.5 0 0 1 .5.5V3.5a1.667 1.667 0 0 1-1.666 1.667H6A1.667 1.667 0 0 1 4.333 3.5v-.86l.003-.054a2.4 2.4 0 0 1 .157-.718c.163-.418.522-.93 1.25-1.065.608-.111 1.061-.005 1.378.172.154.086.266.184.343.265.047.05.09.104.127.161l.004.007.001.003v.001h.001ZM1.17 1.278a.5.5 0 0 1 .497-.445h1.666a.5.5 0 0 1 0 1H2.114l-.043.388.011-.002a1.485 1.485 0 1 1 .266 2.948h-.147a1.5 1.5 0 0 1-1.247-.668l-.037-.055a.5.5 0 0 1 .832-.555l.037.055a.5.5 0 0 0 .416.223h.146a.485.485 0 1 0-.087-.964l-.672.122a.5.5 0 0 1-.586-.546l.166-1.5.001-.001ZM6.833 7a.5.5 0 0 1 .496.432l.004.068v5a.5.5 0 0 1-.995.068l-.005-.068v-5a.5.5 0 0 1 .5-.5ZM9.5 5a.5.5 0 0 1 .495.432L10 5.5v7a.5.5 0 0 1-.995.068L9 12.5v-7a.5.5 0 0 1 .5-.5Zm-8 6a.5.5 0 0 1 .495.432L2 11.5v1a.5.5 0 0 1-.995.068L1 12.5v-1a.5.5 0 0 1 .5-.5Zm10.662-8a.5.5 0 0 1 .5.427l.005.068v9a.5.5 0 0 1-.995.078l-.005-.068v-9A.5.5 0 0 1 12.162 3ZM4.167 9a.5.5 0 0 1 .495.432l.005.068v3a.5.5 0 0 1-.996.067l-.004-.068V9.5a.5.5 0 0 1 .5-.5Z"/></svg>
                    <p className=' text-2xl font-sans font-normal'>7.0GB Data</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".3" stroke-width="2" d="M9.367 1A6 6 0 0 1 14.7 6.293M9.367 3.667A3.333 3.333 0 0 1 12 6.333m2.667 4.614v2a1.332 1.332 0 0 1-1.454 1.333 13.195 13.195 0 0 1-5.753-2.047 13 13 0 0 1-4-4 13.193 13.193 0 0 1-2.047-5.78A1.333 1.333 0 0 1 2.74 1h2a1.333 1.333 0 0 1 1.333 1.147A8.56 8.56 0 0 0 6.54 4.02a1.333 1.333 0 0 1-.3 1.407l-.847.846a10.667 10.667 0 0 0 4 4l.847-.846a1.333 1.333 0 0 1 1.407-.3 8.56 8.56 0 0 0 1.873.466 1.334 1.334 0 0 1 1.147 1.354Z"/></svg>
                    <p className='text-2xl font-sans font-normal'>3hrs call</p>
                </div>
                <div className='flex justify-between mt-3'>
                <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none"><path fill="#000" fill-opacity=".35" d="M0 .5v10h2.5v2.547l.813-.657 2.359-1.89H14V.5H0Zm1 1h12v8H5.328l-.14.11L3.5 10.953V9.5H1v-8ZM3 4v1h8V4H3Zm0 2v1h6V6H3Z"/></svg>
                <p className=' text-2xl font-sans font-normal'>500+ SMS</p>
                </div>
            </div>
        </div>
    </div>
  )
}
