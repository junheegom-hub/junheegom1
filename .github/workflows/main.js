- name: main.js 생성
  shell: powershell
  run: |
    @"
    const { app, BrowserWindow } = require('electron');
    function createWindow() {
      const win = new BrowserWindow({ width: 400, height: 300 });
      win.loadFile('index.html');
    }
    app.whenReady().then(createWindow);
    "@ | Out-File -Encoding utf8 main.js
