import { useState } from 'react';
import ModalGallery from './ModalGallery';

const images = [
  { id: 'image-product-1', alt: 'Sneakers Image Front', src: 'image-product-1.jpg' },
  { id: 'image-product-2', alt: 'Sneakers Image Back', src: 'image-product-2.jpg' },
  { id: 'image-product-3', alt: 'Sneakers Image Right Side', src: 'image-product-3.jpg' },
  { id: 'image-product-4', alt: 'Sneakers Image Left Side', src: 'image-product-4.jpg' },
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState('image-product-1');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <aside className='flex flex-col gap-8 px-16 py-20 md:px-16 md:py-20'>
      <img
        className='cursor-pointer rounded-2xl'
        src={`${currentImage}.jpg`}
        alt="Sneakers Image"
        onClick={openModal}
      />
      <div className='flex justify-between gap-4'>
        {images.map(({ id, src, alt }) => (
          <div key={id} className={`bg-white w-1/5 rounded-xl ${currentImage === id && 'ring-2 ring-orange-400'}`}>
            <img
              src={src}
              alt={alt}
              className={` rounded-xl cursor-pointer ${currentImage === id
                ? 'opacity-50 '
                : 'hover:opacity-60'
                }`}
              onClick={() => handleThumbnailClick(id)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && <ModalGallery currentImage={currentImage} images={images} closeModal={closeModal} handleThumbnailClick={handleThumbnailClick} />}

    </aside>
  );
}