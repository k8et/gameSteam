"use client"
import React from 'react';
import Loader from "@/components/Loader";
function Product() {

    return (
        <div
            className="w-full z-50  xl:w-[1110px] flex flex-col gap-[45px] min-h-[522px] bg-[#100E1A] p-[45px] rounded-[40px] border border-white/10">
            <div className="flex w-full flex-col xl:flex-row gap-5">
                <div className="w-full flex items-center justify-center rounded-[20px] h-[243px] bg-[#101013]">
                    <div className="text-white flex items-center flex-col gap-5">
                        <Loader/>
                        <p className="text-center text-[16px] leading-[16px]">
                            Wait a little while <br/>
                            Something's loading...
                        </p>
                    </div>
                </div>
                <div className="text-white w-full flex flex-col ">
                    <h1 className="pb-[30px] text-[44px]"> Not found</h1>
                    <p className="border-y border-[#A9ABAD]/30 py-2 w-full text-[16px]">
                        Steam Profile:
                        <span className="font-[300] text-[#2883FF]"> Not found</span>
                    </p>
                    <p className="border-b border-[#A9ABAD]/30 py-2 w-full text-[16px]">Unique Product Code:
                        <span className="font-[300]"> Not found</span>
                    </p>
                    <p className="border-b border-[#A9ABAD]/30 py-2 w-full text-[16px]">Bot Nickname:
                        <span className="font-[300]"> Not found</span>
                    </p>
                </div>
            </div>
            <div className="text-white">
                <p className="flex items-center gap-1 text-[#A9ABAD] font-300">
                    Purchase Status
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 4.6V7M7 9.4H7.006M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z"
                            stroke="#A9ABAD" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></p>
                <p className=" ">
                    Not found
                </p>
            </div>
            <div>
                <p className="text-white">Seller Contact Info:</p>
                <div className="flex gap-[20px] flex-col md:flex-row">
                    <p className="text-[#2883FF] flex gap-2.5 items-center">
                        <img className="rounded-full" src="https://botsteam.net/plati-min.png"/>
                        Plati Profile
                    </p>
                    <p className="text-[#2883FF] flex gap-2.5 items-center">
                        <img alt={"s"} width={32} className="rounded-full bg" src=""/>
                        Telegram Profile
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;
