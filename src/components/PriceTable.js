import React from 'react';

const PriceTable = (props) => {
    const { title, subtitle, price, feature1, feature2, feature3, feature4 } = props.data;
    return (
        <div className="card price-table">
            <div className="price-table__header">
                <div className="price-table__title">{title}</div>
                <div className="price-table__subtitle">{subtitle}</div>
            </div>
            <div className="price-table__body">
                <div className="price-table__price-info">
                    <div className="dollar-sign">$</div>
                    <div className="price-table__price">{price}</div>
                    <div className="price-table__per">/mo</div>
                </div>
                <div className="price-table__feature">{feature1}</div>
                <div className="price-table__feature">{feature2}</div>
                <div className="price-table__feature">{feature3}</div>
                <div className="price-table__feature">{feature4}</div>
            </div>
            <div className="price-table__footer">
                <div className="btn">Select Plan</div>
            </div>
        </div>
    )
};

export default PriceTable;