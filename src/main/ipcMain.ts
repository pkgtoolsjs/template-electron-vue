import { ipcMain } from 'electron'

export default function initIpcMain() {
  // IPC test
  ipcMain.on('ping', () => {
    console.log('pong')
  })
}
