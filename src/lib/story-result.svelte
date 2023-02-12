<script lang="ts">
  export let userStory: string;
  export let acceptanceCriteria: string[];
  export let testCases: string[];

  const upVote = () => {
    console.log('upvote');
  }

  const neutralVote = () => {
    console.log('neutralVote');
  }

  const downVote = () => {
    console.log('downVote');
  }
</script>

<div class="grid grid-flow-col gap-4 p-4">
  <div class="grid place-content-center">
    <input type="checkbox" class="col-start-0"/>
  </div>
  <div class="card variant-soft-surface p-4">
    <h4>User Story 1</h4>
    <p>{userStory}</p>
  </div>
  <div class="card variant-soft-surface p-4">
    <h4>Acceptance Criteria 1</h4>
    <p>{acceptanceCriteria}</p>
  </div>
  <div class="card variant-soft-surface p-4">
    <h4>Test Case 1</h4>
    <p>{testCases}</p>
  </div>
  <div class="grid">
    <button on:click={upVote} class="btn variant-ringed-primary">Up vote</button>
    <button on:click={neutralVote} class="btn variant-ringed-primary">Neutral vote</button>
    <button on:click={downVote} class="btn variant-ringed-primary">Down vote</button>
  </div>
</div>