export const msgConditionReturn = (msg, cond) => {
  if (cond) {
    alert(msg);
    return true;
  } else {
    return false;
  }
};
globalObjects.msgConditionReturn = msgConditionReturn;

export const actionReducer = (type, payload) => ({ type, payload });
globalObjects.actionReducer = actionReducer;

export const addStorage = (storageName, storagePayload) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(storageName, JSON.stringify(storagePayload));
    return true;
  } else {
    return false;
  }
};
globalObjects.addStorage = addStorage;

export const getStorage = (storageName, initValue) => {
  if (typeof Storage !== "undefined") {
    const result = JSON.parse(localStorage.getItem(storageName));
    if (result) {
      return result;
    } else {
      return initValue;
    }
  }
};
globalObjects.getStorage = getStorage;

export const searchResult = () => {
  const search = location.search;
  if (search) {
    const arr = search.split("=");
    if (arr[0] === "?payment_intent" && arr[arr.length - 1] == "succeeded") {
      return "success";
    }
    return search.toLowerCase().replace("?", "");
  }
  return "Directory";
};
globalObjects.searchResult = searchResult;

