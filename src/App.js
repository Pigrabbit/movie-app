import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Bulgogi",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2017/01/28/1af73efa160ca79311629ecdf20ad7071.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Galbi",
    image:
      "https://cdn.wadiz.kr/ft/images/green001/2019/0115/20190115210937576_35.jpg/wadiz/format/jpg/quality/80/optimize",
    rating: 5,
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    rating: 2,
  },
  {
    id: 4,
    name: "Chicken",
    image:
      "https://image.chosun.com/sitedata/image/201411/18/2014111803828_0.jpg",
    rating: 5,
  },
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} img={dish.image} rating={dish.rating} />;
}

function Food({ name, img, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h3>{rating}/5</h3>
      <img src={img} width="300" alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
