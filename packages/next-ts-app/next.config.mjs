import stencilSSR from "@stencil/ssr/next";

const nextConfig = {
  /* config options here */
};

export default stencilSSR({
  module: import("react-library"),
  from: "react-library",
  hydrateModule: import("stencil-library/hydrate"),
  serializeShadowRoot: {
    default: "declarative-shadow-dom",
  },
})(nextConfig);
