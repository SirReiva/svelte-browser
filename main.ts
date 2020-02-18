import { app, BrowserWindow, session } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow = null;
const args = process.argv.slice(1),
    serve = args.some(val => val === '--serve');

function createWindow(): BrowserWindow {

  // Create the browser window.
  win = new BrowserWindow({
    title: 'Svelte Browser',
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: true,
      webSecurity: false,
      webviewTag: true,
    },
  });
  win.setMenu(null);

	win.webContents.session.webRequest.onHeadersReceived(null, (d, c) => {
		if(d.responseHeaders['x-frame-options'] || d.responseHeaders['X-Frame-Options']){
			delete d.responseHeaders['x-frame-options'];
			delete d.responseHeaders['X-Frame-Options'];
		}
		c({cancel: false, responseHeaders: d.responseHeaders});
  });
  session.defaultSession.webRequest.onBeforeRequest(null, (details, callback) => {
    console.log(details.url);
    callback({cancel: true});
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:5000');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  return win;
}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
