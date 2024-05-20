function calcReadingTime(words) {
  if (words) {
    const time = Math.ceil(words / 215);
    return time;
  }
}

export default calcReadingTime;
