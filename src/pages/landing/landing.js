import './landing.css';
import { createElement } from '../../modulesAndFunctions/createElement';
import { clearContent } from '../../modulesAndFunctions/clearpage';
import { renderMenuPage } from '../menu/menu';
import { renderAboutPage } from '../about/about';

function renderLandingPage(element) {
    const aboutButtonText = 'Find Us';
    const menuButtonText = 'Main Menu';
    const restaurantLogoText = "Phish n' Chips";
    const weekdaysHoursText = 'Mon-Fri: 6:30am - 10:00pm';
    const weekendHoursText = 'Sat-Sun: 12:00pm - 10:00pm';
    const hookText = 'Feeding Your Cravings, One Byte at a Time.';
    const bgImageAttributionText = 'Image by Sueda Dilli on pexels.';

    const landingWrapper = createElement('div', { id: 'landingWrapper', loading: 'lazy' }, '');

    const buttonContainer = createElement('div', { id: 'buttonContainer' });
    const aboutButton = createElement('button', { id: 'aboutButton' }, aboutButtonText);
    const menuButton = createElement('button', { id: 'menuButton' }, menuButtonText);
    buttonContainer.append(menuButton, aboutButton);

    const logoContainer = createElement('div', { id: 'logoContainer' });
    const restaurantLogo = createElement('h1', { id: 'restaurantLogo' }, restaurantLogoText);
    logoContainer.append(restaurantLogo, buttonContainer);

    const openHours = createElement('p', { id: 'openHours' });
    const weekdaysHours = createElement('span', {}, weekdaysHoursText);
    const weekendHours = createElement('span', {}, weekendHoursText);
    openHours.append(weekdaysHours, weekendHours);

    const hookContainer = createElement('div', { id: 'hookContainer' });
    const hook = createElement('p', { id: 'hook' }, hookText);
    const bgImageAttribution = createElement('span', { id: 'bgImageAttribution' }, bgImageAttributionText);
    hookContainer.append(hook, openHours, bgImageAttribution);

    landingWrapper.append(logoContainer, hookContainer);
    element.append(landingWrapper);

    menuButton.addEventListener('click', () => {
        clearContent(element);
        renderMenuPage(element);
    });

    aboutButton.addEventListener('click', () => {
        clearContent(element);
        renderAboutPage(element);
    });
}

export { renderLandingPage };
