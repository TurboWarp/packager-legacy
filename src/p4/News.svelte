<script>
  import Section from './Section.svelte';
  import { isStandalone } from './environment';
  const color = '#ff0808';
</script>

<Section accent={color}>
  <div lang="en">
    <p>This is the last version of the packager before the <a href="https://docs.turbowarp.org/new-compiler">new compiler</a> was implemented.</p>
    <p>A small handful of custom extensions don't work with the new compiler. We expect most of these to be updated over time, but in case some are not updated. This version is no longer maintained, but it will continue to exist indefinitely.</p>
    {#if !isStandalone}
      <p>You can download the offline/standalone HTML version here: <a href="standalone.html" download="turbowarp-packager-legacy-standalone.html">standalone.html</a></p>
    {/if}
  </div>
</Section>
