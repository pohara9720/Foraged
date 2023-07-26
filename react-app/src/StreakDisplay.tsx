import React from "react";

export const StreakDisplay = ({
  fullString,
  substring,
}: {
  fullString: string;
  substring: string;
}): JSX.Element => {
  const index = fullString.toLowerCase().indexOf(substring.toLowerCase());

  if (index === -1) {
    return <h2>{fullString}</h2>;
  }

  const beforeSubstring = fullString.substring(0, index);
  const highlightedSubstring = fullString.substring(
    index,
    index + substring.length
  );
  const afterSubstring = fullString.substring(index + substring.length);

  return (
    <h2>
      {beforeSubstring}
      <span style={{ backgroundColor: "yellow" }}>{highlightedSubstring}</span>
      {afterSubstring}
    </h2>
  );
};
