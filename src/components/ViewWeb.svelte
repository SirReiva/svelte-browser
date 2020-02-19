<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    const basepath = require('electron').remote.app.getAppPath();
    const path  = require('path');
    const p = path.join(basepath, '/public/preload.js');
	const dispatch = createEventDispatcher();
    export let tabitem;
    let browserWin = null;
    onMount(() => {
		if (browserWin) {
            console.dir(browserWin);
            browserWin.src = tabitem.startUrl;
        }
	});
    function changeUrl(event) {
        console.log(event);
        //browserWin.openDevTools();
    }

    function titleUpdated(ev) {
        dispatch('title', {
			title: ev.title
		});
    }

    function favIconChanged(ev) {
        dispatch('favicon', {
			favicon: ev.favicons[0]
		});
    }

    function newWindow(ev) {
        dispatch('newwin', {
			url: ev.url
		});
    }
</script>
<style>
    webview {
        border: none;
        width: 100%;
        height: 100%;
        background-color: white;
    }
</style>
<webview preload={p} on:dom-ready={changeUrl} on:new-window={newWindow} on:page-favicon-updated={favIconChanged} on:page-title-updated={titleUpdated} bind:this={browserWin}></webview>