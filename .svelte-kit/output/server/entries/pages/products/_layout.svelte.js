import { c as create_ssr_component } from "../../../chunks/index2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"p-8"}">${slots.default ? slots.default({}) : ``}</section>`;
});
export {
  Layout as default
};
