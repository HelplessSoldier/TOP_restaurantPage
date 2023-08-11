export function clearContent( element ) {
    element.innerHTML = '';
    element.removeAttribute('style');
    element.className = '';
}