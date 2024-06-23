import React, { useState } from 'react';
import './pricingAndStyles.css';

const PricingMenu = () => {
  const [activeMenu, setActiveMenu] = useState('adultMenu');

  const menuItems = [
    {
      id: 'adultMenu',
      title: 'Prices for Men',
      items: [
        {
          title: 'Haircut & Styles',
          price: '£35-55',
          description:
            'Utilization of clippers and scissors (including texturizing shears), optional shaving around the hair edges and optional pomade application.',
        },
        {
          title: 'Haircut & Beard Trim',
          price: '$45-65',
          description:
            'A haircut service is performed followed by a beard trim with utilization of clippers and or shears.',
        },
        {
          title: 'Skin Fade',
          price: '£35-55',
          description:
            'From low tapers to high fades, we give you our closest, cleanest and long lasting skin fades with state of the art instruments.',
        },
        {
          title: 'Haircut & Shave',
          price: '£75-90',
          description:
            'Treat yourself with both a haircut and shave service experience with your favorite professional.',
        },
        {
          title: 'Head Shave',
          price: '£35-55',
          description:
            'Two hot towels, hot lather, and gentle straight-edge razor shave around the scalp, lime aftershave & balm is then applied.',
        },
        {
          title: 'Father & Son Haircut',
          price: '£75-85',
          description:
            'Experience the tradition of fresh haircut service for you and your son. We recommend scheduling this combination service in advance to allow availability.',
        },

        // Add more items as needed
      ],
    },
    {
      id: 'kidsMenu',
      title: 'Prices for Kids',
      items: [
        {
          title: 'Basic Haircut',
          price: '£15-25',
          description:
            'Simple haircut using clippers and scissors, suitable for children of all ages.',
        },
        {
          title: "Kid's Fade",
          price: '£20-30',
          description:
            'Customized fade haircut designed specifically for children, ranging from low to high fades.',
        },
        {
          title: 'Buzz Cut',
          price: '£10-15',
          description:
            'Quick and easy buzz cut using clippers, ideal for children who prefer shorter hair.',
        },
        {
          title: 'Designs & Patterns',
          price: '£5-15 extra',
          description:
            "Add creative designs or patterns to your child's haircut for an extra fee. Consult with our stylists for available options.",
        },
        {
          title: 'Haircut & Styling',
          price: '£20-30',
          description:
            'Haircut followed by basic styling, including combing and applying kid-friendly hair products.',
        },
        {
          title: 'Head Shave',
          price: '£10-20',
          description:
            'Gentle straight-edge razor shave around the scalp for a clean and refreshed look, suitable for children.',
        },

        // Add more items as needed
      ],
    },
  ];

  const handleClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div data-aos="slide-right" data-aos-duration="1500" className="pricing">
      <div className="wrapper">
        {/* <div className="menu-title">
          <h2 className="menu-header">Services</h2>
        </div> */}
        <div className="buttons-container">
          {menuItems.map((menu) => (
            <div key={menu.id} className="pricing-container">
              <div
                className={`${
                  activeMenu === menu.id
                    ? 'pricing-button-active'
                    : 'pricing-button'
                }`}
                onClick={() => handleClick(menu.id)}
              >
                {menu.title}
              </div>
            </div>
          ))}
        </div>

        {menuItems.map((menu) => (
          <div
            key={menu.id}
            className={`menu ${
              activeMenu === menu.id ? 'menu--is-visible' : ''
            }`}
          >
            {menu.items.map((item, index) => (
              <div key={index} className="item">
                <div className="item__header">
                  <h3 className="item__title">{item.title}</h3>
                  <span className="item__dots"></span>
                  <span className="item__price">{item.price}</span>
                </div>
                <p className="item__description">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingMenu;
