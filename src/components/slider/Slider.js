import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Slider({ label1, label2, label3 }) {

    return (
        <Carousel className="SliderContainer">
            <Carousel.Item>
                <img className="d-block"
                    src="https:\/\/steamcdn-a.akamaihd.net\/steam\/apps\/1444520\/capsule_616x353.jpg?t=1602187503"
                    alt={label1}
                />
                <Carousel.Caption>
                    <h3>{label1}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https:\/\/steamcdn-a.akamaihd.net\/steam\/apps\/1377540\/capsule_616x353.jpg?t=1602263568"
                    alt={label2}
                />
                <Carousel.Caption>
                    <h3>{label2}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https:\/\/steamcdn-a.akamaihd.net\/steam\/apps\/1383510\/capsule_616x353.jpg?t=1602237115"
                    alt={label3}
                />
                <Carousel.Caption>
                    <h3>{label3}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
