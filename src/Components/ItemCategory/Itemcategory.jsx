import React from "react";
import {} from "react-bootstrap";
import './Itemcategory.css';
import item from "../../asserts/sss1.webp";


const ItemCategory = (props) => {
    return (
        <div className="col-5 blockStyle">
            <div className="card-deck cardStyle" >
                <div className="card">
                    <img src={item} className="card-img-top" alt="..."/>
                    <div className="card-body row">
                        <a
                            href="#"
                            style={{textDecoration: 'none', color: 'black'}}
                        >
                            <h7 className="card-title col-9">Black Dress</h7>
                        </a
                        >

                        <p className="card-text">
                            <small className="text-muted">$ 7.28</small>
                        </p>
                        <div className="col-12" style={{textAlign: 'center'}}>
                            <button
                                style=
                      {{width: '185px',
                      backgroundColor: '#ffab00',
                      fontWeight: 500}}

                                type="button"
                                className="btn btn-warning"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCategory;
