import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is this course offered at no expense?",
      answer: "The available courses can be accessed without charge to assist those in the field of education."
    },
    {
      question: "Who is the target audience for this course?",
      answer: "This course is designed for anyone looking to enhance their skills in a specific area."
    },
    {
      question: "Does this course come with a certificate?",
      answer: "Yes, upon successful completion of the course, you will receive a certificate."
    },
    {
      question: "What is the duration of this course?",
      answer: "The course duration depends on the specific program, typically ranging from a few weeks to several months."
    },
    {
      question: "Do you provide job placement services after graduation?",
      answer: "Yes, we offer job placement assistance to help graduates find employment."
    }
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Frequently Asked</h2>
          <h2 className="text-3xl font-bold">Questions</h2>
          <p className="text-gray-600 mt-2">Still confused or uncertain? Contact us</p>
          <p className="text-gray-600">at +6288 999 222 333.</p>
        </div>
        <div className="flex-1 flex justify-center"> {/* Use flexbox to center content */}
          <div className="w-3/4"> {/* Limit width for better centering */}
            {faqs.map((faq, index) => (
              <div key={index} className="border-b last:border-b-0 py-4 flex justify-between items-start">
                <div className="flex items-start">
                  <span className="text-blue-600 font-semibold mr-4">
                  {index < 9 ? `0${index + 1}` : index + 1}

                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-600">
                      {faq.question}
                    </h3>
                    {activeIndex === index && (
                      <p className="text-gray-500 mt-2">{faq.answer}</p>
                    )}
                  </div>
                </div>
                <div className="cursor-pointer self-start" onClick={() => toggleFAQ(index)}>
                  <span className="text-gray-600">{activeIndex === index ? '×' : '+'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;