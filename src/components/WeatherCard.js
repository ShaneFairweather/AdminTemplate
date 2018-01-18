import React from 'react';


const WeatherCard = () => {
    return (
        <div className="card weather-card">
            <div className="weather-card__main">
                <div className="weather-card__day"></div>
                <div className="weather-card__icon"></div>
                <div className="weather-card__temp"></div>

            </div>
            <div className="weather-card__week">
                <div className="weather-card__day">
                    <div className="weather-card__day"></div>
                    <div className="weather-card__icon"></div>
                    <div className="weather-card__temp"></div>
                </div>
            </div>
        </div>
    )
};

export default WeatherCard;