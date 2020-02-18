<style>
    .chrome-tabs-shell {
        position: relative;
        background-color: #e9eef1;
        padding: 10px 10px 6px 10px;
        border-radius: 4px 4px 0 0;
        height: 24px;
        overflow: hidden;
    }
    .chrome-tabs-shell .chrome-shell-bottom-bar {
        position: absolute;
        bottom: 0px;
        height: 5px;
        left: 0px;
        width: 100%;
        border-top: 1px solid rgba(0, 0, 0, 0.21);
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.6);
        background-color: #fafafa;
        z-index: 20;
    }

    .chrome-tabs {
        display: inline-flex;
        width: calc(100% - 40px)
    }
    .chrome-tabs * {
        -webkit-user-select: none;
        cursor: default;
        font-family: "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif;
        font-size: 11px;
        line-height: 13px;
    }
    .chrome-tabs .chrome-tab {
        float: left;
        position: relative;
        height: 25px;
        width: 180px;
        border: 0px;
        margin: 0px;
        z-index: 1;
        background-color: #fafafa;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.6), 0 -1px rgba(0, 0, 0, 0.2), -1px 0 rgba(0, 0, 0, 0.2), 1px 0 rgba(0, 0, 0, 0.2);
    }
    .chrome-tabs .chrome-tab.chrome-tab--front {
        z-index: 30;
    }
    .cssmasks .chrome-tabs .chrome-tab {
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.8), 0 -1px rgba(0, 0, 0, 0.2);
        margin: 0 5px 0 20px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves {
        display: none;
    }
    .cssmasks .chrome-tabs .chrome-tab .chrome-tab-curves {
        display: block;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves * {
        position: absolute;
        width: 20px;
        height: 24px;
        -webkit-mask-size: 100%;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-left, .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-left-shadow1, .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-left-shadow2 {
        -webkit-mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjVweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT50YWItbGVmdDwvdGl0bGU+CiAgICA8ZGVzY3JpcHRpb24+TGVmdCBzaWRlIG9mIGEgQ2hyb21lIFRhYjwvZGVzY3JpcHRpb24+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0idGFiLWxlZnQiIGZpbGw9InJnYigyMjMsMjIzLDIyMykiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAsMjUgQzAsMjUgNi4wODMxMzcwMiwxOS40NTczOTA0IDguMDkzMjc5MTgsMTAuOTY1NTc2MiBDOC4xMTM1MTI4NywxMC44ODAwOTk0IDguOTY2NzE0MDEsNi4zMjE2Mzk4MSAxMC4zMzM4ODUzLDMuNzM4MjgxMjUgQzExLjAzMzYyNjQsMi40MTYwNzUyIDEyLjExNzUyMzYsMS4yMDY1NTk3OSAxMy40MDQ3NDkxLDAuNTgzNDk2MDk0IEMxNC41MjQwMzEsMC4wNDE3MjMxODkxIDE1LjkwOTg4ODMsMCAxNS45MDk4ODgzLDAgTDIwLDAgTDIwLDI1IEwwLDI1IFogTTAsMjUiIGlkPSJ0YWItbGVmdCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=);
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-right, .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-right-shadow1, .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-right-shadow2 {
        -webkit-mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjVweCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT50YWItcmlnaHQ8L3RpdGxlPgogICAgPGRlc2NyaXB0aW9uPlJpZ2h0IHNpZGUgb2YgYSBDaHJvbWUgVGFiPC9kZXNjcmlwdGlvbj4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJ0YWItcmlnaHQiIGZpbGw9InJnYigyMjMsMjIzLDIyMykiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAsMjUgTDIwLDI1IEMyMCwyNSAxMy45MTY4NjMsMTkuNDU3MzkwNCAxMS45MDY3MjA4LDEwLjk2NTU3NjIgQzExLjg4NjQ4NzEsMTAuODgwMDk5NCAxMS4wMzMyODYsNi4zMjE2Mzk4MSA5LjY2NjExNDc1LDMuNzM4MjgxMjUgQzguOTY2MzczNjEsMi40MTYwNzUyIDcuODgyNDc2NDEsMS4yMDY1NTk3OSA2LjU5NTI1MDkzLDAuNTgzNDk2MDk0IEM1LjQ3NTk2OTAxLDAuMDQxNzIzMTg5MSA0LjA5MDExMTY2LDAgNC4wOTAxMTE2NiwwIEwwLDAgTDAsMjUgWiBNMCwyNSIgaWQ9InRhYi1yaWdodCI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=);
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-left, .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-right {
        top: 1px;
        z-index: 1;
        background-color: #fafafa;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-left {
        left: -20px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-right {
        right: -20px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-left-shadow1, .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-right-shadow1 {
        top: 0px;
        width: 21px;
        height: 25px;
        background-color: white;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-left-shadow1 {
        left: -21px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-right-shadow1 {
        right: -21px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-left-shadow2, .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-right-shadow2 {
        top: -1px;
        width: 22px;
        height: 26px;
        background: rgba(0, 0, 0, 0.24);
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-left-shadow2 {
        left: -22px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-curves .chrome-tab-curve-right-shadow2 {
        right: -22px;
    }
    .chrome-tabs .chrome-tab.chrome-tab-current {
        z-index: 999;
        background-color: #f9f9f9;
        background-image: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    }
    .chrome-tabs .chrome-tab.chrome-tab-current .chrome-tab-curves .chrome-tab-curve-left, .chrome-tabs .chrome-tab.chrome-tab-current .chrome-tab-curves .chrome-tab-curve-right {
        background-color: #f9f9f9;
        background-image: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    }
    .chrome-tabs .chrome-tab.chrome-tab-current .chrome-tab-curves .chrome-tab-curve-left-shadow1, .chrome-tabs .chrome-tab.chrome-tab-current .chrome-tab-curves .chrome-tab-curve-right-shadow1, .chrome-tabs .chrome-tab.chrome-tab-current .chrome-tab-curves .chrome-tab-curve-left-shadow2, .chrome-tabs .chrome-tab.chrome-tab-current .chrome-tab-curves .chrome-tab-curve-right-shadow2 {
        height: 25px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-favicon {
        height: 16px;
        width: 16px;
        background-size: 16px;
        position: absolute;
        left: 9px;
        top: 5px;
        z-index: 3;
    }
    .cssmasks .chrome-tabs .chrome-tab .chrome-tab-favicon {
        left: -2px;
        top: 4px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-title {
        color: #444444;
        padding: 5px 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .cssmasks .chrome-tabs .chrome-tab .chrome-tab-title {
        padding: 5px 5px 5px 19px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-close {
        position: absolute;
        top: 6px;
        right: 7px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        z-index: 2;
    }
    .cssmasks .chrome-tabs .chrome-tab .chrome-tab-close {
        right: -6px;
        top: 5px;
    }
    .chrome-tabs .chrome-tab .chrome-tab-close:before {
        content: "\00D7";
        position: absolute;
        top: 0px;
        right: 0px;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        text-align: center;
        font-size: 11px;
        line-height: 12px;
        color: #888888;
        text-shadow: 0 1px rgba(255, 255, 255, 0.3);
    }
    .chrome-tabs .chrome-tab .chrome-tab-close:hover:before, .chrome-tabs .chrome-tab .chrome-tab-close:active:before {
        -webkit-font-smoothing: antialiased;
        color: white;
        text-shadow: 0 1px #b9554c;
    }
    .chrome-tabs .chrome-tab .chrome-tab-close:hover, .chrome-tabs .chrome-tab .chrome-tab-close:active {
        box-shadow: inset 0 0 0 1px #b9554c;
        background: #dd837b;
    }
    .chrome-tabs .chrome-tab .chrome-tab-close:active:before {
        box-shadow: inset 0 0 0 1px #b9554c, inset 0 1px 3px #b9554c, inset 0 0 20px rgba(0, 0, 0, 0.1);
    }
    .chrome-tab-favicon > img {
        width: 100%;
        height: 100%;
    }
    .chrome-tab-add {
        width: 20px;
        margin-left: 20px;
        position: absolute;
        background-color: #fafafa;
        border: none;
        height: 20px;
        border-radius: 50%;
        outline: none;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
    }
</style>
<script>
    import Spinner from './Spinner.svelte';
    import TabStore from '../stores/tabs.store.js';
    let selected = 0;
    let tabs = [];
    TabStore.subscribe(data => {
        selected = data.selected;
        tabs = data.tabs;
    });

    function createTab() {
        TabStore.addTab('https://bing.es');
    }

    function selectTab(num) {
        TabStore.changeTab(num);
    }

    function closeTab(num) {
        TabStore.removeTab(num);
    }

    function noop() {}

</script>
<main class="cssmasks">
    <div class="chrome-tabs-shell" on:dblclick={createTab}>
        <div class="chrome-tabs">
            {#each tabs as tab, i (tab.id)}
            <div class="chrome-tab" on:dblclick|stopPropagation={noop} class:chrome-tab--front={selected === i} on:click|stopPropagation={() => selectTab(i)}>
                <div class="chrome-tab-favicon">
                    {#if tab.icon}
                    <img alt="" src={tab.icon}/>
                    {:else}
                    <Spinner/>
                    {/if}
                </div>
                <div class="chrome-tab-title">{tab.title}</div>
                <div class="chrome-tab-close" on:click|stopPropagation={() => closeTab(i)}></div>
                <div class="chrome-tab-curves">
                    <div class="chrome-tab-curve-left-shadow2"></div>
                    <div class="chrome-tab-curve-left-shadow1"></div>
                    <div class="chrome-tab-curve-left"></div>
                    <div class="chrome-tab-curve-right-shadow2"></div>
                    <div class="chrome-tab-curve-right-shadow1"></div>
                    <div class="chrome-tab-curve-right"></div>
                </div>
            </div>
            {/each}
        </div>
        <button class="chrome-tab-add" on:dblclick|stopPropagation={noop} on:click={createTab}>+</button>
        <div class="chrome-shell-bottom-bar"></div>
    </div>
</main>