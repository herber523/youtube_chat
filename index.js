const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({width: 250, height: 400, transparent:true,frame:false});
    mainWindow.setAlwaysOnTop(true)
    mainWindow.loadURL('file://' + __dirname + '/chat.html');
    mainWindow.on('closed', function () {
        mainWindow = null
    });
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if(process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    if(mainWindow === null) {
        createWindow();
    }
})
