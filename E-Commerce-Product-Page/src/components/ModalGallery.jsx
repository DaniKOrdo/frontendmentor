import { getPreviousImage, getNextImage } from '../utils/getImages';
import { IconClose, IconNext } from '../utils/icons';

export default function ModalGallery({ currentImage, images, closeModal, handleThumbnailClick }) {
  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center w-screen gap-8 bg-black bg-opacity-75'>
      <div className="w-[550px] flex justify-end">
        <button
          className='w-6 h-6 ml-auto text-white cursor-pointer'
          onClick={closeModal}
        >
          <IconClose />
        </button>
      </div>

      <div className="relative flex px-12">
        <button
          className="absolute flex items-center justify-center w-16 h-16 transform rotate-180 bg-white rounded-full left-4 top-[45%] text-white"
          onClick={() => handleThumbnailClick(getPreviousImage({ images, currentImage }))}
        >
          <IconNext />
        </button>
        <img src={`${currentImage}.jpg`} alt='Sneakers Image' className="w-[550px] rounded-2xl" />
        <button
          className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full right-4 top-[45%] text-white"
          onClick={() => handleThumbnailClick(getNextImage({ images, currentImage }))}
        >
          <IconNext />
        </button>
      </div>

      <div className='flex justify-between gap-4 max-w-[600px] px-12'>
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
    </div>
  );
}