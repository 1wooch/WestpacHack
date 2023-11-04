import React, { useState } from 'react';
import './styles.css';

const iPhonePlan = {
    title: "Apple iPhone 15 Pro Max 512GB (Natural Titanium)",
    image: "http://www.jbhifi.com.au/cdn/shop/products/639224-Product-0-I-638301470404726572_1024x1024.jpg",
    price: "2,549.00",
    currency: "AUD",
    term: 12,
    unit: "week",
    payment: 212.41,
    saved: 424.82
};

const FridgePlan = {
    title: "Hisense HRTF205S 205L Top Mount Fridge (Stainless Steel)",
    image: "http://www.jbhifi.com.au/cdn/shop/products/522873-Product-0-I-637702441685352265_1024x1024.jpg",
    price: "549.00",
    currency: "AUD",
    term: 5,
    unit: "week",
    payment: 109.80,
    saved: 0
};

const plans = [iPhonePlan, FridgePlan];

function PlanList() {
    return (
        <div>
            <h1>Purchase Plan Summary</h1>
            {plans.map(obj => {
                return (
                    <div key={obj.title}>
                        <p>{obj.title}</p>
                        <img src={obj.image} />
                        <p>{obj.currency} {obj.price}</p>
                        <p>Already saved: {obj.saved}</p>
                        <p>Left to go: {(parseFloat(obj.price.replace(/,/g, '')) - obj.saved).toFixed(2)}</p>
                        <p>Still {((parseFloat(obj.price.replace(/,/g, '')) - obj.saved) / obj.payment).toFixed(0)} {obj.unit}s left.</p>
                    </div>
                );
            })}
        </div>
    );
}

export default PlanList;