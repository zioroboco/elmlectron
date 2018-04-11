const electron = require("electron")
const { BrowserWindow } = electron

electron.app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1024, 
    height: 768
  })
  mainWindow.loadURL("http://localhost:8080")
  mainWindow.webContents.openDevTools()
})
