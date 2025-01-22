import React from "react";

const Quotes = () => {
  const quotes = [
    {
      imgSrc: "/images/image6.jpg",
      quote: `"It is a privilege to serve mankind, for this is the worship of God. God is here, in all these human souls."`,
      reverse: true,
    },
    {
      imgSrc: "/images/image7.jpg",
      quote: `"I slept and dreamt that life was a joy. I awoke and saw that life was service. I acted and behold, service was a joy."`,
      reverse: false,
    },
    {
      imgSrc: "/images/image8.jpg",
      quote: `"Not all of us can do great things, but we can do small things with great love."`,
      reverse: true,
    },
  ];

  return (
    <section className="mb-16 mx-24">
      <div className="space-y-12">
        {quotes.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${
              item.reverse ? "flex-row-reverse" : "flex-row"
            } border-4 border-[#29af8a] rounded-3xl p-4`}
          >
            <div
              className={`flex-shrink-0 w-40 h-40 overflow-hidden rounded-md ${
                item.reverse ? "ml-4 md:ml-8" : "mr-4 md:mr-8"
              }`}
            >
              <img
                src={item.imgSrc}
                alt={`Author Image ${index + 1}`}
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>

            <div className="text-black text-sm md:text-base lg:text-lg italic font-medium">
              {item.quote}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
