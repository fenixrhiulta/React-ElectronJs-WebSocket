import { app, Tray, Menu } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

var isQuiting;

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady().then(async () => {

  var mainWindow = createWindow('main', {
    width: 600,
    height: 600,
  });

  mainWindow.setMenu(null);

  mainWindow.on('close', function (event) {
    if (!isQuiting) {
      mainWindow.hide();
      event.preventDefault();
    }
  });

  const gotTheLock = app.requestSingleInstanceLock()
      
  if (!gotTheLock) { app.quit() } 
  else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
      // Someone tried to run a second instance, we should focus our window.
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
      }
    })
  }

  require("../server/index")

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }

    var tray = new Tray('./resources/icon.ico');
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Abrir', click: function () { 
        mainWindow.show();
      }},
      { label: 'Fechar Servidor', click: function () {
        isQuiting = true;
        app.quit();
      }},
    ])

    tray.setToolTip('RhiultaServidor');
    tray.setContextMenu(contextMenu);
  });

})();

app.on('window-all-closed', () => {
  app.quit();
});


