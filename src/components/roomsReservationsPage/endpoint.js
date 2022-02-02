export const getRoomsFiltersData = async () => {
  const resp = await fetch(
    "https://estaniulyte.github.io/Data/sourcery-academy-front-end/rooms.json"
  );

  const data = await resp.json();

  return data.rooms.filterCategories;
};
