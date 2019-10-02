<script>
  export let symbolId;
  export let width;
  export let height;
  export let mods = {};
  export let mix = [];
</script>

<svg
  class="{b('svg-icon', { mods, mix })}"
  width="{width}"
  height="{height}"
>
  <use xlink:href="#{symbolId}"></use>
</svg>
