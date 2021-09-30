import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import "../css/Card.css";
import { toggleFavorite } from "../store/jokes";

function Card({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card__header">
        <h3>{item.category}</h3>
        {item.isFav ? (
          <MdFavorite
            onClick={() => dispatch(toggleFavorite(item.id))}
            style={{ cursor: "pointer" }}
            color="red"
            size="22"
          />
        ) : (
          <MdFavoriteBorder
            onClick={() => dispatch(toggleFavorite(item.id))}
            style={{ cursor: "pointer" }}
            color="red"
            size="22"
          />
        )}
      </div>
      <p>{item.joke}</p>
    </div>
  );
}

export default Card;
