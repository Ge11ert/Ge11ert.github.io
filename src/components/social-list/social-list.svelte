<script>
  import SvgIcon from 'components/svg-icon';
  import socialList from 'data/social-list';
  export let mods = {};
  export let mix = [];
</script>

<ul class="{b('social-list', { mods, mix })}">
  {#each socialList as {title, href, icon} }
    <li class="social-list__item">
      <a
        href="{href}"
        class="social-list__link"
      >
        <span class="social-list__link-text">
          {title}
        </span>

        <SvgIcon
          symbolId="{icon}"
          width="{32}"
          height="{32}"
          mix="social-list__icon"
        ></SvgIcon>
      </a>
    </li>
  {/each}
</ul>
