<script>
  import Tabbar from './components/Tabbar.svelte';
  import TabContent from './components/TabContent.svelte';
</script>

<style>
  .base {
    width: 100vw;
    height: 100vh;
  }
</style>
<div class="base">
  <Tabbar/>
  <TabContent/>
</div>
