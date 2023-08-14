import { createElement } from "../../../modulesAndFunctions/createElement";

function createMenuElement( name, description, imagePath, price ) {

    const textContainer = createElement('div', {class: 'menuItemTextContainer'}, '')
    const itemContainer = createElement('div', { id: 'menuItemContainer' }, '');
    
    const itemTitle = createElement('h3', { id: 'menuTitle' }, name);
    const itemDescription = createElement('p', { id: 'menuDescription' }, description);
    const itemPrice = createElement('p', { id: 'menuPrice'}, price)

    const itemImage = createElement('img', { 
        id: 'menuItemImage', src: imagePath, alt: `image of ${name}`
    }, '');

    textContainer.append(itemTitle, itemDescription, itemPrice);
    itemContainer.append(itemImage, textContainer);
    
    return itemContainer;
}

export { createMenuElement };
