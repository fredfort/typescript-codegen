const isDefined = (value: any) =>
  value !== null &&
  value !== undefined &&
  (typeof value !== "string" || value !== "");

export { isDefined };
