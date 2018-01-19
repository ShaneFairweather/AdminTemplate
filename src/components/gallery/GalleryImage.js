import React from 'react';
import { Col } from 'reactstrap';

const GalleryImage = (props) => {
    return (
        <Col xs="12" sm="6" md="3">
            <div className="gallery__image-container" onClick={props.handleClick}>
                <img className="img-responsive" src={props.img} alt={props.alt} />
                <div className="image-overlay">
                    <i className="fa fa-search-plus" />
                </div>
            </div>
        </Col>
    )
};

export default GalleryImage;