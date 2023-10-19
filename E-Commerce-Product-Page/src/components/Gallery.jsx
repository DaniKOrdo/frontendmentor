import { useState } from 'react';
import ModalGallery from './ModalGallery';
import { images, getPreviousImage, getNextImage } from '../utils/getImages';

import { IconNext } from '../utils/icons';

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
    <aside className='flex flex-col gap-8 md:px-16 md:py-20'>
      <div className='relative md:hidden'>
        <button
          className="absolute flex items-center justify-center w-14 h-14 transform rotate-180 bg-white rounded-full left-4 top-[45%] text-white"
          onClick={() => handleThumbnailClick(getPreviousImage({ currentImage }))}
        >
          <IconNext />
        </button>
        <img
          className='pointer-events-none select-none'
          src={`${currentImage}.jpg`}
          alt="Sneakers Image"
        />
        <button
          className="absolute flex items-center justify-center w-14 h-14 bg-white rounded-full right-4 top-[45%] text-white"
          onClick={() => handleThumbnailClick(getNextImage({ currentImage }))}
        >
          <IconNext />
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
              className={`select-none rounded-xl cursor-pointer ${currentImage === id
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