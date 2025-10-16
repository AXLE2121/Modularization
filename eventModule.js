export function registerButtonEvent(id, handler) {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', handler);
  } else {
    console.error(`Button with ID "${id}" not found!`);
  }
}