import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../css/Home.css";
import {
  fetchData,
  fetchMetaData,
  getMoreJokesHandler,
  jokeSelector,
  metaDataSelector,
  toggleCheckbox,
} from "../store/jokes";
import Card from "./Card";
import Checkbox from "./Checkbox";

function Home() {
  const jokesData = useSelector(jokeSelector);
  const metaData = useSelector(metaDataSelector);
  const dispatch = useDispatch();

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    dispatch(toggleCheckbox(name));
  };

  const createCheckbox = (item) => (
    <Checkbox
      key={item.value}
      label={item.value}
      isSelected={item.isSelected}
      onCheckboxChange={handleCheckboxChange}
    />
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const categories = metaData.categories.reduce((acc, curr) => {
      if (curr.isSelected) {
        acc.push(curr.value);
      }
      return acc;
    }, []);
    const flags = metaData.flags.reduce((acc, curr) => {
      if (curr.isSelected) {
        acc.push(curr.value);
      }
      return acc;
    }, []);
    dispatch(getMoreJokesHandler(categories.join(), flags.join()));
  };

  const onRefresh = () => {
    dispatch(fetchData());
    dispatch(fetchMetaData());
  };

  return (
    <div className="home">
      <div className="home__header">
        <h2>Add more jokes</h2>
        <form
          className="form"
          onSubmit={onSubmit}
          onReset={() => dispatch(fetchMetaData())}
        >
          <div className="form__section">
            <h3>Select Categories:</h3>
            <div className="form__input">
              {metaData.categories.map(createCheckbox)}
            </div>
          </div>
          <div className="form__section">
            <h3>Select flags to blacklist:</h3>
            <div className="form__input">
              {metaData.flags.map(createCheckbox)}
            </div>
          </div>
          <div className="form__btn">
            <button type="submit">Get Jokes</button>
            <button type="reset">Reset to Default</button>
          </div>
        </form>
      </div>
      <div className="home__title">
        <h1>Jokes</h1>
        <button onClick={onRefresh}>Refresh</button>
      </div>
      <div className="home__grid">
        {jokesData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
