const { override, fixBabelImports, addLessLoader } = require("customize-cra");

const primaryLight = "#9E9BF3";
const primary = "#43425D";
const secondary = "#3C3B54";
const accent = "#FFDE02";
const textSeconday = "#C4C4C4";
const text = "#212121";
const background = "#F0F0F7";
const cardBackground = "#E4E4F1";

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@layout-body-background": background,
      "@font-family": "'Shabnam', sans-serif",
      "@font-size-base": "12px",
      "@primary-color": primary,
      "@layout-sider-background": secondary,
      "@menu-bg": secondary,
      "@menu-item-color": textSeconday,
      "@menu-highlight-color": primaryLight,
      "@menu-item-group-title-color": accent,
      "@menu-item-active-bg": primary,
      "@menu-item-active-border-width": "3px",
      "@tabs-card-active-color": text,
      "@tabs-highlight-color": cardBackground,
      "@tabs-active-color": cardBackground,
      "@tabs-card-head-background": primary
    }
  })
);
