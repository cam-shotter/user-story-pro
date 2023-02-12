<script lang="ts">
  import { productDescription } from "../routes/products/product/store";
  let productDescriptionTemp: string = '';
  
  function summariseProductDescription() {
    productDescription.update(n => productDescriptionTemp)
  }
</script>

<h3>Product description:</h3>

<p>Please describe the product in plain language then submit your description will be summarised</p>

<input bind:value={productDescriptionTemp} />
<button on:click={summariseProductDescription} class="btn variant-filled-primary">Submit</button>
        