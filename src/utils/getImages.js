export const images = [
    { id: 'image-product-1', src: 'image-product-1.jpg', alt: 'Sneakers Image Front' },
    { id: 'image-product-2', src: 'image-product-2.jpg', alt: 'Sneakers Image Back' },
    { id: 'image-product-3', src: 'image-product-3.jpg', alt: 'Sneakers Image Right Side' },
    { id: 'image-product-4', src: 'image-product-4.jpg', alt: 'Sneakers Image Left Side' },
];

export const getPreviousImage = ({ currentImage }) => {
    const currentIndex = images.findIndex(image => image.id === currentImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    return images[previousIndex].id;
};

export const getNextImage = ({ currentImage }) => {
    const currentIndex = images.findIndex(image => image.id === currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    return images[nextIndex].id;
};