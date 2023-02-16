import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../../utils/firebase/firebase.js";

const DIRECTORIES = fetch("../../../components/directory/directory.json");

//Promise is resolved here and stored in myDirectories
export const myDirectories = (async () =>
  await new Promise((success, error) => {
    addCollectionAndDocuments("hats", "directories", DIRECTORIES);
    const directories = getCategoriesAndDocuments("directories");
    directories ? success(directories) : error([]);
  }))();
