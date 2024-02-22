const items = ["Mary", "Rohit", "Mohit", "Kite", "Austin", "Justin", "Pill"];

export const search = (keyword) => {
  return [...items].filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase())
  );
};
