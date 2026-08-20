const CACHE_NAME = 'commuter-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

// Keep-alive: check reminders every 30s
let checkInterval = null;

function startChecking(){
  if(checkInterval) return;
  checkInterval = setInterval(checkReminders, 30000);
  checkReminders();
}

function stopChecking(){
  clearInterval(checkInterval);
  checkInterval = null;
}

async function checkReminders(){
  try{
    const client = await self.clients.matchAll({ type: 'window' });
    if(!client.length){ stopChecking(); return; }
    client[0].postMessage({ type: 'check-reminders' });
  }catch(e){}
}

self.addEventListener('message', e => {
  if(e.data === 'start-reminders') startChecking();
  if(e.data === 'stop-reminders') stopChecking();
});
