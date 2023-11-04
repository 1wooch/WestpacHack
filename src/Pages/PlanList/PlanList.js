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
    saved: 1707.83,
    progress: "67%"
};

const FridgePlan = {
    title: "Hisense HRTF205S 205L Top Mount Fridge (Stainless Steel)",
    image: "http://www.jbhifi.com.au/cdn/shop/products/522873-Product-0-I-637702441685352265_1024x1024.jpg",
    price: "549.00",
    currency: "AUD",
    term: 5,
    unit: "week",
    payment: 109.80,
    saved: 54.9,
    progress: "10%"
};

const plans = [iPhonePlan, FridgePlan];

function PlanList() {
    return (
        <div id="overall-box">
            <h1>Purchase Plan Summary</h1>

            {plans.map(obj => {
                return (
                    <div className='plan-wrapper'>
                        <div className='plan' key={obj.title}>
                            <img src={obj.image} />
                            <p>{obj.title}</p>
                            <p>{obj.currency} {obj.price}</p>
                        </div>

                        <div class="mx-2.5">
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${obj.progress}` }}></div>
                            </div>
                        </div>
                        <p>AUD {(parseFloat(obj.price.replace(/,/g, '')) - obj.saved).toFixed(2)} to go.</p>
                    </div>
                );
            })}

        </div >
    );
}

export default PlanList;