import { c as create_ssr_component, e as escape, j as each, v as validate_component } from "../../../chunks/index2.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "id" } = $$props;
  let { name = "name" } = $$props;
  let { description = "description" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="${"card card-hover max-w-prose"}"><header class="${"card-header flex items-center gap-4"}"><p>${escape(id)}</p>
    <h2>${escape(name)}</h2></header>
  <main class="${"p-4"}">${escape(description)}</main></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const projects = [
    {
      id: "1",
      name: "Flux",
      description: "A welding application"
    },
    {
      id: "2",
      name: "Maple",
      description: "A tree management application"
    },
    {
      id: "3",
      name: "Iron",
      description: "A forging application"
    },
    {
      id: "4",
      name: "Candy",
      description: "A sweet application"
    },
    {
      id: "5",
      name: "Flux",
      description: "A welding application"
    },
    {
      id: "6",
      name: "Maple",
      description: "A tree management application"
    },
    {
      id: "7",
      name: "Iron",
      description: "A forging application"
    },
    {
      id: "8",
      name: "Candy",
      description: "A sweet application"
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<header class="${"flex place-content-center"}"><h1>Projects</h1></header>

<main class="${"p-4"}"><div class="${"place-content-center grid grid-cols-ram gap-8"}">${each(projects, (p) => {
    return `<a href="${"/products/product"}">${validate_component(Card, "Card").$$render($$result, Object.assign({}, p), {}, {})}</a>`;
  })}</div></main>`;
});
export {
  Page as default
};
