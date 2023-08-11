import './landing.css';
import { createElement } from '../../modulesAndFunctions/createElement';
import { clearContent } from '../../modulesAndFunctions/clearpage';
import { renderMenuPage } from '../menu/menu';
import { renderAboutPage } from '../about/about';

function renderLandingPage(element) {
    // Text content variables
    const aboutButtonText = 'Find Us';
    const menuButtonText = 'Main Menu';
    const restaurantLogoText = "Phish n' Chips";
    const weekdaysHoursText = 'Mon-Fri: 6:30am - 10:00pm';
    const weekendHoursText = 'Sat-Sun: 12pm - 10pm';
    const hookText = 'Feeding Your Cravings, One Byte at a Time.';
    const bgImageAttributionText = 'Image by Sueda Dilli on pexels.';

    // wrapper to keep styling contained to landing page
    const landingWrapper = createElement('div', { id: 'landingWrapper' }, '');

    // buttons -> buttonContainer
    const buttonContainer = createElement('div', { id: 'buttonContainer' });
    const aboutButton = createElement('button', { id: 'aboutButton' }, aboutButtonText);
    const menuButton = createElement('button', { id: 'menuButton' }, menuButtonText);
    buttonContainer.append(menuButton, aboutButton);

    // logo, buttonsContainer -> logoContainer
    const logoContainer = createElement('div', { id: 'logoContainer' });
    const restaurantLogo = createElement('h1', { id: 'restaurantLogo' }, restaurantLogoText);
    logoContainer.append(restaurantLogo, buttonContainer);

    // hours -> hoursContainer
    const openHours = createElement('p', { id: 'openHours' });
    const weekdaysHours = createElement('span', {}, weekdaysHoursText);
    const weekendHours = createElement('span', {}, weekendHoursText);
    openHours.append(weekdaysHours, weekendHours);

    // hook, hoursContainer, attribution -> hookContainer
    const hookContainer = createElement('div', { id: 'hookContainer' });
    const hook = createElement('p', { id: 'hook' }, hookText);
    const bgImageAttribution = createElement('span', { id: 'bgImageAttribution' }, bgImageAttributionText);
    hookContainer.append(hook, openHours, bgImageAttribution);

    // add all elements to the page
    landingWrapper.append(logoContainer, hookContainer);
    element.append(landingWrapper);

    // on menuButton press, clear the page and display the menu
    menuButton.addEventListener('click', () => {
        clearContent(element);
        renderMenuPage(element);
    });

    // on the "Find Us" button click, clear the page and display the about page
    aboutButton.addEventListener('click', () => {
        clearContent(element);
        renderAboutPage(element);
    });
}

export { renderLandingPage };
