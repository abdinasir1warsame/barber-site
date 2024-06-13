import React from 'react';
import './products.css';

const Products = () => {
  return (
    <div>
      <div className="col-sm-12">
        <div className="title-box3 ">
          <h3 id="products" className="title-a">
            Premium Grooming Essentials
          </h3>
          <p className="subtitle-a">
            From Beard Care to Styling Essentials: Discover Quality Products to
            Enhance Your Daily Routine and Elevate Your Look!
          </p>
          <div className="line-mf"></div>
        </div>
      </div>

      <div id="products" className="displaybox">
        <div className="roll">
          <div className="dis dis1">
            <div className="distopwrap">
              <div className="dislogo dislogo1"></div>
              <div className="disdis">
                <strong className="company-name">WARSAME'S </strong> Men's x
                Beard Oil
              </div>
            </div>
            <div className="disprice">$129.95</div>
            <button className="disbut">
              <i className="fa fa-shopping-cart faspace"></i> AVAILABLE IN STORE
            </button>
          </div>
        </div>

        <div className="roll">
          <div className="dis dis2">
            <div className="distopwrap">
              <div className="dislogo dislogo1"></div>
              <div className="disdis">
                <strong className="company-name">WARSAME'S </strong> Men's x
                Beard Oil
              </div>
            </div>
            <div className="disprice">$129.95</div>
            <button className="disbut">
              <i className="fa fa-shopping-cart faspace"></i> AVAILABLE IN STORE
            </button>
          </div>
        </div>

        <div className="roll">
          <div className="dis dis3">
            <div className="distopwrap">
              <div className="dislogo dislogo1"></div>
              <div className="disdis">
                <strong className="company-name">WARSAME'S </strong> Men's x
                Clippers
              </div>
            </div>
            <div className="disprice">$129.95</div>
            <button className="disbut">
              <i className="fa fa-shopping-cart faspace"></i> AVAILABLE IN STORE
            </button>
          </div>
        </div>

        <div className="roll">
          <div className="dis dis4">
            <div className="distopwrap">
              <div className="dislogo dislogo1"></div>
              <div className="disdis">
                <strong className="company-name">WARSAME'S </strong> Men's x
                Hair Gel
              </div>
            </div>
            <div className="disprice">$129.95</div>
            <button className="disbut">
              <i className="fa fa-shopping-cart faspace"></i> AVAILABLE IN STORE
            </button>
          </div>
        </div>

        <div className="roll">
          <div className="dis dis5">
            <div className="distopwrap">
              <div className="dislogo dislogo1"></div>
              <div className="disdis">
                <strong className="company-name">WARSAME'S </strong> Men's x
                Sponge
              </div>
            </div>
            <div className="disprice">$129.95</div>
            <button className="disbut">
              <i className="fa fa-shopping-cart faspace"></i> AVAILABLE IN STORE
            </button>
          </div>
        </div>

        <div className="roll">
          <div className="dis dis6">
            <div className="distopwrap">
              <div className="dislogo dislogo1"></div>
              <div className="disdis">
                <strong className="company-name">WARSAME'S </strong> Men's x
                Brush Set
              </div>
            </div>
            <div className="disprice">$129.95</div>
            <button className="disbut">
              <i className="fa fa-shopping-cart faspace"></i> AVAILABLE IN STORE
            </button>
          </div>
        </div>
      </div>

      <div className="section-sep2"></div>
    </div>
  );
};

export default Products;
