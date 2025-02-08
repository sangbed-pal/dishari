import React from "react";

const Feedback = () => {
  const feedbackData = [
    {
      name: "Bankata Primary School",
      feedback: "This platform helped us get clean drinking water",
      image: "/images/image10.jpg",
    },
    {
      name: "Sreerampur Gramin Hospital",
      feedback: "We got essential medical supplies on time",
      image: "/images/image12.jpg",
    },
    {
      name: "Tehatta High School",
      feedback: "We have got tremendous support from many NGOs from time to time",
      image: "/images/image9.jpeg",
    },
    {
      name: "Child in Need Institute",
      feedback: "We are extremely happy to help those in need",
      image: "/images/image11.jpg",
    }
  ];

  return (
    <section className="px-4 md:px-12 lg:px-24 pb-12 md:pb-16 rounded-lg">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-black text-center">
        What They Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-fr">
        {feedbackData.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#29af8a] p-4 rounded-md w-full min-h-[280px] flex flex-col justify-between transition-transform duration-300 hover:scale-105 shadow-lg h-full"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-md w-full h-40 object-cover"
            />
            <h3 className="text-lg md:text-xl font-semibold mt-4 text-white text-center flex-grow">
              {item.name}
            </h3>
            <p className="text-white mt-2 text-center">{item.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
