<script>
  import SvgIcon from 'components/svg-icon';
  import skills from 'data/skills';
  export let mods = {};
  export let mix = [];
</script>

<ul class="{b('skills-list', { mods, mix })}">
  {#each skills as { title, icon } }
    <li class="skills-list__item">
      <SvgIcon
        symbolId="{icon}"
        width="36"
        height="36"
        mix="skills-list__icon"
      />

      <span class="skills-list__text">
        {title}
      </span>
    </li>
  {/each}
</ul>
