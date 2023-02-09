<script lang="ts">
  export let id: string = 'id';
  export let name: string = 'name';
  export let description: string = 'description';
</script>

<div class="card card-hover max-w-prose">
  <header class="card-header flex items-center gap-4">
    <p>{id}</p>
    <h2>{name}</h2>
  </header>
  <main class="p-4">
    {description}
  </main>
</div>