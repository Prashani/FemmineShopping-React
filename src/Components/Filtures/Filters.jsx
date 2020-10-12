import React from "react";
import {} from "react-bootstrap";
import './Filters.css';


const Filters = (props) => {
  return (
    <div className="row">
      <div className="col-2">
        <div className="filter_name">
          <h6 style={{fontWeight: '700'}}>FILTERS</h6>
        </div>

        <div className="col1-border">
          <div className="row fullFilter">
            <h7 class="filter-title" style={{fontWeight: '700'}}>SHIPPING</h7>
          </div>
          <label className="freeShipping">
            <input type="radio" name="radio-button" value="css" />
            <p style={{fontSize: '14px'}}>Free Shipping</p>
          </label>

          <label style={{marginLeft: '25px', marginBottom: '-15px'}}>
            <input type="radio" name="radio-button" value="no" />
            <p style={{fontSize: '14px'}}>Paid Shipping</p>
          </label>

          <label style={{marginLeft: '25px'}}>
            <input type="radio" name="radio-button" value="no" />
            <p style={{fontSize: '14px'}}>Both ( Free & Paid )</p>
          </label>

          <hr style={{marginTop: '5px'}} />

          <div className="row" style={{marginLeft: '18px'}}>
            <h7 class="filter-title" style={{fontWeight: '700'}}>

              BARNDS
            </h7>
          </div>
          <div className="row" style={{marginTop: '10px'}}>
            <section className="content">
              <ul className="list" style={{listStyleType: 'none'}}>
                <li className="list__item">
                  <label className="label--checkbox">
                    <input type="checkbox" className="checkbox" />
                    Tokyo Talkies
                  </label>
                </li>
                <li className="list__item">
                  <label className="label--checkbox">
                    <input type="checkbox" className="checkbox" />
                    Femella
                  </label>
                </li>
                <li className="list__item">
                  <label className="label--checkbox">
                    <input type="checkbox" className="checkbox" />
                    Monte Carlo
                  </label>
                </li>
                <li className="list__item">
                  <label className="label--checkbox">
                    <input type="checkbox" className="checkbox" />
                    Puma
                  </label>
                </li>
                <li className="list__item">
                  <label className="label--checkbox">
                    <input type="checkbox" className="checkbox" />
                    DressBerry
                  </label>
                </li>
                <li className="list__item">
                  <label className="label--checkbox">
                    <input type="checkbox" className="checkbox" />
                    Clora Creation
                  </label>
                </li>
              </ul>
            </section>
          </div>

          <hr style={{marginTop: '5px'}}/>

          <div className="row" style={{marginLeft: '18px'}}>
            <h7 className="filter-title" style={{fontWeight: '700'}}>

              COLOURS
            </h7>
          </div>

          <div className="row" style={{marginTop: '10px'}}>
            <label className="container" style={{marginLeft: '40px'}}>
              <p style={{marginLeft: '18px', marginBottom: '-8px'}}>Blue</p>
              <input type="checkbox" />
              <span className="checkmark" style={{backgroundColor: 'blue'}}></span>
            </label>
            <label className="container" style={{marginLeft: '40px'}}>
              <p style={{marginLeft: '18px', marginBottom: '-8px'}}>Yellow</p>
              <input type="checkbox" />
              <span className="checkmark" style={{backgroundColor: 'yellow'}}></span>
            </label>
            <label className="container" style={{marginLeft: '40px'}}>
              <p style={{marginLeft: '18px', marginBottom: '-8px'}}>Red</p>
              <input type="checkbox" />
              <span className= "checkmark" style={{backgroundColor: 'red'}}></span>
            </label>
            <label className="container" style={{marginLeft: '40px'}}>
              <p style={{marginLeft: '18px', marginBottom: '-8px'}}>Black</p>
              <input type="checkbox" />
              <span className="checkmark" style={{backgroundColor: 'black'}}></span>
            </label>
            <label className="container" style={{marginLeft: '40px'}}>
              <p style={{marginLeft: '18px', marginBottom: '-8px'}}>Purple</p>
              <input type="checkbox" />
              <span className="checkmark" style={{backgroundColor: 'purple'}}></span>
            </label>
            <label className="container" style={{marginLeft: '40px'}}>
              <p style={{marginLeft: '18px', marginBottom: '-8px'}}>Green</p>
              <input type="checkbox" />
              <span className="checkmark" style={{backgroundColor: 'green'}}></span>
            </label>
            <label className="container" style={{marginLeft: '40px'}}>
              <p style={{marginLeft: '18px', marginBottom: '-8px'}}>Pink</p>
              <input type="checkbox" />
              <span
                className="checkmark"
                style={{backgroundColor: 'deeppink'}}
              ></span>
            </label>
          </div>
          <hr style={{marginLeft: '12px'}} />

          <div className="row" style={{marginLeft: '18px'}}>
            <h7 className="filter-title" style={{fontWeight: '700'}}>

              PRICE
            </h7>
          </div>

          <form style={{marginLeft: '-4px'}}>
            <div className="form-row minmaxGroup">
              <div className="col">
                <input type="number" className="form-control" placeholder="MIN" />
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  style={{width: '75px'}}
                  placeholder="MAX"
                />
              </div>
            </div>
          </form>

          <hr style={{marginTop: '27px'}} />

          <div className="row">
            <button type="button" className="btn ResetBtn">
              RESET
            </button>
          </div>
          <div className="row">
            <button type="button" className="btn applyBtn">
              APPLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
