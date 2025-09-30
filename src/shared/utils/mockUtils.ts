export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const createRandomCases = <T>(
  cases: Array<{ probability: number; result: () => T }>
): T => {
  const random = Math.random();
  let cumulativeProbability = 0;

  for (const case_ of cases) {
    cumulativeProbability += case_.probability;
    if (random < cumulativeProbability) {
      return case_.result();
    }
  }

  return cases[cases.length - 1].result();
};
