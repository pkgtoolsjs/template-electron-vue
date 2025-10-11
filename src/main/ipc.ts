import { ipcMain } from 'electron'

function initIpcMain() {
  // IPC test
  ipcMain.on('ping', () => {
    console.log('pong')
  })
}

export { initIpcMain }
