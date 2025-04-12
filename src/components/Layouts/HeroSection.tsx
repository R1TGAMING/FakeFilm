import ShinyText from "../UI/TextAnimations/ShinyText/ShinyText";
import logo from "../../assets/logo.png";
function HeroSection() {
  return (
    <section className="flex flex-col p-2 md:flex-row justify-center items-center mt-16">
      <div className="text-left">
        <h2 className="text-5xl font-extrabold ">
          Nonton Film Hanya Di FakeFilm
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum
          eveniet expedita, necessitatibus.
        </p>

        <button className="bg-gray-900 text-gray-100 font-bold p-3 mt-2 animate-shine rounded-xl cursor-pointer">
          <ShinyText text="Learn More" disabled={false} speed={3} />
        </button>
      </div>
      <img src={logo} alt="hero image" />
    </section>
  );
}

export default HeroSection;
