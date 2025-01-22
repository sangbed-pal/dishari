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
    <section className="mx-24 rounded-lg pb-16">
      <h2 className="text-3xl font-bold mb-8 text-black">What They Say</h2>
      <div className="flex gap-8">
        {feedbackData.map((item, index) => (
          <div key={index} className="bg-[#29af8a] p-4 rounded-md w-64 transition-transform duration-300 hover:scale-105">
            <img
              src={item.image}
              alt={item.name}
              className="rounded-md w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold mt-4 text-white">{item.name}</h3>
            <p className="text-white mt-2">{item.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;