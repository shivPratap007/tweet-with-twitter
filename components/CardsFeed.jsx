import React from "react";
import Image from "next/image";
import { BiMessage } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { PiUploadSimple } from "react-icons/pi";


const CardsFeed = () => {
  return (
    <div className="border-[.0001px] border-x-0 bo border-gray-900 p-4 hover:bg-slate-900 ">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image
            src="https://media.licdn.com/dms/image/D5603AQGYIQZ-56DQxQ/profile-displayphoto-shrink_400_400/0/1703969487670?e=1712793600&v=beta&t=TMtkLhw8I3r7V5WjO9Df9uY1vyThF-b7lUli9emnIPU"
            height={50}
            width={50}
            className="rounded-full"
          ></Image>
        </div>
        <div className="col-span-11 ps-2">
          <h5>Shiv Pratap</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            repellat possimus quis optio modi tempore, nostrum excepturi, .
          </p>
          <div className="flex justify-between mt-4 text-lg px-3">
            <div>
              <BiMessage></BiMessage>
            </div>
            <div>
              <AiOutlineRetweet />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
                <PiUploadSimple/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsFeed;
