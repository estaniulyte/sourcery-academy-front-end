export const getStoriesData = async () => {
  const resp = await fetch(
    "https://estaniulyte.github.io/Data/sourcery-academy-front-end/stories.json"
  );
  const data = await resp.json();
  return data.stories;
};
