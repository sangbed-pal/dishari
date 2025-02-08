import React, { useState } from "react";

const FrequentlyAskedQuestions = () => {
    const faqData = [
        { question: "What is this platform about?", answer: "This platform aims at bridging the gap between help seekers and help providers. Government schools and hospitals facing any kind of problems can submit the same on this platform. They will get assistance from NGOs very quickly." },
        { question: "Who can register?", answer: "Any government school/hospital and NGO can register." },
        { question: "How can an NGO contribute?", answer: "On this platform, you can view all the problems that have been submitted by various schools and hospitals. If you are willing to solve a particular problem, you will be connected with the concerned school/hospital immediately." },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="mb-12 md:mb-24 px-4 md:px-12 lg:px-24 rounded-lg">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
                Frequently Asked Questions
            </h2>
            <div className="space-y-4 md:space-y-6">
                {faqData.map((faq, index) => {
                    const isActive = openIndex === index;
                    return (
                        <div
                            key={index}
                            className={`py-3 px-4 md:p-4 rounded-md border-2 transition-all duration-300 ${
                                isActive
                                    ? "border-[#29af8a]"
                                    : "border-[#29af8a] hover:border-transparent hover:bg-[#29af8a]"
                            } group`}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3
                                    className={`text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 ${
                                        isActive
                                            ? "text-black"
                                            : "text-black group-hover:text-white"
                                    }`}
                                >
                                    {faq.question}
                                </h3>
                                <span
                                    className={`text-lg md:text-2xl transition-all duration-300 ${
                                        isActive
                                            ? "text-black"
                                            : "text-black group-hover:text-white"
                                    }`}
                                >
                                    {isActive ? "-" : "+"}
                                </span>
                            </div>
                            {isActive && (
                                <p className="text-sm md:text-base text-black mt-3">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions;
