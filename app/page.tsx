import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
{/* <div className="flex overflow-x-auto h-screen"> */}
  <Hero />
  <About />
  <Work />
{/* </div> */}
      <Contact />
    </main>
  );
}