import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  sayHello: () => ipcRenderer.invoke('say-hello'),
});
