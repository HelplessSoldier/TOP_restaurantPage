import './menu.css';
import { createElement } from '../../modulesAndFunctions/createElement';
import { clearContent } from '../../modulesAndFunctions/clearpage';
import { renderAboutPage } from '../about/about';
import { createMenuElement } from './menuItem/menuItem';
import menuData from './menuItem/menuData';
import { importMenuImages } from '../../modulesAndFunctions/importManuImages';
import { renderLandingPage } from '../landing/landing';

function renderMenuPage(element) {
    const menuLogoText = `Phish n' Chips`;
    const menuAboutButtonText = 'Find Us';
    const appetizerText = 'API-tizers:';
    const mainsText = 'int Mains():';
    const dessertText = 'Codefections';

    const menuWrapper = createElement('div', { id: 'menuWrapper'}, '');

    const menuTopBarContainer = createElement('div', { id: 'menuTopBarContainer'}, '');
    const menuLogo = createElement('h1', { id: 'menuLogo' }, menuLogoText);
    const aboutButton = createElement('button', { id: 'menuAboutButton' }, menuAboutButtonText);
    menuTopBarContainer.append(menuLogo, aboutButton);

    // menu items and container
    const menuItemsContainer = createElement('div', { id: 'menuItemsContainer'}, '');

    const appetizersContainer = createElement('div', { id: 'appetizersContainer', class: 'sectionContainer'}, '');
    const appetizersHeader = createElement('h2', { class: 'menuItemsHeader'}, appetizerText);

    const mainsContainer = createElement('div', { id: 'mainsContainer', class: 'sectionContainer'}, '');
    const mainsHeader = createElement('h2', { class: 'menuItemsHeader' }, mainsText);

    const dessertContainer = createElement('div', { id: 'dessertContainer', class: 'sectionContainer'}, '');
    const dessertHeader = createElement('h2', { class: 'menuItemsHeader'}, dessertText);

    // Appending headers to containers
    appetizersContainer.appendChild(appetizersHeader);
    mainsContainer.appendChild(mainsHeader);
    dessertContainer.appendChild(dessertHeader);

    // Appending containers to menuItemsContainer
    menuItemsContainer.appendChild(appetizersContainer);
    menuItemsContainer.appendChild(mainsContainer);
    menuItemsContainer.appendChild(dessertContainer);

    
    // finalize non menu item dom elements
    menuWrapper.append(menuTopBarContainer, menuItemsContainer);
    element.append(menuWrapper);

    // load menu images
    const images = importMenuImages(require.context('../../assets/images/', false, /\.(png|jpg|jpeg|gif|svg)$/));
    
    // Populating menu items based on menuData
    menuData.forEach(item => {
        const parentContainer = document.getElementById(item.parentName);
        if (parentContainer) {
            const menuItem = createMenuElement(item.name, item.description, images[item.imageName]);
            parentContainer.appendChild(menuItem);
        }
    });

    aboutButton.addEventListener('click', () => { 
        clearContent(element);
        renderAboutPage(element);
    })

    menuLogo.addEventListener('click', () => {
        clearContent(element);
        renderLandingPage(element);
    })
};

export { renderMenuPage }