import React from "react";
import { useFav } from "../Context/FavoritesProvider";

function Favorites() {
  const { favs,removeFav } = useFav();
  return (
    <div>
      {favs.length > 0 ? (
        favs.map((m, index) => {
          return (
            <div key={index}>
              <h1>{m.name}</h1>
              <img src={m.img} alt="" />
              <button onClick={() => removeFav(m.id)}>
                remove from favorites
              </button>
            </div>
          );
        })
      ) : (
        <p>No items in Favorites</p>
      )}
    </div>
  );
}

export default Favorites;
