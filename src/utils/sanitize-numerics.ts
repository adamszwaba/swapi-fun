const sanitizeNumericString = (string: string): number =>
  Number(string.replace(/\D/g, ""));

export default sanitizeNumericString;
