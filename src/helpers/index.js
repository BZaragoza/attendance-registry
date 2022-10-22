export const validateInput = (input) => {
  const validNumber = !!+input
  const properLength = input.length === 6
  const validRange = validNumber && (+input > 3e5 && +input < 4e5)

  const isValidInput = validNumber && properLength && validRange
  return isValidInput
}
