import { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const renderItems = (currentIndex: number, items: any[], action: any) => {
  const startIndex = (currentIndex - 1 + items.length) % items.length;
  const endIndex = (currentIndex + 1) % items.length;


  return items.slice(startIndex, endIndex + 1).map((item) => (
    <button
      onClick={() => action('category', item.value)}
      type="button"
      className="
    text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800
    hover:bg-gradient-to-br
    focus:ring-4 focus:outline-none focus:ring-fuchsia-300
    font-xs rounded-lg text-sm px-2 py-1 text-center
    w-full
    "
    >
      {item.text}
    </button>
  ))
};

const Carrousel = ({ items, action }: { items: any[], action: any }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  return (
    <div className="flex items-center justify-center h-full max-w-[400px] mx-auto">
      <button type="button" className={`mx-2 ${currentIndex === 1 && 'hover:cursor-not-allowed text-gray-300'}`} onClick={prevImage} disabled={currentIndex === 1}>
        <FaArrowAltCircleLeft />
      </button>
      <div className="flex w-full justify-around h-full gap-2">{renderItems(currentIndex, items, action)}</div>
      <button type="button" className={`mx-2 ${currentIndex === items.length - 2 && 'hover:cursor-not-allowed text-gray-300'}`} onClick={nextImage} disabled={currentIndex === items.length - 2}>
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
}

export default Carrousel