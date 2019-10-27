<script>
  import cytoscape from 'cytoscape';
  import { onMount } from 'svelte';

  export let mods = {};
  export let mix = [];

  let container;
  let cy;

  onMount(() => {
    cy = cytoscape({
      container: document.querySelector('.skills-graph'),
      elements: {
        nodes: [
          {
            data: { id: 'a' }
          },

          {
            data: { id: 'b' }
          }
        ],
        edges: [
          {
            data: { id: 'ab', source: 'a', target: 'b' }
          }
        ]
      },

      layout: {
        name: 'grid',
        rows: 1
      },

      // so we can see the ids
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(id)'
          }
        }
      ]
    });
  });

</script>

<div
  class="{b('skills-graph', { mods, mix })}"
  bind:this={container}
>
</div>
