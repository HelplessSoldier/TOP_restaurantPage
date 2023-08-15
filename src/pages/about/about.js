import './about.css'
import { createElement } from '../../modulesAndFunctions/createElement';

import { 
    aboutHeader, 
    aPHeader, 
    aPBody, 
    ePHeader,
    ePBody,
    algolHeader,
    algolBody,
    mapTag,
    cIHeader,
    aMail,
    qECode,
} from './aboutTextBlocks';

function renderAboutPage(element) {
    const aboutWrapper = createElement('div', { id: 'aboutWrapper' }, '');
    const mapContainer = createElement('div', { id: 'mapContainer' }, '');
    const mapImage = require('../../assets/images/map.jpg');
    const mapImageElement = createElement('img', { id: 'map', src: mapImage }, '');
    const locationTextContainer = createElement('div', { id: 'locationTextContainer' }, '');

    const aPContainer = createElement('div', { id: 'aPContainer', class: "locationContainer" }, '');
    const aPHeaderElement = createElement('h2', { id: 'aPHeader', class: 'locationHeader' }, aPHeader);
    const aPBodyElement = createElement('p', { id: 'aPBody', class: 'locationBody' }, aPBody);
    aPContainer.append(aPHeaderElement, aPBodyElement);

    const ePContainer = createElement('div', { id: 'ePContainer', class: "locationContainer" }, '');
    const ePHeaderElement = createElement('h2', { id: 'ePHeader', class: 'locationHeader' }, ePHeader);
    const ePBodyElement = createElement('p', { id: 'ePBody', class: 'locationBody' }, ePBody);
    ePContainer.append(ePHeaderElement, ePBodyElement);

    const algolContainer = createElement('div', { id: 'algolContainer', class: "locationContainer" }, '');
    const algolHeaderElement = createElement('h2', { id: 'algolHeader', class: 'locationHeader' }, algolHeader);
    const algolBodyElement = createElement('p', { id: 'algolBody', class: 'locationBody' }, algolBody);
    algolContainer.append(algolHeaderElement, algolBodyElement);

    locationTextContainer.append(
        aPContainer,
        ePContainer,
        algolContainer
    );

    mapContainer.append(
        mapImageElement,
        locationTextContainer
    );
 
    const mapTagElement = createElement('h1', { id: 'mapTag' }, mapTag);
    const contactContainer = createElement('div', { id: 'contactContainer' }, '');
    const cIHeaderElement = createElement('h3', { id: 'cIHeader' }, cIHeader);
    const aMailElement = createElement('p', { id: 'aMail' }, aMail);
    const qECodeElement = createElement('p', { id: 'qECode' }, qECode);
    const locationsContainer = createElement('div', { id: 'locationsContainer' }, '');

    contactContainer.append(
        cIHeaderElement,
        aMailElement,
        qECodeElement
    )

    locationsContainer.append(
        mapTagElement,
        mapContainer
    )

    aboutWrapper.append(
        locationsContainer,
        contactContainer
    );

    element.append(aboutWrapper);
}

export { renderAboutPage }