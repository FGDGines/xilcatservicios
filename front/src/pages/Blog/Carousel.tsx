import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import CarLogo from '../../assets/car_logo.png'
import RentLogo from '../../assets/rent_logo.png'
import NewsLogo from '../../assets/news_logo.png'
import CommunityLogo from '../../assets/community_logo.png'
import FormationLogo from '../../assets/formmation_logo.png'
import AllLogo from '../../assets/all_logo.png'

const Carousel = ({ handleCategorySelection }: { handleCategorySelection: any }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const categories = [
        {
            text: 'Todos',
            icon: AllLogo,
            action: () => handleCategorySelection('ALL')
        },
        {
            text: 'Motor',
            icon: CarLogo,
            action: () => handleCategorySelection('SELLING')
        },
        {
            text: 'Alquiler',
            icon: RentLogo,
            action: () => handleCategorySelection('RENT')
        },
        {
            text: 'Comunidad',
            icon: CommunityLogo,
            action: () => handleCategorySelection('COMMUNITY')
        },
        {
            text: 'Noticias',
            icon: NewsLogo,
            action: () => handleCategorySelection('NEWS')
        },
        {
            text: 'Formacion',
            icon: FormationLogo,
            action: () => handleCategorySelection('FORMATION')
        }
    ];

    const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
    const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));

    const renderImages = () => {
        // const startIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
        // const endIndex =
        //   currentIndex === categories.length - 1 ? 0 : currentIndex + 2;

        const startIndex = (currentIndex - 1 + categories.length) % categories.length;
        const endIndex = (currentIndex + 1) % categories.length;


        return categories.slice(startIndex, endIndex + 1).map((image) => (
            <button
                onClick={() => image.action()}
                className={`px-1 sm:px-2 md:px-4 rounded flex flex-col jutify-center transition-all px-2 py-1 items-center border-shadow-lg hover:shadow-lg`}
                key={image.text}
            >
                <img src={image.icon} />
                {image.text}
            </button>
        ));
    };

    return (
        <div className="flex items-center justify-center h-full max-w-[400px] mx-auto">
            <button className={`text-2xl mx-2 ${currentIndex === 1 && 'hover:cursor-not-allowed text-gray-300'}`} onClick={prevImage} disabled={currentIndex === 1}>
                <FaArrowAltCircleLeft />
            </button>
            <div className="flex w-full justify-around h-full">{renderImages()}</div>
            <button className={`text-2xl mx-2 ${currentIndex === categories.length - 2 && 'hover:cursor-not-allowed text-gray-300'}`} onClick={nextImage} disabled={currentIndex === categories.length - 2}>
                <FaArrowAltCircleRight />
            </button>
        </div>
    );
};

export default Carousel