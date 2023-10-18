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

  const getPreviousImage = () => {
    const currentIndex = images.findIndex(image => image.id === currentImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    return images[previousIndex].id;
  };

  const getNextImage = () => {
    const currentIndex = images.findIndex(image => image.id === currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    return images[nextIndex].id;
  };

  return (
    <aside className='flex flex-col gap-8 md:px-16 md:py-20'>
      <div className='relative md:hidden'>
        <button
          className="absolute flex items-center justify-center w-14 h-14 transform rotate-180 bg-white rounded-full left-4 top-[45%]"
          onClick={() => handleThumbnailClick(getPreviousImage())}
        >
          <img src="src/assets/icon-next.svg" alt='Back Icon' />
        </button>
        <img
          className=''
          src={`${currentImage}.jpg`}
          alt="Sneakers Image"
        />

        <button
          className="absolute flex items-center justify-center w-14 h-14 bg-white rounded-full right-4 top-[45%]"
          onClick={() => handleThumbnailClick(getNextImage())}
        >
          <img src="src/assets/icon-next.svg" alt='Next Icon' />
        </button>
      </div>

      <img
        className='hidden cursor-pointer rounded-2xl md:block'
        src={`${currentImage}.jpg`}
        alt="Sneakers Image"
        onClick={openModal}
      />
      <div className='justify-between hidden gap-4 md:flex'>
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