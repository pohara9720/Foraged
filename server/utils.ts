const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function isEven(character: string): boolean {
  const index = alphabet.indexOf(character) + 1;
  return index % 2 !== 0;
}

export function findLongestStreak(input: string): [string, number] {
  let longestStreak = "";
  let currentStreak = "";
  let longestStreakCount = 0;
  let currentStreakCount = 0;
  let activeStreakType = "";

  for (const character of input.split("")) {
    const isSpace = character === " ";
    const isNumber = !isNaN(+character);
    if (isSpace) {
      currentStreak += character;
    } else if (isNumber) {
      currentStreak = "";
      currentStreakCount = 0;
    } else {
      const letter = character.toLowerCase();
      const streakType = isEven(letter) ? "even" : "odd";

      if (streakType === activeStreakType) {
        currentStreak += character;
        currentStreakCount += 1;
      } else {
        activeStreakType = streakType;
        currentStreak = character;
        currentStreakCount = 1;
      }

      if (currentStreak.length > longestStreak.length) {
        longestStreak = currentStreak;
      }
      if (currentStreakCount > longestStreakCount) {
        longestStreakCount = currentStreakCount;
      }
    }
  }
  return [longestStreak, longestStreakCount];
}
