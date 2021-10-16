const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");
let win;

function createWindow () {
    win = new BrowserWindow({
      width: 800,
      height: 600
    });
    win.loadURL(`file://${__dirname}/dist/sgl-ae/index.html`)

    //win.webContents.openDevTools()
}



app.on('ready', createWindow)