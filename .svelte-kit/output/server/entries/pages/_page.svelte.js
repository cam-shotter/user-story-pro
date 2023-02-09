import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index2.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { body } = $$props;
  let { footer = null } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.footer === void 0 && $$bindings.footer && footer !== void 0)
    $$bindings.footer(footer);
  return `<div class="${"card variant-soft-surface card-hover p-4"}"><header class="${"card-header"}">${escape(header)}</header>
	<div class="${"p-4"}">${escape(body)}</div>
	<footer class="${"card-footer"}">${escape(footer)}</footer></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const props = {
    header: "heading",
    body: "body",
    footer: "foot"
  };
  return `<div class="${"container mx-auto p-8 space-y-8"}"><h1>UserStoryPro</h1>
	<p>Automate your story workflow</p>
	<hr>

	${validate_component(Card, "Card").$$render($$result, Object.assign({}, props), {}, {})}
	<hr>
	<section class="${"flex space-x-2"}"><a class="${"btn variant-filled-primary"}" href="${"https://kit.svelte.dev/"}" target="${"_blank"}" rel="${"noreferrer"}">SvelteKit</a>
		<a class="${"btn variant-filled-secondary"}" href="${"https://tailwindcss.com/"}" target="${"_blank"}" rel="${"noreferrer"}">Tailwind</a>
		<a class="${"btn variant-filled-tertiary"}" href="${"https://github.com/"}" target="${"_blank"}" rel="${"noreferrer"}">GitHub</a></section></div>`;
});
export {
  Page as default
};
