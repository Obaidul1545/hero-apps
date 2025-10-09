import { toast } from 'react-toastify';

// get localStorage
const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem('installedApps');

  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

// save localStorage
const addToStoreDB = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    return toast.warning('Already Installed!');
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem('installedApps', data);
  }
  toast.success('Installed Success!');
};

// delete localStorage
const removeToStoredDB = (id) => {
  const storeApps = getStoredApp().map((a) => parseInt(a));
  const updateStoreApps = storeApps.filter((apps) => apps !== id);
  localStorage.setItem('installedApps', JSON.stringify(updateStoreApps));
};

export { addToStoreDB, getStoredApp, removeToStoredDB };
