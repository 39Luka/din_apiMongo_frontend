const { app, BrowserWindow } = require("electron");
const path = require("path");

const isDev = !!process.env.ELECTRON_START_URL;
// En produccion cargamos la URL de Vercel directamente
const startURL = process.env.ELECTRON_START_URL || "https://din-api-mongo-frontend.vercel.app/";

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "preload.cjs"),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    if (isDev) {
        win.loadURL(startURL);
        win.webContents.openDevTools();
    } else {
        win.loadURL(startURL);
    }

    // Para simular modo móvil (según instrucciones):
    win.setBounds({ width: 375, height: 667 });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
