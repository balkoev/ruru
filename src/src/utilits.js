export function luhnAlgorithm(digits) {
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let cardNum = parseInt(digits[i]);

    if ((digits.length - i) % 2 === 0) {
      cardNum = cardNum * 2;

      if (cardNum > 9) {
        cardNum = cardNum - 9;
      };
    };

    sum += cardNum;
  };

  return sum % 10 === 0;
};

// export const validAmountRegex = RegExp(/[a-zA-Z_;:!@#$%^&*()_+=[\]{}'"`<>,~?\-/]$/);
export const validAmountRegex = RegExp(/[0-9.\t]$/);
export const validCardHolderRegex = RegExp(/[a-zA-Z\s\t]$/);
export const validPanRegex = RegExp(/[0-9\t/]$/);
