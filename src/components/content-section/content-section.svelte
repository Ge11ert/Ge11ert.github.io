<script>
  export let title = '';
  export let mods = {};
  export let mix = [];
</script>

<section class="{b('content-section', { mods, mix })}">
  <div class="content-section__title">
    <h2 class="content-section__title-text">
      {title}
    </h2>
  </div>
  <div class="content-section__body">
    <slot></slot>
  </div>
</section>
