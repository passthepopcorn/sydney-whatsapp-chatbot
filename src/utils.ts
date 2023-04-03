import { config } from "./config";

// function generated by GPT-4
export function getAvailableTones() {
  const toneCount = config.VALID_TONES.length;
  let availableTonesString = "Available options for tones are ";

  config.VALID_TONES.forEach((tone, index) => {
    if (index === toneCount - 1) {
      // Add 'and' before the last element
      availableTonesString += " and ";
    } else if (index !== 0) {
      // Add comma before non-first elements
      availableTonesString += ", ";
    }
    availableTonesString += `*${tone}*`;
  });

  availableTonesString += ".";

  return availableTonesString;
}
