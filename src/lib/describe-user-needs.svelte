<script lang="ts">
    import { 
        userType,
        userGoalsOrNeeds,
        featureOutcome,
        featureConstraints,
        userNeedsDescription, 
    } from "../routes/products/product/store";

    let userTypeTemp: string = '';
    let userGoalsOrNeedsTemp: string = '';
    let featureOutcomeTemp: string = '';
    let featureConstraintsTemp: string = '';
    let userNeedsDescriptionTemp: string = '';

    function summariseUserNeedsDescription() {
        userType.update(n => userTypeTemp)
        userGoalsOrNeeds.update(n => userGoalsOrNeedsTemp)
        featureOutcome.update(n => featureOutcomeTemp)
        featureConstraints.update(n => featureConstraintsTemp)
        userNeedsDescription.update(n => userNeedsDescriptionTemp)
    }
  
</script>

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
  <input bind:value={userTypeTemp}/>

  <p>
      and what are their goals or needs?
  </p>
  <input bind:value={userGoalsOrNeedsTemp}/>

  <p>
      2. What specific action or outcome do you want the user(s) to be able to achieve with this feature?
  </p>
  <input bind:value={featureOutcomeTemp}/>

  <p>
      3. Are there any constraints or requirements for this feature that we should be aware of?
  </p>
  <input bind:value={featureConstraintsTemp}/>

  <p>
      Thanks for providing this information. With this information, I can now generate the INVEST-based user stories, acceptance criteria, and test cases for the feature you have described.
  </p>
  <button on:click={summariseUserNeedsDescription} class="btn variant-filled-primary">Generate</button>
</div>