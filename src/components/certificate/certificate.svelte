<script>
  export let mods = {};
  export let mix = [];
  export let text;
  export let href;
  export let imageSrc;
</script>

<a href="{href}" class="{b('certificate', { mods, mix })}">
  <span class="certificate__text">
    {text}
  </span>
  <img
    class="certificate__image"
    src="{imageSrc}"
    alt="{text}"
    title="{text}"
  >
</a>

