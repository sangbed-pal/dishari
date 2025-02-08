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
    <section className="mb-12 md:mb-16 px-4 md:px-12 lg:px-24">
      <div className="space-y-8 md:space-y-12">
        {quotes.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center border-4 border-[#29af8a] rounded-3xl p-4 md:p-6`}
          >
            <div
              className={`flex-shrink-0 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-md ${
                item.reverse ? "md:ml-8" : "md:mr-8"
              } mb-4 md:mb-0`}
            >
              <img
                src={item.imgSrc}
                alt={`Author Image ${index + 1}`}
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>

            <div className="text-black text-sm md:text-base lg:text-lg italic font-medium text-center md:text-left">
              {item.quote}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quotes;
