import Button from "../components/Button";
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from "../constants"; // tableau de valeurs fictives
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

import { useState } from "react";

const hero = () => {

  // variable d'état permettant d'afficher dynamiquement l'image principale de la hero section
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our beans collections</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-20 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Beans</span> & Cups
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Beans arrivals, quality comfort and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {/* Le map itère à travers "statistics" qui est un tableau décalré dans index.js du répertoire "contants". */}
          {statistics.map((stat) => (
            <div key={stat}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AFFICHE IMAGE PRINCIPALE */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-hero bg-cover bg-center rounded-full">
        <img
          src={bigShoeImage}
          alt="bean collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        {/* SÉLECTEUR DE CAFÉ :ici le map permet d'afficher les café d'un tableau fictif déclaré dans l'index.js du répertoire constants. Pour rendre laffichage dynamique il faudrait se connecter à une base de données */}
        <div className="flex z-20 sm:gap- gap-4 absolute bottom-6 sm:left-30 max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default hero