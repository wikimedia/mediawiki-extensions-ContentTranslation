const customViewports = {
  xs: {
    name: "Extra small screens - mobiles",
    styles: {
      width: "411px",
      height: "731px"
    }
  },
  sm: {
    name: "Small to medium tablet",
    styles: {
      width: "768px",
      height: "1024px"
    }
  },
  md: {
    name: "Large tablet to laptop",
    styles: {
      width: "960px",
      height: "1200px"
    }
  },
  lg: {
    name: "Large desktop",
    styles: {
      width: "1264px",
      height: "1200px"
    }
  },
  xl: {
    name: "4k and ultra-wides",
    styles: {
      width: "2000px",
      height: "2000px"
    }
  }
};

export const parameters = {
  viewport: { viewports: customViewports },
  controls: { expanded: true }
};
