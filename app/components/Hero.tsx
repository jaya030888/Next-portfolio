import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <>
    <section className="bg-white/95 w-full h-screen text-black pl-58 pt-16">
    <h1>

      <span className="text-[76px] font-medium text-black/40 leading-[76px] text-left"> You built </span>

      <br></br>

      <span className="text-[76px] font-medium text-black/40 leading-[76px] text-left"> something good. </span>

      <br></br>

      <span className="text-[76px] font-medium text-black leading-[76px] text-left"> Don't let a weak </span>

      <br></br>

      <span className="text-[76px] font-medium text-black leading-[76px] text-left"> video kill it. </span>

    </h1>

    <div className="text-[20px] font-medium text-black/60 leading-[30px] text-left mt-10 mb-15">
        Animated videos that make people understand your
        <br></br> 
        product in 5 seconds and actually want to buy it.
    </div>

<a
  href="https://calendly.com/contact-leonmotion/30min?month=2026-03"
  target="_blank"
  rel="noopener"
  className="flex items-center justify-between bg-black/90 rounded-[20px] px-2 py-2 w-fit"
>
  
  <span className="text-[20px] leading-[24px] font-medium text-white font-saans pl-4 pr-6">
    Get Started
  </span>

  <div className="flex items-center justify-center bg-white rounded-[12px] w-10 h-10">
    <ArrowRight className="w-4 h-4 text-black" />
  </div>

</a>

    </section>
    </>
  );
}