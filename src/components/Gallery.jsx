import { useState } from 'react';

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState('image-product-1');

  const thumbnails = [
    { id: 'image-product-1', alt: 'Sneakers Image Front', src: 'image-product-1-thumbnail.jpg' },
    { id: 'image-product-2', alt: 'Sneakers Image Back', src: 'image-product-2-thumbnail.jpg' },
    { id: 'image-product-3', alt: 'Sneakers Image Right Side', src: 'image-product-3-thumbnail.jpg' },
    { id: 'image-product-4', alt: 'Sneakers Image Left Side', src: 'image-product-4-thumbnail.jpg' },
  ];

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <aside className='flex flex-col gap-8 p-20'>
      <img className='rounded-2xl' src={`${currentImage}.jpg`} alt="Sneakers Image" />
      <div className='flex justify-between'>
        {thumbnails.map(({id, src, alt}) => (
          <img
            key={id}
            src={src}
            alt={alt}
            className={`h-24 rounded-xl ${
              currentImage === id
                ? 'opacity-40 ring-2 ring-orange-400'
                : 'hover:opacity-60'
            }`}
            onClick={() => handleThumbnailClick(id)}
          />
        ))}
      </div>
    </aside>
  );
}
