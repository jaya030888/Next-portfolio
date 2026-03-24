export default function About() {
  return (
    <section className="min-h-screen bg-[#f0f0f0] flex items-center justify-center px-6">

      <div className="relative flex w-full max-w-[900px] aspect-video overflow-hidden rounded-[10px] mx-auto  ">

        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>

        {/* Small image */}
        <img
          src="/images/logo.png"
          alt="logo"
          className="absolute bottom-4 right-4 w-12 h-12"
        />

      </div>

    </section>
  );
}