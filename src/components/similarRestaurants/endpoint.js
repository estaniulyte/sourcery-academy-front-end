export const getRestaurantData = async () => {
  const resp = await fetch(
    "https://estaniulyte.github.io/Data/sourcery-academy-front-end/restaurants.json"
  );

  const data = await resp.json();

  return data.restaurants;
};
