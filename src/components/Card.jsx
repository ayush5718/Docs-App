import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  console.log(data);
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.1}
        dragTransition={{ bounceDamping: 100, bounceStiffness: 100 }}
        className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white py-10 px-6 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-xs mt-5 leading-tight font-semibold ">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full   left-0">
          <div className="flex justify-between items-center px-8 mb-3 py-3 ">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-5 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer ">
              {data.close ? (
                <IoMdClose />
              ) : (
                <MdFileDownload size=".8em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full  h-10 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } py-4 flex justify-center items-center font-semibold"`}
            >
              <h3 className="text-md">Download Now</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
