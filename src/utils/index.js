export const $ = (selector) => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
  };