import React, { useEffect, useRef } from 'react';
import './pricingAndStyles.css';
import carrousel1 from '../../assets/carousel-images/person getting cut 3.webp';
import carrousel2 from '../../assets/carousel-images/person getting cut 4.webp';
import carrousel3 from '../../assets/carousel-images/person getting cut 5.webp';
import carrousel4 from '../../assets/carousel-images/person getting cut 6.webp';

function CarouselComponent() {
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const listItemRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const runAutoRun = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runAutoRun);
    };
  }, []);

  const showSlider = (type) => {
    const itemSlider = listItemRef.current.querySelectorAll('.item');
    const itemThumbnail = thumbnailRef.current.querySelectorAll('.item');

    if (type === 'next') {
      listItemRef.current.appendChild(listItemRef.current.firstElementChild);
      thumbnailRef.current.appendChild(thumbnailRef.current.firstElementChild);
      carouselRef.current.classList.add('next');
    } else {
      listItemRef.current.insertBefore(
        listItemRef.current.lastElementChild,
        listItemRef.current.firstElementChild
      );
      thumbnailRef.current.insertBefore(
        thumbnailRef.current.lastElementChild,
        thumbnailRef.current.firstElementChild
      );
      carouselRef.current.classList.add('prev');
    }

    setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);
  };

  let runTimeOut;

  // Mocked data for carousel items
  const carouselItems = [
    { image: carrousel1, author: 'Blended to perfection', topic: 'Skin fade' },
    {
      image: carrousel2,
      author: 'Precision and sharpness with every stroke',
      topic: 'Straight Razor',
    },
    {
      image: carrousel3,
      author: 'Expert grooming for a well-defined look',
      topic: 'Beard trim',
    },
    {
      image: carrousel4,
      author: 'Smooth and clean for a bold statement',
      topic: 'Head Shave',
    },
  ];

  // Mocked data for thumbnail items
  const thumbnailItems = [
    { image: carrousel2, title: 'Straight Razor', description: 'Style 2' },
    { image: carrousel3, title: 'Beard trim', description: 'Style 3' },
    { image: carrousel4, title: 'Head Shave', description: 'Style 4' },
    { image: carrousel1, title: 'Skin fade', description: 'Style 1' },
  ];

  return (
    <div
      data-aos="slide-left"
      data-aos-duration="1500"
      className="styles-container"
    >
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listItemRef}>
          {/* Mapping carousel items */}
          {carouselItems.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.image} alt="" />
              <div className="content">
                <div className="author">{item.author}</div>
                <div className="topic">{item.topic}</div>
                <div className="buttons"></div>
              </div>
            </div>
          ))}
        </div>
        {/* thumbnail images */}
        <div className="thumbnail" ref={thumbnailRef}>
          {/* Mapping thumbnail items */}
          {thumbnailItems.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.image} alt="" />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="des">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        {/* arrows */}
        <div className="arrows">
          <button id="prev" ref={prevRef} onClick={() => showSlider('prev')}>
            &lt;
          </button>
          <button id="next" ref={nextRef} onClick={() => showSlider('next')}>
            &gt;
          </button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
}

export default CarouselComponent;
