export default function ModalGallery({ currentImage, images, closeModal, handleThumbnailClick }) {
  const currentIndex = images.findIndex((image) => image.id === currentImage);

  const prevImage = currentIndex > 0 ? images[currentIndex - 1] : images[images.length - 1];
  const nextImage = currentIndex < images.length - 1 ? images[currentIndex + 1] : images[0];

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center w-screen gap-8 bg-black bg-opacity-75'>
      <div className="w-[550px] flex justify-end">
        <button
          className='text-blue-500 cursor-pointer '
          onClick={closeModal}
        >
          <img src="src/assets/icon-close.svg" alt="Close Icon" className="w-6 ml-auto " />
        </button>
      </div>

      <div className="relative flex px-12">
        <button
          className="absolute flex items-center justify-center w-16 h-16 transform rotate-180 bg-white rounded-full left-4 top-[45%]"
          onClick={() => handleThumbnailClick(prevImage.id)}
        >
          <img src="src/assets/icon-next.svg" alt='Back Icon' />
        </button>
        <img src={`${currentImage}.jpg`} alt='Sneakers Image' className="w-[550px] rounded-2xl" />
        <button
          className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full right-4 top-[45%]"
          onClick={() => handleThumbnailClick(nextImage.id)}
        >
          <img src="src/assets/icon-next.svg" alt='Next Icon' />
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