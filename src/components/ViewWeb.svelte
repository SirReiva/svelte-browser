<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    const remote = require('electron').remote;
    const Menu = remote.Menu;
    const { clipboard } = require('electron');
    const basepath = remote.app.getAppPath();
    const path  = require('path');
    const p = path.join(basepath, '/public/preload.js');
	const dispatch = createEventDispatcher();
    export let tabitem;
    let browserWin = null;
    let webContents = null;
    let isInit = false;

    onMount(() => {
		if (browserWin) {
            browserWin.src = tabitem.startUrl;
        }
    });

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

    function naviating() {
        dispatch('favicon', {
            favicon: null
        });
    }

    function changeUrl(event) {
        if(!isInit) {
            isInit = true;
            webContents = remote.webContents.fromId(browserWin.getWebContentsId());
            webContents.on('context-menu', (event ,params) => {
                console.log(event, params);
                handleContextMenu(params);
            });
            // webContents.session.webRequest.onBeforeRequest((details, callback) => {
            //     console.log(details.url);
            //     //filter addblock urls from list 
            //     callback({cancel: false});
            // });
            webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
                console.log(permission);
                callback(true);
            });
        }
        browserWin.openDevTools();
    }

    function generteContextMenu(props) {

        let tmpMenu = [];
        if (props.linkURL && props.mediaType === 'none') {
            tmpMenu.push({
                label: 'Open link new tab',
                click: () => {
                    newWindow({ url: props.linkURL});
                }
            }, {
                label: 'Copy link address',
                click: () => {
                    clipboard.writeText(props.linkURL);
                }
            }, {
                type: 'separator'
            });
        } else if (props.mediaType == 'image') {
            tmpMenu.push({
                label: 'Save Image As...',
                click: () => {
                    webContents.downloadURL(props.srcURL, true);
                }
            }, {
                label: 'Copy Image',
                click: () => {
                    webContents.copyImageAt(props.x, props.y)
                }
            }, {
                label: 'Copy Image address',
                click: () => {
                    clipboard.writeText(props.srcURL);
                }
            });
        } 
        // else if (props.mediaType == 'video' || props.mediaType == 'audio') {
        //     tmpMenu.push({
        //         label: '',
        //         click: () => {

        //         }
        //     });
        // }
        
        tmpMenu.push(...generateClipboardMenu(props));
        return tmpMenu;

    }

    function generateClipboardMenu(props) {
        if (props.isEditable) {
            let  { editFlags } = props;
            let can = type => editFlags[`can${type}`] && props.hasText;
            const mainActions = ['cut', 'copy', 'paste'];
            return mainActions.map(action => ({
                label: action,
                role: action,
                enabled: can(action)
            }));
        }
        return [];
    }

    function handleContextMenu(props) {
        let menuItems = generteContextMenu(props);
        if (menuItems.length) {
            var menu = Menu.buildFromTemplate(menuItems);
            menu.popup({
                x: props.x,
                y: props.y
            });
        }
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
<webview
    preload={p}
    on:dom-ready={changeUrl}
    on:new-window={newWindow}
    on:page-favicon-updated={favIconChanged}
    on:page-title-updated={titleUpdated}
    on:will-navigate={naviating}
    bind:this={browserWin}>
</webview>