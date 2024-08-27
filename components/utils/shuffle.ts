export const shuffleArray = <T>(array: T[]): T[] => {
  // Create a copy of the original array
  const shuffledArray = [...array];

  // Iterate over the array in reverse order
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Get a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the elements at indices i and j
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
