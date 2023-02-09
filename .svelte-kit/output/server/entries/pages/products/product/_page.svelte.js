import { c as create_ssr_component, b as add_attribute, e as escape, j as each } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prompt;
  let { data } = $$props;
  let productDescription = "";
  let featureDescription = "";
  let userTypes = "";
  let userGoalsOrNeeds = "";
  let featureOutcome = "";
  let featureConstraints = "";
  let outcomes = [
    {
      userStory: "US1",
      acceptanceCriteria: ["AC1", "AC2"],
      testCases: ["TC1", "TC2"]
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  prompt = `Product: ${productDescription}
            Feature: ${featureDescription}
            User Type: ${userTypes}

            Generate multiple user stories based on the above information while following the INVEST principles.

            User Story Template:
            As a <user type>, I want to <action>, So that <outcome>

            Acceptance Criteria Template:
            Given <starting conditions>, When <action>, Then <outcome>

            Test Case Template:
            Test case <test number>
            - Input: <input conditions>
            - Action: <action taken>
            - Expected Output: <expected outcome>

            Note: Make sure each item generated follows the INVEST principles.`;
  return `<h1>Generate Features</h1>

<main class="${"grid grid-flow-col grid-cols-3"}"><section class="${"card p-4 m-4 gap-8 col-span-2"}"><h2>Descriptions section</h2>

        <h3>Product description:</h3>
        <p>Please provide a description of your product:</p>
        <input${add_attribute("value", productDescription, 0)}>

        <h3>Feature description:</h3>
        <p>Great, thanks! Can you now describe the specific feature you&#39;d like to add to this product:</p>
        <input${add_attribute("value", featureDescription, 0)}>
        <div class="${"grid gap-4"}"><h4>Follow up questions</h4>
            <p>Perfect. To ensure the best quality user stories, acceptance criteria, and test cases, could you please provide more information about the following:
            </p>
            <p>1. The target user(s) for this feature. Who will be using it: 
            </p>
            <h3>User type</h3>
            <p>This will be a dropdown</p>
            <input${add_attribute("value", userTypes, 0)}>

            <p>and what are their goals or needs?
            </p>
            <input${add_attribute("value", userGoalsOrNeeds, 0)}>

            <p>2. What specific action or outcome do you want the user(s) to be able to achieve with this feature?
            </p>
            <input${add_attribute("value", featureOutcome, 0)}>

            <p>3. Are there any constraints or requirements for this feature that we should be aware of?
            </p>
            <input${add_attribute("value", featureConstraints, 0)}>

            <p>Thanks for providing this information. With this information, I can now generate the INVEST-based user stories, acceptance criteria, and test cases for the feature you have described.
            </p></div></section>

    <section class="${"card p-4 m-4 gap-8"}"><h3>Current prompt:</h3>
        <div><strong>Template:</strong>
            <code>${escape(`Product: <product description>
                Feature: <feature description>
                User Type: <user type>

                Generate multiple user stories based on the above information while following the INVEST principles.

                User Story Template:
                As a <user type>, I want to <action>, So that <outcome>

                Acceptance Criteria Template:
                Given <starting conditions>, When <action>, Then <outcome>

                Test Case Template:
                Test case <test number>
                - Input: <input conditions>
                - Action: <action taken>
                - Expected Output: <expected outcome>

                Note: Make sure each item generated follows the INVEST principles.`)}</code></div>
        <div><strong>Prompt:</strong>
            <p>${escape(prompt)}</p></div></section></main>

<section class="${"card p-4 m-4 gap-8"}"><h2>Results section</h2>
    ${each(outcomes, (outcome) => {
    return `<div class="${"grid grid-flow-col gap-4 p-4"}"><div class="${"grid place-content-center"}"><input type="${"checkbox"}" class="${"col-start-0"}"></div>
            <div class="${"card variant-soft-surface p-4"}"><h4>User Story 1</h4>
                <p>${escape(outcome.userStory)}</p></div>
            <div class="${"card variant-soft-surface p-4"}"><h4>Acceptance Criteria 1</h4>
                <p>${escape(outcome.acceptanceCriteria)}</p></div>
            <div class="${"card variant-soft-surface p-4"}"><h4>Test Case 1</h4>
                <p>${escape(outcome.testCases)}</p></div>
            <div class="${"grid"}"><button class="${"btn variant-ringed-primary"}">Up vote</button>
                <button class="${"btn variant-ringed-primary"}">Neutral vote</button>
                <button class="${"btn variant-ringed-primary"}">Down vote</button></div>
        </div>`;
  })}</section>`;
});
export {
  Page as default
};
