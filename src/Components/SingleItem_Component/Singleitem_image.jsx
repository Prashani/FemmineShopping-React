import React from "react";
import {} from "react-bootstrap";
import big from '../../asserts/sss1.webp'
import './SingleItem_image.css';

const SingleItem_image = (props) => {
    return (
        <div>
            <div className="container" style={{maxWidth: '1260px', marginTop: '100px'}}>
                <div className="row" style={{marginTop: '15px'}}>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="previews">
                                    <div className="full">
                                        <img
                                            src={big}
                                            className="selected bigItem"
                                            alt="image"
                                            style={{display: 'inline', width: '138%', height: '567px'}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-3" style="left: 88px">
                                <div>
                                    <div className="raw">
                                        <a
                                            href="#"
                                            data-full="../assets/sss2.webp"
                                            className="singleImageHover"
                                        ><img
                                            src="../assets/sss2.webp"
                                            className="img-fluid smallItem smallItem1"
                                            alt="image"
                                        /></a>
                                        <a
                                            href="#"
                                            data-full="../assets/sss3.webp"
                                            className="singleImageHover"
                                        ><img
                                            src="../assets/sss3.webp"
                                            className="img-fluid smallItem smallItem1"
                                            alt="image"
                                        /></a>
                                        <a
                                            href="#"
                                            data-full="../assets/sss4.webp"
                                            className="singleImageHover selected"
                                        ><img
                                            src="../assets/sss4.webp"
                                            className="img-fluid smallItem"
                                            alt="image"
                                        /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleItem_image;
