export const getDevicesData = async () => {
  const resp = await fetch(
    "https://estaniulyte.github.io/Data/sourcery-academy-front-end/devices.json"
  );

  const data = await resp.json();

  return {
    deviceFilterCategories: data.devices.filterCategories,
    deviceList: data.devices.deviceList,
  };
};
