import React from 'react'

const Card = () => {
  return (
    <>
    <div className=" max-w-md w-130 h-50 bg-gray-900 border-gray-700 
                    border-1 rounded-2xl text-white hover:bg-gray-800 hover:scale-[1.01] transition-transform duration-200">
        <div className="flex justify-between p-4 pt-5">
            <div className="text-xs text-gray-300">Total Revenue</div>
            <div className="border-1 rounded-xl p-1 text-xs border-gray-700">icon/stats</div>
        </div>
        <span className=" pl-4 text-2xl font-bold">$1,250.00</span>
        <div className="pt-6 pl-4 pb-2 text-xs font-bold">Trending up the last 6 months</div>
        <div className="pb-4 pl-4 text-xs  text-gray-300">Visitors for the last 6 months</div>
    </div>
    </>
  )
}

export default Card