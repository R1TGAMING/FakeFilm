import React from "react";
import { motion } from "framer-motion";

import poster1 from "../../../assets/The Shawshank Redemption Watch in HD Quality.jpg";
import poster2 from "../../../assets/The Godfather.jpg";
import poster3 from "../../../assets/_Interstellar_ advance movie poster, 2014_.jpg";

function HeroImageSection() {
  return (
    <div className="md:mx-44  items-center">
      <ul className="">
        <li className="relative left-10 top-10 md:left-20 md:top-10">
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={poster1}
              alt=""
              className="w-24 md:w-32 shadow-xl outline outline-white dark:shadow-gray-900 shadow-gray-400"
            />
          </motion.div>
        </li>
        <li className="relative md:right-20 md:top-10 right-20 top-20">
          <motion.div
            animate={{ y: [2, -2, 2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={poster2}
              alt=""
              className="md:w-32 w-24 shadow-xl outline outline-white dark:shadow-gray-900 shadow-gray-400 "
            />
          </motion.div>
        </li>
        <li className="relative md:left-40 md:bottom-20 left-20 bottom-0">
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <img
              src={poster3}
              alt=""
              className="md:w-32 w-24 shadow-xl outline outline-white dark:shadow-gray-900 shadow-gray-400"
            />
          </motion.div>
        </li>
      </ul>
    </div>
  );
}

export default HeroImageSection;
