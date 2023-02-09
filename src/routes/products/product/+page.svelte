<script lang="ts">
    import type { PageData } from '../$types';
    
    export let data: PageData;

    interface Outcome {
        userStory: string,
        acceptanceCriteria: string[],
        testCases: string[],
    }

    let productDescription: string = '';
    let featureDescription: string = '';
    let userTypes: string = '';
    let userGoalsOrNeeds: string = '';
    let featureOutcome: string = '';
    let featureConstraints: string = '';

    let outcomes: Outcome[] = [{
        userStory: 'US1',
        acceptanceCriteria: ['AC1', 'AC2'],
        testCases: ['TC1', 'TC2'],
    }]

    const upVote = () => {
        console.log('upvote');
    }

    const neutralVote = () => {
        console.log('neutralVote');
    }

    const downVote = () => {
        console.log('downVote');
    }

    $:prompt = `Product: ${productDescription}
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

            Note: Make sure each item generated follows the INVEST principles.`
</script>

<h1>Generate Features</h1>

<main class="grid grid-flow-col grid-cols-3">
    <section class="card p-4 m-4 gap-8 col-span-2">
        <h2>Descriptions section</h2>

        <h3>Product description:</h3>
        <p>Please provide a description of your product:</p>
        <input bind:value={productDescription} />

        <h3>Feature description:</h3>
        <p>Great, thanks! Can you now describe the specific feature you'd like to add to this product:</p>
        <input bind:value={featureDescription} />
        <div class="grid gap-4">
            <h4>Follow up questions</h4>
            <p>
                Perfect. To ensure the best quality user stories, acceptance criteria, and test cases, could you please provide more information about the following:
            </p>
            <p>
                1. The target user(s) for this feature. Who will be using it: 
            </p>
            <h3>User type</h3>
            <p>This will be a dropdown</p>
            <input bind:value={userTypes}/>

            <p>
                and what are their goals or needs?
            </p>
            <input bind:value={userGoalsOrNeeds}/>

            <p>
                2. What specific action or outcome do you want the user(s) to be able to achieve with this feature?
            </p>
            <input bind:value={featureOutcome}/>

            <p>
                3. Are there any constraints or requirements for this feature that we should be aware of?
            </p>
            <input bind:value={featureConstraints}/>

            <p>
                Thanks for providing this information. With this information, I can now generate the INVEST-based user stories, acceptance criteria, and test cases for the feature you have described.
            </p>
        </div>
    </section>

    <section class="card p-4 m-4 gap-8">
        <h3>Current prompt:</h3>
        <div>
            <strong>Template:</strong>
            <code>
                {`Product: <product description>
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

                Note: Make sure each item generated follows the INVEST principles.`}
            </code>
        </div>
        <div>
            <strong>Prompt:</strong>
            <p>{prompt}</p>
        </div>
    </section>
</main>

<section class="card p-4 m-4 gap-8">
    <h2>Results section</h2>
    {#each outcomes as outcome}
        <div class="grid grid-flow-col gap-4 p-4">
            <div class="grid place-content-center">
                <input type="checkbox" class="col-start-0"/>
            </div>
            <div class="card variant-soft-surface p-4">
                <h4>User Story 1</h4>
                <p>{outcome.userStory}</p>
            </div>
            <div class="card variant-soft-surface p-4">
                <h4>Acceptance Criteria 1</h4>
                <p>{outcome.acceptanceCriteria}</p>
            </div>
            <div class="card variant-soft-surface p-4">
                <h4>Test Case 1</h4>
                <p>{outcome.testCases}</p>
            </div>
            <div class="grid">
                <button on:click={upVote} class="btn variant-ringed-primary">Up vote</button>
                <button on:click={neutralVote} class="btn variant-ringed-primary">Neutral vote</button>
                <button on:click={downVote} class="btn variant-ringed-primary">Down vote</button>
            </div>
        </div>
    {/each}
</section>
