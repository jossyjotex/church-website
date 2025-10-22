import { useState } from 'react';
import '../pages/Styles/FAQComponent.css';

export default function FAQComponent() {
  const faqs = [
    { question: 'How do I enroll as a worker or join the workforce?', answer: 'You can enroll by reaching out to our workforce team via the contact page.' },
    { question: 'What is the full meaning of the church name NICC?', answer: 'Our programs run on Sundays, Wednesdays, and Fridays.' },
    { question: "What days are your programs?", answer: 'Visit the location section of our website for precise directions.' },
    { question: 'How can i give to the church?', answer: 'NICC stands for Neighborhood International Christian Center.' },
    { question: 'How can i get to the church precise location?', answer: 'Donations can be made through our online giving platform.' },
    { question: 'Who is the founder of Neighborhood International Christian Center?', answer: 'The founder is Pastor John Doe.' }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container ">
        <div className='container px-4'>

      <h2 className="faq-heading">FAQs</h2>
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleFAQ(index)}
          >
            <span className="faq-question">{faq.question}</span>
            <span className="faq-toggle">{openIndex === index ? '-' : '+'}</span>
          </div>
        ))}
        {/* {openIndex !== null && (
          <div className="faq-answer">
            {faqs[openIndex].answer}
          </div>
        )} */}
      </div>
        </div>
    </div>
  );
}
