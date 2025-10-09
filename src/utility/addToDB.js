const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem('installedApps');

  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    alert('Already exsist');
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem('installedApps', data);
  }
};

export { addToStoreDB, getStoredApp };
