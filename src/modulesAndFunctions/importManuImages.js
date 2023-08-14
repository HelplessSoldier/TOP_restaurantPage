export const importMenuImages = (context) => {
    const images = {};
    context.keys().forEach(key => {
        const imageName = key.replace('./', '');
        images[imageName] = context(key);
    });
    return images;
};



