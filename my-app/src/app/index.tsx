import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
//cant render image shame on you 


const FeedCard: React.FC = () => {
  return (
    <div className="border  transition-all cursor-pointer width-[80%]">
      <div className="grid grid-cols-12">
        <div className="col-span-1 text-sm">
          <p>s</p>
        </div>
        <div className="col-span-11   p-4">
          <div className="col-span-11  hover:bg-primary-light rounded ">
          <h5>Radhika</h5>
          <pre className="text-xs whitespace-pre-wrap ">
            <h5 className=''>
              Hi, it's me. These are my views.
              <br />
              Doubts? Please help me out. Thanks.ā
            </h5>
          </pre>
          </div>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%] ">
            <div className=" hover:bg-primary-light">
              <BiMessageRounded />
            </div>
            <div className=" hover:bg-primary-light">
              <FaRetweet />
            </div>
            <div className=" hover:bg-primary-light">
              <AiOutlineHeart />
            </div>
            <div className=" hover:bg-primary-light">
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
