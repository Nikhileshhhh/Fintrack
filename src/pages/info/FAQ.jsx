import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Yes, encrypted with Firebase Auth + Firestore rules."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, no hidden charges."
    },
    {
      question: "Does SmartPay support multiple currencies?",
      answer: "Yes, customizable."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, 14-day trial for Pro plan."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <img 
            src="/images/faq.png" 
            alt="FAQ" 
            className="mx-auto w-64 h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Building trust and transparency with our users
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;