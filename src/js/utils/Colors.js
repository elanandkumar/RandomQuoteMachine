const rand = (min, max) => min + Math.random() * (max - min);

export const getRandomColor = lm => {
  const h = rand(360, 360 / (lm || 1));
  const s = rand(90, 100 / (lm || 1));
  const l = rand(0, 20 * (lm || 1));
  return `hsla(${h},${s}%,${l}%,0.8)`;
};
