import React, { useState, useEffect } from "react";

const Banner = () => {
    const images = [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
        "/images/image4.jpg",
        "/images/image5.jpg",
    ];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative h-[70vh] overflow-hidden mt-16 mb-24">
            <img
                src={images[currentImage]}
                alt="Social Service"
                className={`object-cover w-full h-full`}
            />
        </div>
    );
};

export default Banner;
