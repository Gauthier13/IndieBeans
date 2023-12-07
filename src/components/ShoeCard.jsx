const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {

    // Si l'image sélectionnée et l'url de l'image sont différentes, on passe en paramètre l'url de l'image sélectionnée pour l'afficher ensuite en grand sur la hero section. On récupère l'information au clic
    const handleClick = () => {
        if (bigShoeImage !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

    return (
        // Ici l'affichage de la bordure d'une carte est dynamique grâce à l'opérateur ternaire qui affiche une bordure et une ombre sur l'image sélectionnée
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img
                src={imgURL.thumbnail}
                alt="shoe collection"
                width={127}
                height={103}
                className={`${bigShoeImage === imgURL.bigShoe ? 'drop-shadow-xl ring-coral-red ring-4 rounded-full' : 'drop-shadow-none'} cursor-pointer max-sm:flex-1 hover:scale-110 ease-in-out duration-200 hover: ring-coral-red hover:ring-4 hover:rounded-full `
                }
                onClick={handleClick}
            />
        </div>
    )
}

export default ShoeCard