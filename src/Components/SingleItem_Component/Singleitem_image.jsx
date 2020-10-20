import React from "react";
import {} from "react-bootstrap";
import big from '../../asserts/sss1.webp';
// import sss2 from '../../asserts/sss2.webp';
// import sss3 from '../../asserts/sss3.webp';
// import sss4 from '../../asserts/sss4.webp'
import './SingleItem_image.css';

const SingleItem_image = (props) => {
    return (
        <div>
            <div className="container" style={{maxWidth: '1260px', marginTop: '100px'}}>
                <div className="row" style={{marginTop: '15px'}}>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">

                                        <img
                                            src={big}
                                            className="selected bigItem"
                                            alt="image"
                                            style={{display: 'inline', width: '138%', height: '567px'}}
                                        />

                            </div>
                            {/*<div className="col-3" style={{left: '88px'}}>*/}
                            {/*    <div>*/}
                            {/*        <div className="raw">*/}
                            {/*            <img*/}
                            {/*                src={sss2}*/}
                            {/*                className="img-fluid smallItem smallItem1"*/}
                            {/*                alt="image"*/}
                            {/*            />*/}
                            {/*            <img*/}
                            {/*                src={sss3}*/}
                            {/*                className="img-fluid smallItem smallItem1"*/}
                            {/*                alt="image"*/}
                            {/*            />*/}
                            {/*            <img*/}
                            {/*                src={sss4}*/}
                            {/*                className="img-fluid smallItem"*/}
                            {/*                alt="image"*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleItem_image;
