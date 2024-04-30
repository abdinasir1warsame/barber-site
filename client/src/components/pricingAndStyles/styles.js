import React, { useEffect } from 'react';

import './pricingAndStyles.css';
import carrousel1 from '../../assets/carousel-images/person getting cut 3.webp';
import carrousel2 from '../../assets/carousel-images/person getting cut 4.webp';
import carrousel3 from '../../assets/carousel-images/person getting cut 5.webp';
import carrousel4 from '../../assets/carousel-images/person getting cut 6.webp';

function CarouselComponent() {
  useEffect(() => {
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel');
    const listItemDom = document.querySelector('.carousel .list');
    const thumbnailDOm = document.querySelector('.carousel .thumbnail');

    const showSlider = (type) => {
      const itemSlider = document.querySelector('.carousel .list .item');
      const itemThumbnail = document.querySelector(
        '.carousel .thumbnail .item'
      );

      if (type === 'next') {
        listItemDom.appendChild(itemSlider.cloneNode(true));
        thumbnailDOm.appendChild(itemThumbnail.cloneNode(true));
        carouselDom.classList.add('next');
      } else {
        const lastItemSlider = itemSlider[itemSlider.length - 1];
        const lastItemThumbnail = itemThumbnail[itemThumbnail.length - 1];
        listItemDom.insertBefore(
          lastItemSlider.cloneNode(true),
          listItemDom.firstChild
        );
        thumbnailDOm.insertBefore(
          lastItemThumbnail.cloneNode(true),
          thumbnailDOm.firstChild
        );
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runAutoRun);
      runAutoRun = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runAutoRun = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    nextDom.onclick = () => {
      showSlider('next');
    };

    prevDom.onclick = () => {
      showSlider('prev');
    };
  }, []);

  // Mocked data for carousel items
  const carouselItems = [
    { image: carrousel1, author: 'Blended to perfection', topic: 'Head Shave' },
    {
      image: carrousel2,
      author: 'Blended to perfection',
      topic: 'Straight Razor',
    },
    { image: carrousel3, author: 'Blended to perfection', topic: 'Beard trim' },
    { image: carrousel4, author: 'Blended to perfection', topic: 'Skin fade' },
  ];

  // Mocked data for thumbnail items
  const thumbnailItems = [
    { image: carrousel2, title: 'Name Slider', description: 'Description' },
    { image: carrousel3, title: 'Name Slider', description: 'Description' },
    { image: carrousel4, title: 'Name Slider', description: 'Description' },
    { image: carrousel1, title: 'Name Slider', description: 'Description' },
  ];

  return (
    <div className="carousel">
      <div className="list">
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
      <div className="thumbnail">
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
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <div className="time"></div>
    </div>
  );
}

export default CarouselComponent;
