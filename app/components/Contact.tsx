export default function Contact() {
  return (
    <section className="h-full bg-[#F0F0F0] flex flex-col items-center font-Saans font-[700] text-black">

      <section className="h-full flex flex-col items-center mt-40 mb-10">
      <h2 className="text-[80px] font-medium text-[#1a1a1a] text-center leading-[72px] tracking-[-2px] [font-family:Saans]">
        Let's start
        <br></br>
        <span className="text-[76px] font-medium text-black/40 leading-[76px] text-center"> your </span>
        project
      </h2>

      <div className="text-[20px] font-medium text-black/60 leading-[30px] text-center my-10 text-[#4d4d4d]">
        Fill out the form to get started,
        <br></br>
        or book a call.
    </div>
    </section>

    <form className="flex flex-col gap-4">

      <div>

  <div className="inp-box">
    <input
      type="name"
      name="Name"
      placeholder="Your Name"
      required
      className="inp"
    />
  </div>


  <div className="inp-box">
    <input
      type="email"
      name="Email"
      placeholder="Email Address"
      required
      className="inp"
    />
  </div>


  <div className="inp-box">
    <select
      name="Budget"
      required
      className="inp"
    >
      <option disabled selected>
        Whats your Budget?
      </option>
      <option value="Under $3,000">Under $3,000</option>
      <option value="$3,000 - $7,000">$3,000 - $7,000</option>
      <option value="$7,000 - $15,000">$7,000 - $15,000</option>
      <option value="$15,000+">$15,000+</option>
    </select>
  </div>

 
  <div className="inp-box">
    <textarea
      name="Description"
      placeholder="Describe Your Project"
      required
      rows={4}
      className="inp"
    ></textarea>
  </div>

  </div>

  <div className="bg-[#DFDFDF] py-5 w-[85vb] rounded-[10px]">
    <button className="text-[18px]-center text-[#9C9C9C] w-full">Send Inquiry</button>
  </div>

</form>

<div className="mt-30 mb-10 text-[#AFAFAF]">
    LeonMotion 2026
</div>

    </section>
  );
}