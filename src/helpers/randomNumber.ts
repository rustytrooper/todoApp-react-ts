const MIN = 0;
const MAX = 100

export default function randomNum(): number {
  return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
}