<script lang="ts">
    import DescribeFeature from '$lib/describe-feature.svelte';
import DescribeProduct from '$lib/describe-product.svelte';
	import DescribeUserNeeds from '$lib/describe-user-needs.svelte';
    import StoryResult from '$lib/story-result.svelte';
    import type { PageData } from '../$types';
    import { 
        productDescription,
        featureDescription,
        userType,
        userGoalsOrNeeds,
        featureOutcome,
        featureConstraints,
        userNeedsDescription,
    } from './store';
    export let data: PageData;

    interface Outcome {
        userStory: string,
        acceptanceCriteria: string[],
        testCases: string[],
    }

    

    let outcomes: Outcome[] = [{
        userStory: 'US1',
        acceptanceCriteria: ['AC1', 'AC2'],
        testCases: ['TC1', 'TC2'],
    }]

    $:prompt = `Product: ${$productDescription}
            Feature: ${$featureDescription}
            User Type: ${$userType}

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

<h1 class="my-4">Generate Features</h1>

<main class="grid grid-flow-col grid-cols-3 gap-8">

    <section class="card variant-ghost-primary grid p-4 gap-8 col-span-2">
        <h2>Descriptions section</h2>
        
        <DescribeProduct />
        <DescribeFeature />
        <DescribeUserNeeds />
    </section>

    <section class="card variant-ghost-secondary grid content-start p-4 gap-8">
        <h3>Current prompt:</h3>
        <div>
            <h4>Template:</h4>
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
            <h4>Prompt:</h4>
            <p>{prompt}</p>
        </div>
    </section>
</main>

<section class="card variant-ghost-surface p-4 my-8 gap-8">
    <h2>Results section</h2>
    {#each outcomes as outcome}
        <StoryResult {...outcome}/>
    {/each}
</section>
