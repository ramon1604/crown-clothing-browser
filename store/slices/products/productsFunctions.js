const PRODUCTS = fetch("../../../shop-data.json");

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../../../utils/firebase/firebase.js";

//Promise is resolved here and stored in myProducts
export const myProducts = (async () =>
  await new Promise((success, error) => {
    addCollectionAndDocuments("hats", "categories", PRODUCTS);
    const categories = getCategoriesAndDocuments("categories");
    categories ? success(categories) : error([]);
  }))();
