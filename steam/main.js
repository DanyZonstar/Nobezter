// Обёртка Electron: запускает trapped_within.html в полноэкранном окне
const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
function create() {
  const win = new BrowserWindow({ fullscreen: true, backgroundColor: '#000000', autoHideMenuBar: true, webPreferences: { autoplayPolicy: 'no-user-gesture-required' } });
  win.loadFile(path.join(__dirname, 'game', 'trapped_within.html'));
  globalShortcut.register('F11', () => win.setFullScreen(!win.isFullScreen()));
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
