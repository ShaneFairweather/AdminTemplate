import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Container, Row } from 'reactstrap';
import GalleryImage from './GalleryImage';

import Beach from '../assets/images/beach.jpg';
import Boat from '../assets/images/boat.jpg';
import Keyboard from '../assets/images/keyboard.jpg';
import Fire from '../assets/images/fire.jpg';
import Flower from '../assets/images/flower.jpg';
import Girl from '../assets/images/girl.jpg';
import City from '../assets/images/city.jpg';
import Path from '../assets/images/path.jpg';
import Girl2 from '../assets/images/girl2.jpg';
import Wolf from '../assets/images/wolf.jpg';
import Lion from '../assets/images/lion.jpg';
import Tree from '../assets/images/tree.jpg';
import Match from '../assets/images/match.jpg';
import Car from '../assets/images/car.jpg';
import Ship from '../assets/images/ship.jpg';
import Snow from '../assets/images/snow.jpg';

const images = [Beach, Snow, Girl, Path, Car, Lion, Boat, Girl2, Wolf, Keyboard, City, Ship, Boat, Tree, Fire, Flower];

class Gallery extends Component {
    state = {
        photoIndex: 0,
        isOpen: false
    };

    handleClick = (imgIndex) => {
        console.log('click');
        this.setState({
            isOpen: true,
            photoIndex: imgIndex
        })
    };

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <Container fluid>
                <div className="section-header">Photo Gallery</div>
                <div className="toolbar">
                    <div className="gallery__info">{images.length} Items</div>
                    <div className="toolbar__icons">
                        <i className="fa fa-sort" />
                        <i className="fa fa-plus" />
                        <i className="fa fa-cog" />
                    </div>
                </div>
                <div className="gallery__images">
                    <Row>
                        <GalleryImage img={Beach} alt="beach" handleClick={() => this.handleClick(0)} />
                        <GalleryImage img={Snow} alt="snow" handleClick={() => this.handleClick(1)} />
                        <GalleryImage img={Girl} alt="girl" handleClick={() => this.handleClick(2)} />
                        <GalleryImage img={Path} alt="path" handleClick={() => this.handleClick(3)} />
                        <GalleryImage img={Car} alt="car" handleClick={() => this.handleClick(4)} />
                        <GalleryImage img={Lion} alt="lion" handleClick={() => this.handleClick(5)} />
                        <GalleryImage img={Match} alt="match" handleClick={() => this.handleClick(6)} />
                        <GalleryImage img={Girl2} alt="girl2" handleClick={() => this.handleClick(7)} />
                        <GalleryImage img={Wolf} alt="wolf" handleClick={() => this.handleClick(8)} />
                        <GalleryImage img={Keyboard} alt="keyboard" handleClick={() => this.handleClick(9)} />
                        <GalleryImage img={City} alt="city" handleClick={() => this.handleClick(10)} />
                        <GalleryImage img={Ship} alt="ship" handleClick={() => this.handleClick(11)} />
                        <GalleryImage img={Boat} alt="boat" handleClick={() => this.handleClick(12)} />
                        <GalleryImage img={Tree} alt="tree" handleClick={() => this.handleClick(13)} />
                        <GalleryImage img={Fire} alt="fire" handleClick={() => this.handleClick(14)} />
                        <GalleryImage img={Flower} alt="flower" handleClick={() => this.handleClick(15)} />
                    </Row>
                </div>


                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}

            </Container>
            )
    }
}

export default Gallery;
