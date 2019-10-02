<script>
  import images from 'data/header-banner';
  export let mods = {};
  export let mix = [];
</script>

<div class="{b('header-banner', { mods, mix })}">
  <picture class="{b('header-banner__image-container')}">
    <source
      srcset="{images.desktop.url}"
      media="(min-width: 980px)"
    />
    <source
      srcset="{images.laptop.url}"
      media="(min-width: 768px)"
    />
    <source
      srcset="{images.tablet.url}"
      media="(min-width: 425px)"
    />
    <img
      src="{images.mobile.url}"
      alt="Фоновая фотография шапки"
      class="{b('header-banner__image')}"
    />
  </picture>
</div>
