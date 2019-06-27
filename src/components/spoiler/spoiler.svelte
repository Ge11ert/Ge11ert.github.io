<script>
  export let mods = {};
  export let mix = [];
  export let title = '';

  let expanded = false;
  const expand = () => {
    expanded = !expanded;
  };
  $: localMods = Object.assign({ expanded }, mods);
</script>

<div class="{b('spoiler', { mods: localMods, mix})}">
  <div class="spoiler__title">
    <span class="spoiler__title-text">
      {title}
    </span>
    <button
      class="spoiler__expand-button"
      on:click="{expand}"
    >
      <span class="spoiler__button-text">
        { expanded ? 'Скрыть' : 'Развернуть' }
      </span>
    </button>
  </div>

  <div class="spoiler__content">
    <slot></slot>
  </div>
</div>
