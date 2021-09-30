import { useSelector } from "react-redux";
import "../css/Favorites.css";
import { jokeSelector } from "../store/jokes";
import Card from "./Card";

function Favorites() {
  const data = useSelector(jokeSelector);

  return (
    <div className="favorites">
      {data.filter((item) => item.isFav).length > 0 ? (
        <div className="favorite__grid">
          {data.reduce((acc, curr) => {
            if (curr.isFav) {
              acc.push(<Card key={curr.id} item={curr} />);
            }
            return acc;
          }, [])}
        </div>
      ) : (
        <h1>No Jokes added in Favorites</h1>
      )}
    </div>
  );
}

export default Favorites;
