import React from 'react';
import './bookings.css';
const Bookings = () => {
  const products = [
    { name: 'General cleaning', price: 55, add: true },
    {
      name: 'Laundry package (for 2 pers.)',
      price: 13,
      add: false,
      dayPrice: false,
    },
    { name: 'Highchair (per day)', price: 3, add: false, dayPrice: true },
    { name: 'Cot (per day)', price: 3, add: false, dayPrice: true },
    { name: 'Deposit', price: 100, add: false, dayPrice: false },
    {
      name: 'Laundry package (for 3rd and 4th pers.)',
      price: 19,
      add: false,
      dayPrice: false,
    },
    { name: 'Booking', price: 15, add: false, dayPrice: false },
  ];

  const Input = ({ value, onChange, onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <input
          className="input"
          type="number"
          min="1"
          max="90"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  };

  class Price extends React.Component {
    state = {
      products,
      sum: 55,
      stayDays: 7,
    };

    onInputChange = (e) => {
      let stayDays = e.target.value;
      this.setState({ stayDays });
      this.updateSum(stayDays);
    };

    onInputSubmit = (e) => {
      e.preventDefault();
    };

    changeAdd = (index) => {
      const { products } = this.state;
      products[index].add = !products[index].add;
      this.setState({
        products,
      });
    };

    updateSum = (stayDays) => {
      const { products } = this.state;
      let allItemsSum = 0;
      let addPrice;

      {
        products.forEach((product) => {
          addPrice = product.price * (product.dayPrice ? stayDays : 1);
          if (product.add) {
            allItemsSum += addPrice;
          }
        });
      }

      this.setState({
        sum: allItemsSum,
      });
    };

    handleClick = (e) => {
      const { index } = e.currentTarget.dataset;
      const { stayDays } = this.state;

      this.changeAdd(index);
      this.updateSum(stayDays);
    };

    render() {
      const { products, sum, stayDays } = this.state;
      return (
        <div className="card">
          <h2>Additional services</h2>
          <div className="wrap">
            <div className="left">
              <img src="https://github.com/OlgaKoplik/CodePen/blob/master/bg1.png?raw=true" alt="" />
              <form>
                <label className="prev__input form-label" htmlFor="days">
                  Stay time:
                </label>
                <Input
                  value={stayDays}
                  onChange={this.onInputChange}
                  onSubmit={this.onInputSubmit}
                  id="days"
                />
                <label className="after__input form-label" htmlFor="days">
                  Days
                </label>
              </form>
            </div>
            <div className="right">
              <ul>
                {products.map((product, index) => (
                  <li
                    data-index={index}
                    onClick={this.handleClick}
                    className="product price__add"
                  >
                    {product.add ? (
                      <i className="fas fa-check-circle icon icon-delete delete"></i>
                    ) : (
                      <i className="fas fa-plus-circle icon icon-add add"></i>
                    )}
                    <div className="price__descr">
                      <div
                        className={
                          'price__item' + (product.dayPrice ? ' day-price' : '')
                        }
                      >
                        {product.name}
                      </div>
                    </div>

                    <div
                      className={
                        'price' + (product.dayPrice ? ' day-price' : '')
                      }
                    >
                      € {product.price}.<sup>00</sup>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="price__summe">
                <h3>total:</h3>
                <span className="summe-span">
                  € {sum}.<sup>00</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};
export default Bookings;
