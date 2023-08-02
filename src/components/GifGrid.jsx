import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFethGifs";

// import { getGifs } from "../helpers/getGifts";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>cargando....</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
