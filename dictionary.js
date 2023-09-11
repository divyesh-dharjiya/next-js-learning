
export const dictionaries = {
    en: () => import("./dictionaries/en.json").then(r => r.default),
    ar: () => import("./dictionaries/ar.json").then(r => r.default)
}
  
export const getDictionary = (lang) => {
  if (dictionaries.hasOwnProperty(lang)) {
    return dictionaries[lang]();
  } else {
    return false;
  }
}