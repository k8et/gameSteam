import React from 'react';
import Image from "next/image";
const Header = () => {
    return (
        <div className="h-[93px] fixed w-full z-50 flex border-b border-white/10 items-center justify-center bg-[#0b0b14]/50">
            <Image
                src="/assets/GIVISELLER.png"
                alt="Your Image"
                width={500}
                height={300}gi
            />
        </div>
    );
};

export default Header;