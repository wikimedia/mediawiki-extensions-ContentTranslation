// Fisher–Yates shuffle algorithm
export default function shuffleArray(array) {
  const arr = [...array]; // make a copy to avoid mutating the original

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }

  return arr;
}
