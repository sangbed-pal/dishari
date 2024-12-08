import React from "react";

const FeedbackSection = () => {
  const feedbackData = [
    {
      name: "Govt. School A",
      feedback: "This platform helped us get clean drinking water.",
      image: "/images/image1.jpg",
    },

    {
      name: "Hospital A",
      feedback: "We got essential medical supplies on time.",
      image: "/images/image2.jpg",
    },

    {
      name: "NGO A",
      feedback: "We connected with schools in need seamlessly.",
      image: "/images/image3.jpg",
    },
    
    {
      name: "NGO B",
      feedback: "We are extremely happy to help those in need.",
      image: "/images/image1.jpg",
    }
  ];

  return (
    <section className="mx-24 rounded-lg pb-16">
      <h2 className="text-3xl font-bold mb-8 text-black">What They Say</h2>
      <div className="flex gap-8">
        {feedbackData.map((item, index) => (
          <div key={index} className="bg-[#29af8a] p-4 rounded-md w-64">
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

export default FeedbackSection;
