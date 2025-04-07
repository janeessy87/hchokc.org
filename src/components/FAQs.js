import React from "react";

const FAQs = () => {
  const faqs = [
    { question: "What should I do after a DUI arrest?", answer: "Contact an attorney immediately and avoid self-incrimination." },
    { question: "What happens if I refuse a breathalyzer test?", answer: "You may face automatic license suspension." },
    { question: "Is DUI a felony or misdemeanor?", answer: "It depends on prior offenses and circumstances of the case." }
  ];

  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq">
          <h4>{faq.question}</h4>
          <p>{faq.answer}</p>
        </div>
      ))}
    </section>
  );
};

export default FAQs;