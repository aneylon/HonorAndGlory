export function RandomNumberBelow(maximum: number) {
  return Math.floor(Math.random() * maximum);
}

export function RandomBetween(minimum: number, maximum: number) {
  return Math.floor(Math.random() * (maximum + 1 - minimum) + minimum);
}
