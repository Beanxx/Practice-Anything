const size = {
  mobile: "600px",
  tablet: "900px",
  laptop: "1200px",
  desktop: "1800px",
};

const theme = {
  mainColor: "#4748C6",
  subColor: "#1B1B1B",
  mobile: `(max-width: ${size.mobile})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
