<script>
  import Section from './Section.svelte';
    import { isStandalone } from './environment';
  const color = '#ff0808';
</script>

<style>
  /*
  .badge {
    background-color: #b117f8;
    border-bottom: 2px solid #6f0073;
    color: white;
    padding: 2px 5px;
    border-radius: 4px;
  }
  ul {
    margin: 0;
  }
  */
</style>

<Section accent={color}>
  <div lang="en">
    <p>
      This is the last version of the packager before we switched licenses from the Apache 2.0 License to
      the GNU Lesser General Public License version 3.
    </p>
    <p>
      This version is no longer maintained, but it will continue to exist indefinitely.
    </p>
    {#if !isStandalone}
      <p>
        You can download the offline/standalone HTML version here: <a href="standalone.html" download="turbowarp-packager-legacy-standalone.html">standalone.html</a>
      </p>
    {/if}
  </div>
</Section>
