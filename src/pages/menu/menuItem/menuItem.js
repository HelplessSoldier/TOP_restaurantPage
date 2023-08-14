import { createElement } from "../../../modulesAndFunctions/createElement";

function createMenuElement( name, description, imagePath ) {

    const itemContainer = createElement('div', { id: 'menuItemContainer' }, '');
    const itemTitle = createElement('h3', { id: 'menuTitle' }, name);
    const itemDescription = createElement('p', { id: 'menuDescription' }, description);
    const itemImage = createElement('img', { 
        id: 'menuItemImage', src: imagePath, alt: `image of ${name}`
    }, '');

    itemContainer.append(itemImage, itemTitle, itemDescription);
    
    return itemContainer;
}

export { createMenuElement };
