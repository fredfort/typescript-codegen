const BREAK_POINTS = {
  tablet: 850,
  desktop: 1120,
};

const customMediaQuery = (minWidth: number, maxWidth?: number) =>
  `@media only screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;

const media = {
  desktop: customMediaQuery(BREAK_POINTS.desktop + 1, Number.MAX_SAFE_INTEGER),
  tablet: customMediaQuery(BREAK_POINTS.tablet, BREAK_POINTS.desktop),
};

export default media;
