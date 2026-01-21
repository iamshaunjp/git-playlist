// Select a DOM element
const select(selector, all=false) {
  let selector = selector.trim();
  return all ? [...document.querySelectorAll(selector)] : document.querySelector(selector);
}
