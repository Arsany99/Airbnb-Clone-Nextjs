import React from 'react';

const Footer = () => {
    const Links = [{
        title: 'About',
        links: [
            'How Airbnb Works',
            'Newsroom',
            'Investors',
            'Airbnb Plus',
            'Airbnb Luxe'
        ]
    }, {
        title: 'Community',
        links: [
            'Accessibility',
            'THIS IS NOT Real Site',
            'It\'s a Pretty Awesome Clone',
            'Referrals',
            'Papafam'
        ]
    }, {
        title: 'Host',
        links: [
            'Papa React',
            'Presents',
            'Zero To Full Stack Here',
            'Hundreds of Student',
            'Join now'
        ]
    }, {
        title: 'Support',
        links: [
            'Papa React',
            'THIS IS NOT Real Site',
            'It\'s a Pretty Awesome Clone',
            'Referrals',
            'Accessibility'
        ]
    }];

    return (
        <footer className='container'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200">
                {Links.map((link, index) => (
                    <div key={index} className="space-y-4 text-xs text-gray-800">
                        <h5 className='font-bold'>{link.title}</h5>
                        {link.links.map((item, subIndex) => (
                            <a href={item} className='block' key={subIndex}>{item}</a>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
