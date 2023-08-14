import './about.css'
import { createElement } from '../../modulesAndFunctions/createElement';
import { clearContent } from '../../modulesAndFunctions/clearpage';

import { 
    aboutLogoText,
    aboutHeader, 
    aboutBody, 
    aPHeader, 
    aPBody, 
    ePHeader,
    ePBody,
    algolHeader,
    algolBody,
    locationsEnd,
    mapTag,
    cIHeader,
    aMail,
    qECode,
} from './aboutTextBlocks';

function renderAboutPage(element) {
    const aboutWrapper = createElement('div', { id: 'aboutWrapper' }, '');

    const headerElement = createElement('h1', { id: 'aboutHeader' }, aboutHeader);
    const aboutBodyElement = createElement('p', { id: 'aboutBody' }, aboutBody);
    const aPHeaderElement = createElement('h2', { id: 'aPHeader' }, aPHeader);
    const aPBodyElement = createElement('p', { id: 'aPBody' }, aPBody);
    const ePHeaderElement = createElement('h2', { id: 'ePHeader' }, ePHeader);
    const ePBodyElement = createElement('p', { id: 'ePBody' }, ePBody);
    const algolHeaderElement = createElement('h2', { id: 'algolHeader' }, algolHeader);
    const algolBodyElement = createElement('p', { id: 'algolBody' }, algolBody);
    const locationsEndElement = createElement('p', { id: 'locationsEnd' }, locationsEnd);
    const mapTagElement = createElement('p', { id: 'mapTag' }, mapTag);
    const cIHeaderElement = createElement('h2', { id: 'cIHeader' }, cIHeader);
    const aMailElement = createElement('p', { id: 'aMail' }, aMail);
    const qECodeElement = createElement('p', { id: 'qECode' }, qECode);

    aboutWrapper.append(
        headerElement, 
        aboutBodyElement,
        aPHeaderElement,
        aPBodyElement,
        ePHeaderElement,
        ePBodyElement,
        algolHeaderElement,
        algolBodyElement,
        locationsEndElement,
        mapTagElement,
        cIHeaderElement,
        aMailElement,
        qECodeElement
    );
    element.append(aboutWrapper);
}

export { renderAboutPage }