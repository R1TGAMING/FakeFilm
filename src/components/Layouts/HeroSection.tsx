import ShinyText from "../UI/TextAnimations/ShinyText/ShinyText";
import BackgroundImage from "../../assets/Koe no Katachi.jpg";
import HeroImageSection from "../UI/Components/HeroImageSection";

function HeroSection() {
  return (
    <section className="flex flex-col p-2 md:flex-row justify-center items-center mt-16">
      <div className="text-center md:text-left p-2 justify-center">
        <h2 className="md:text-5xl text-3xl font-extrabold ">
          Nonton Film Hanya Di FakeFilm
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum
          eveniet expedita, necessitatibus.
        </p>

        <button className="bg-gray-900 text-gray-100 dark:text-gray-800 font-bold p-3 mt-2 animate-shine rounded-xl cursor-pointer">
          <ShinyText text="Tonton Sekarang" disabled={false} speed={3} />
        </button>
      </div>

      <HeroImageSection />
    </section>
  );
}

export default HeroSection;
