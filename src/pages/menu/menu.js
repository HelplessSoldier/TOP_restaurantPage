import './menu.css';
import { createElement } from '../../modulesAndFunctions/createElement';

function renderMenuPage(element) {

    const menuWrapper = createElement('div', { id: 'menuWrapper'}, '');

    // top bar for logo and about button
    const menuTopBarContainer = createElement('div', { id: 'menuTopBarContainer'}, '');
    const menuLogo = createElement('h1', { id: 'menuLogo' }, `Phish n' Chips`);
    const aboutButton = createElement('button', { id: 'menuAboutButton' }, 'Find Us');
    menuTopBarContainer.append(menuLogo, aboutButton);

    menuWrapper.append(menuTopBarContainer);
    element.append(menuWrapper);
};

export { renderMenuPage }