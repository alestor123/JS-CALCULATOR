const { app, BrowserWindow} = require('electron')
    // var image = nativeImage.createFromPath(__dirname + 'assets/icon.png'); 
function createWindow() {

    const win = new BrowserWindow({
        width: 250,
        height: 350,
        icon:'assets/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)