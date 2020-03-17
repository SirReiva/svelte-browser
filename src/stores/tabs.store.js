import { writable } from 'svelte/store';


const storeWins = writable({
    selected: -1,
    tabs: []
});

const TabStore = {
    subscribe: storeWins.subscribe,
    addTab: (url) => {
        storeWins.update(data => {
            return {
                selected: data.tabs.length,
                tabs: [
                    ...data.tabs,
                    {
                        title: 'Nueva Pestaña',
                        icon: null,
                        startUrl: url,
                        id: new Date().getTime(),
                        url
                    }
                ]
            };
        });
    },
    removeTab: (index) => {
        storeWins.update(data => {
            if (index < 0 || index >= data.tabs.length) return data;
            return {
                selected: data.tabs.length - 2,
                tabs: data.tabs.filter((d, i) => i !== index)
            }
        });
    },
    changeTab: (num) => {
        storeWins.update(data => {
            if (num < 0 || num >= data.tabs.length) return data;
            return {
                selected: num,
                tabs: data.tabs
            }
        });
    },
    setUrl: (url, index) => {
        storeWins.update(data => {
            if (index < 0 || index >= data.tabs.length) return data;
            return {
                selected: data.selected,
                tabs: data.tabs.map((val, i) => {
                    let it = val;
                    if (i === index) {
                        it = {
                            ...it,
                            url
                        }
                    }
                    return it;
                })
            }
        });
    },
    setTitle: (title, index) => {
        storeWins.update(data => {
            if (index < 0 || index >= data.tabs.length) return data;
            return {
                selected: data.selected,
                tabs: data.tabs.map((val, i) => {
                    let it = val;
                    if (i === index) {
                        it = {
                            ...it,
                            title
                        }
                    }
                    return it;
                })
            }
        });
    },
    setIcon: (icon, index) => {
        storeWins.update(data => {
            if (index < 0 || index >= data.tabs.length) return data;
            return {
                selected: data.selected,
                tabs: data.tabs.map((val, i) => {
                    let it = val;
                    if (i === index) {
                        it = {
                            ...it,
                            icon
                        }
                    }
                    return it;
                })
            }
        });
    },
};

export default TabStore;