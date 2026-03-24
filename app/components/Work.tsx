const projects = [
  { title: "Sanctum INF", subtitle: "Explainer Video", src: "/videos/video1.mp4" },
  { title: "Boba", subtitle: "Launch Video", src: "/videos/video1.mp4" },
  { title: "Sanctum App", subtitle: "Trailer", src: "/videos/video1.mp4" },
  { title: "BullX", subtitle: "Promo", src: "/videos/video1.mp4" },
  { title: "Sanctum Waitlist", subtitle: "Ad Video", src: "/videos/video1.mp4" },
  { title: "SurfCash", subtitle: "Demo", src: "/videos/video1.mp4" },
];

export default function Work() {
  return (
    <section className="bg-[#f0f0f0] px-6 py-20">

      <h2 className="text-center text-[32px] text-[#a8a8a8] font-medium">
           Selected Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((p, i) => (
          <div key={i} className="group cursor-pointer">

            {/* Video Card */}
            <div className="relative aspect-video overflow-hidden rounded-[16px]">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              >
                <source src={p.src} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
            </div>

            {/* Text */}
            <div className="mt-3">
              <h3 className="text-[16px] font-medium text-[#1a1a1a]">
                {p.title}
              </h3>
              <p className="text-[14px] text-black/60">
                {p.subtitle}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}