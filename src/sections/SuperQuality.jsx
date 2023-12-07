import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      {/* PARAGRAPHE DE TEXTE SUR LA GAUCHE DE LA PAGE */}
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Beans
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Creating an artisanal blend of unparalleled comfort and taste, our meticulously curated coffee haven is crafted to elevate your sipping experience. Immerse yourself in unmatched quality, innovative brews, and a touch of caffeinated elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.</p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      {/* AFFICHAGE DE L'IMAGE DE CHAUSSURE À DROITE */}
      <div className="flex-1 flex justify-center items-center rounded-lg">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain shadow-xl rounded-3xl"
        />
      </div>
    </section>
  )
}

export default SuperQuality