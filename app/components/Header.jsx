import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-7">

      {/* Left */}
      <div className="flex items-center gap-2 bg-white backdrop-blur-md rounded-[16px] px-2 py-2">
        <img
          src="/images/abt1.png"
          className="w-8 h-8 rounded-[8px] object-cover"
        />
        <span className="font-medium text-black pl-2 pr-2 text-base">LeonMotion</span>
      </div>

      {/* Right */}
      <button className="flex text-black items-center gap-2 bg-white backdrop-blur-md font-[600] rounded-[16px] px-2 py-2 hover:bg-white transition">
        <span className="font-medium p-2 text-base">Get Started</span>

        <div className="bg-[#F0F0F0] p-2 rounded-[8px]">
            <ArrowRight size={16} />
        </div>
     
      </button>

    </header>
  );
}