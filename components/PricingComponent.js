import React from 'react';

const pricingPlans = [
    {
        title: 'Online Starter',
        price: '₹4999',
        renewal: 'Renewal Charges Rs 1000 After 1 Year*',
        features: [
            '1 Page Basic Info Website',
            'Home | Services & Categories',
            'Slider Banner | About Us',
            'Contact Us | Contact Form',
            'Gallery | Social Media Linking',
            'SSL | 5 NVME GB Hosting',
            '5 Business Email',
            'Basic 1 Logo Design',
            'Live Chat Integration',
        ],
    },
    {
        title: 'Multi Page Website',
        price: '₹9999',
        renewal: 'Renewal Charges Rs 2000 After 1 Year*',
        features: [
            '8 Page Basic Info Website',
            'Home | Services & Categories',
            'Slider Banner | About Us',
            'Contact Us | Contact Form',
            'Gallery | Social Media Linking',
            'SSL | 5 NVME GB Hosting',
            '5 Business Email',
            'Basic 5 Logo Design',
            'Live Chat Integration',
        ],
    },
    {
        title: 'Business Plans',
        price: '₹14,999',
        renewal: 'Renewal Charges Rs 3000 After 1 Year*',
        features: [
            '15 Page Basic Info Website',
            'Home | Services & Categories',
            'Slider Banner | About Us',
            'Contact Us | Contact Form',
            'Gallery | Social Media Linking',
            'SSL | 10 NVME GB Hosting',
            '5 NVME Business Email',
            'Basic 10 Logo Design',
            'Live Chat Integration',
        ],
        proFeatures: [
            'Live Chat | Whatsapp Chat',
            'Payment Gateway Integration',
            '1 Year Free Support',
            '3 Free Update After Delivery',
        ],

    },
    {
        title: 'Business Pro',
        price: '₹24,999',
        renewal: 'Renewal Charges Rs 5000 After 1 Year*',
        features: [
            '20 Page Basic Info Website',
            'Home | Services & Categories',
            'Slider Banner | About Us',
            'Contact Us | Contact Form',
            'Gallery | Social Media Linking',
            'SSL | 20 NVME GB Hosting',
            '10 NVME Business Email',
            '10 Logo Design & Revision',
            'Live Chat Integration',
        ],
        proFeatures: [
            'Live Chat | Whatsapp Chat',
            'Payment Gateway Integration',
            '1 Year Free Support',
            '3 Free Update After Delivery',
        ]
        ,
        proPlusFeatures: [
            'Premium OnPage SEO',
            'Free .com or .in Domain',
            'Poweful Admin Panel',
            '2x More Faster Website',
        ],
    },
];

const PricingComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen container pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="bg-transparent shadow-md rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                        <p className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 mb-4">
                            Order Now
                        </button>
                        <p className="text-gray-500 text-sm mb-6">{plan.renewal}</p>
                        <ul className="mb-4 border border-gray-700 p-3 rounded-xl">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-gray-700 mb-1">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        {plan.proFeatures && (
                            <>
                                <h4 className="text-green-600 font-bold mb-2">Pro</h4>
                                <ul className="border border-dashed border-gray-700 p-3 rounded-xl">
                                    {plan.proFeatures.map((feature, i) => (
                                        <li key={i} className="text-gray-700 mb-1">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {plan.proPlusFeatures && (
                            <>
                                <h4 className="text-green-600 font-bold mb-2">Pro+</h4>
                                <ul className="border border-dashed border-gray-700 p-3 rounded-xl">
                                    {plan.proFeatures.map((feature, i) => (
                                        <li key={i} className="text-gray-700 mb-1">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingComponent;
