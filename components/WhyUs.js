import Image from "next/image";

import check from "@/public/icons/check.svg";
import background from "@/public/icons/background2.png";
import desktop from "@/public/icons/desktop.png";

export default function WhyUs() {
  return (
    <div className="bg-[#fffdf2] flex flex-col lg:flex-row mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="w-full border">
        <div>
          <div className="relative isolate overflow-hidden text-gray-900 bg-white py-16 lg:py-0 shadow-2xl sm:rounded-3xl sm:px-12 md:pt-24 lg:flex lg:gap-x-20 lg:px-20 lg:pt-0">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-[56px] mb-5">
                Why join us
              </h2>
              <ul className="flex flex-col justify-start items-start gap-y-1.5 mt-6 text-lg text-gray-300">
                <li className="flex justify-center items-start gap-x-2">
                  <Image src={check} width={24} height={24} alt="check" />
                  <span className="font-light text-xl text-[#0F172A]">
                    Est et in pharetra magna adipiscing ornare aliquam.
                  </span>
                </li>
                <li className="flex justify-center items-start gap-x-2">
                  <Image src={check} width={24} height={24} alt="check" />
                  <span className="font-light text-xl text-[#0F172A]">
                    Tellus arcu sed consequat ac velit ut eu blandit.
                  </span>
                </li>
                <li className="flex justify-center items-start gap-x-2">
                  <Image src={check} width={24} height={24} alt="check" />
                  <span className="font-light text-xl text-[#0F172A]">
                    Ullamcorper ornare in et egestas dolor orci.
                  </span>
                </li>
              </ul>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <button>
                  <a
                    href="#"
                    className="rounded-lg px-5 py-3 text-lg font-medium text-[#78350F] shadow-sm bg-transparent border-2 border-[#78350F] hover:bg-[#78350F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78350F]"
                  >
                    Sign up now
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <Image
            className="absolute -right-5 z-20 -bottom-16 lg:max-w-2xl rounded-md bg-white/5 ring-1 ring-white/10"
            src={background}
            alt="background"
            width={900}
            height={800}
          />
          <Image
            className="absolute right-5 bottom-0 z-30 h-auto lg:max-w-[38rem] rounded-md bg-white/5 ring-1 ring-white/10 "
            src={desktop}
            alt="desktop"
            width={700}
            height={625}
          />
        </div>
      </div>
    </div>
  );
}
