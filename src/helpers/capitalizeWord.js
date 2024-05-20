function capitalizeWord(word) {
  if (word === "realestate") return "Real Estate";
  if (word === "us") return "U.S.";
  if (word === "nyregion") return "Ney York";

  const newWord = word.charAt(0).toUpperCase() + word.slice(1);

  return newWord;
}

export default capitalizeWord;
