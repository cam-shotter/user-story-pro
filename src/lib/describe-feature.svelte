<script lang="ts">
  import { featureDescription } from "../routes/products/product/store";
  let featureDescriptionTemp: string = '';
  
  function summariseFeatureDescription() {
    featureDescription.update(n => featureDescriptionTemp)
  }
</script>
  
<p>Great, thanks! Can you now describe the specific feature you'd like to add to this product:</p>
<input bind:value={featureDescriptionTemp} />
<button on:click={summariseFeatureDescription} class="btn variant-filled-primary">Submit</button>