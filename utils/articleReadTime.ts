function estimateReadingTime(wordCount: number) {
  const wordsPerMinute = 250; // Average words per minute
  const readingTime = wordCount / wordsPerMinute;

  // Return the estimated time, rounded up to the nearest whole number
  return Math.ceil(readingTime);
}

export { estimateReadingTime };
