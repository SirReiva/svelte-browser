<script>
    import TabStore from '../stores/tabs.store.js';
    import ViewWeb from './ViewWeb.svelte';
    let selected = 0;
    let tabs = [];
    TabStore.subscribe(data => {
        selected = data.selected;
        tabs = data.tabs;
    });

    function changeTitle(i, e) {
        TabStore.setTitle(e.detail.title, i);
    }

    function changeIcon(i, e) {
        TabStore.setIcon(e.detail.favicon, i);
    }

    function newWindow(ev) {
        TabStore.addTab(ev.detail.url);
    }

</script>
<style>
    .baseContent {
        width: 100vw;
        height: calc(100vh - 40px);
        background-color: #fafafa;
        position: relative;
    }
    .tab {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
        overflow: hidden;
        top: 0px;
        left: 0px;
    }
    .top {
        z-index: 1;
    }
</style>
<div class="baseContent">
    {#each tabs as tab, i (tab.id)}
        <div class="tab" class:top={selected === i}>
            <ViewWeb bind:tabitem={tab} on:title={(e) => changeTitle(i, e)} on:favicon={(e) => changeIcon(i, e)} on:newwin={newWindow}></ViewWeb>
        </div>
    {/each}
</div>