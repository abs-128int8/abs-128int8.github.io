import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="
        min-h-screen
        bg-white
        text-black
      flex
      flex-col
      divide-y
      "
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 6px,
            rgba(43, 214, 37, 0.16) 7px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(43, 214, 37, 0.16) 3px
          )
        `,
      }}>
      <div className="flex-1">
        <div className=" md:w-4/5 lg:w-3/5 mx-auto">
          <Hero />
          <Projects />
        </div>
      </div>
      <Footer />
    </main>
  )
}