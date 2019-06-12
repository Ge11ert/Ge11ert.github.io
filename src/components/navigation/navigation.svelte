<script>
  import mainNavigationItems from 'data/main-navigation-items';
  let opened = false;
  export let mods = {};
  export let mix = [];

  $: navigationMods = Object.assign({ opened }, mods);

  function onClick() {
    opened = !opened;
  }
</script>

<nav class="{b('navigation', { mods: navigationMods, mix})}">
  <a href="#" class="{b('navigation__logo-link')}">
    <span class="{b('navigation__logo-text')}">
      Наверх
    </span>
  </a>
  <ul class="{b('navigation__menu')}">
    {#each mainNavigationItems as {title, link}}
      <li class="{b('navigation__item')}">
        <a href="{link}" class="{b('navigation__link')}">
          {title}
        </a>
      </li>
    {/each}
  </ul>
  <button
    class="{b('navigation__button')}"
    on:click={onClick}
  >
    <span class="{b('navigation__button-text')}">Открыть меню</span>
  </button>
</nav>
