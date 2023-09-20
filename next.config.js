import withTmInitializer from "next-transpile-modules";
const withTM = withTmInitializer(["styled-components"]);

// next.config.js
export default withTM({
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
});
