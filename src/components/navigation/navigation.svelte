<script>
  import mainNavigationItems from 'data/main-navigation-items';
  let opened = false;
  export let mods = {};
  export let mix = [];
</script>

<nav class="{b('navigation', { mods, mix})}">
  <a href="#" class="{b('navigation__link')}">
    Наверх
  </a>
  <ul class="{b('navigation__menu')}">
    {#each mainNavigationItems as {title, href}}
      <li class="{b('navigation__item')}">
        <a href="{href}">
          {title}
        </a>
      </li>
    {/each}
  </ul>
  <button class="{b('navigation__button')}">
    Открыть меню
  </button>
</nav>
