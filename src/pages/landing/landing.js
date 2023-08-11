import './landing.css';
import { createElement } from '../../modulesAndFunctions/createElement';
import { clearContent } from '../../modulesAndFunctions/clearpage';
import { renderMenuPage } from '../menu/menu';
import { renderAboutPage } from '../about/about';

function renderLandingPage(element) {

    // wrapper to keep styling contained to landing page
    const landingWrapper = createElement('div', {id: 'landingWrapper'}, '')

    // buttons -> buttonContainer
    const buttonContainer = createElement('div', { id: 'buttonContainer' });
    const aboutButton = createElement('button', { id: 'aboutButton'}, 'Find Us')
    const menuButton = createElement('button', { id: 'menuButton' }, 'Main Menu');
    buttonContainer.append(menuButton, aboutButton);
    
    // logo, buttonsContainer -> logoContainer
    const logoContainer = createElement('div', { id: 'logoContainer' });
    const restaurantLogo = createElement('h1', { id: 'restaurantLogo' }, "Phish n' Chips");
    logoContainer.append(restaurantLogo, buttonContainer);

    
    // hours -> hoursContainer
    const openHours = createElement('p', { id: 'openHours' });
    const weekdaysHours = createElement('span', {}, 'Mon-Fri: 6:30am - 10:00pm');
    const weekendHours = createElement('span', {}, 'Sat-Sun: 12pm - 10pm');
    openHours.append(weekdaysHours, weekendHours);
    
    // hook, hoursContainer, attribution -> hookContainer
    const hookContainer = createElement('div', { id: 'hookContainer' });
    const hook = createElement('p', { id: 'hook' }, 'Feeding Your Cravings, One Byte at a Time.');
    const bgImageAttribution = createElement('span', {id: 'bgImageAttribution'}, 'Image by Sueda Dilli on pexels.');
    hookContainer.append(hook, openHours, bgImageAttribution);

    // add all elements to page
    landingWrapper.append(logoContainer, hookContainer);
    element.append(landingWrapper)

    // on menuButton press, clear page and display menu
    menuButton.addEventListener('click', () => {
        clearContent(element);
        renderMenuPage(element);
    });

    // on find us button click, clear page and display about
    aboutButton.addEventListener('click', () => {
        clearContent(element);
        renderAboutPage(element);
    });

}

export { renderLandingPage };
