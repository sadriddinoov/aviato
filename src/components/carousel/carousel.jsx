import { useTranslation } from 'react-i18next';
import './carousel.scss'

import { useState } from 'react';
import { Link } from 'react-router-dom';
const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const {t} = useTranslation()
  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />

      <div className="carousel_div">
        <h3 className="carousel_heading">
            {t('sidebar.products')}
        </h3>

        <h2 className="carousel_text">
            {t('sidebar.beauty')}
        </h2>

        <Link className='carousel_btn' to={'/shop'}>{t('sidebar.shop')}</Link>
      </div>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};
export default Carousel;