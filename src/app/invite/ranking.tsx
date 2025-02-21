import React from "react";
import Image from "next/image";

import gold from "../../assets/medal-gold.svg";
import silver from "../../assets/medal-silver.svg";
import cooper from "../../assets/medal-cooper.svg";

const Ranking = () => {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading leading-none font-semibold">
        Ranking de indicacoes
      </h2>
      <div className="space-y-4 ">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold"> 1º</span> | Isaac{" "}
          </span>
          <span className="text-2xl font-heading font-semibold text-gray-200 leading-none">
            1040{" "}
          </span>
          <Image
            src={gold}
            alt="medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold"> 2º</span> | Isaac{" "}
          </span>
          <span className="text-2xl font-heading font-semibold text-gray-200 leading-none">
            1040{" "}
          </span>
          <Image
            src={silver}
            alt="medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold"> 3º</span> | Isaac{" "}
          </span>
          <span className="text-2xl font-heading font-semibold text-gray-200 leading-none">
            1040{" "}
          </span>
          <Image
            src={cooper}
            alt="medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Ranking;
