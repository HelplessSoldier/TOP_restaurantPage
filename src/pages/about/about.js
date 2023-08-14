import './about.css'
import { createElement } from '../../modulesAndFunctions/createElement';
import { clearContent } from '../../modulesAndFunctions/clearpage';

import { 
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
    qECode
} from './aboutTextBlocks';

function renderAboutPage(element) {

    const aboutWrapper = createElement('div', { id: 'aboutWrapper' }, '');

    const aboutLogo = createElement('h1', { id: 'menuLogo' }, aboutLogoText);

    element.append(aboutWrapper);
}

export { renderAboutPage }