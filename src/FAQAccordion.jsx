// import { useState } from "react";

// function FAQAccordion() {
//   const [isActive, setIsActive] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setIsActive((prev) => !prev);
//   }

//   return (
//     <>
//       <h2>FAQ Accordion</h2>

//       <button onClick={handleClick}>
//         Can I cancel my subscription at anytime?
//       </button>
//       <div>
//         {isActive === true &&
//         <p>
//           Sure. Your paid subscription can be cancelled anytime by shifting to
//           Lite plan.
//         </p>
//         }
//       </div>
//       <button onClick={handleClick}>Can I change my plan later on?</button>
//       <div>
//         {isActive === true && (
//           <>
//             <p>
//               Absolutely! You can upgrade or downgrade your plan anytime. The
//               money paid for the previous subscription will be recalculated to
//               the new plan.
//             </p>
//           </>
//         )}
//       </div>
//       <button onClick={handleClick}>
//         Will you renew my subscription automatically?
//       </button>
//       <div>
//         {isActive === true &&
//         <p>
//           Yes, your subscription will be automatically renewed according to your
//           pay period.
//         </p>
//         }
//       </div>
//       <button onClick={handleClick}>Do you offer any discounts?</button>
//       <div>
//         {isActive === true &&
//         <p>
//           Yes! We offer 17% discount for payment per year. There may be other
//           temporary discounts, check for this inside the service.
//         </p>
//         }
//       </div>
//       <button onClick={handleClick}>Can I request a refund?</button>
//       <div>
//         {isActive === true &&
//         <p>
//           Sure, you will be welcome to request your refund within 14 days of
//           subscribing to any paid plan.
//         </p>
//         }
//       </div>

//     </>
//   );
// }

// export default FAQAccordion;


//Static implement

// import { useState } from "react";

// function FAQAccordion() {
//   const [activeQuestion, setActiveQuestion] = useState(0);

//   function handleClick(questionNumber) {
//     setActiveQuestion(
//       activeQuestion === questionNumber ? 0 : questionNumber,
//     );
//   }

//   function button(){

//   }
//   return (
//     <>
//       <h2>FAQ Accordion</h2>

//       <button onClick={() => handleClick(1)}>
//         Can I cancel my subscription at anytime?
//       </button>

//       {activeQuestion === 1 && (
//         <p>
//           Sure. Your paid subscription can be cancelled anytime by shifting to
//           Lite plan.
//         </p>
//       )}

//       <button onClick={() => handleClick(2)}>
//         Can I change my plan later on?
//       </button>

//       {activeQuestion === 2 && (
//         <p>
//           Absolutely! You can upgrade or downgrade your plan anytime. The money
//           paid for the previous subscription will be recalculated to the new
//           plan.
//         </p>
//       )}

//       <button onClick={() => handleClick(3)}>
//         Will you renew my subscription automatically?
//       </button>

//       {activeQuestion === 3 && (
//         <p>
//           Yes, your subscription will be automatically renewed according to your
//           pay period.
//         </p>
//       )}

//       <button onClick={() => handleClick(4)}>
//         Do you offer any discounts?
//       </button>

//       {activeQuestion === 4 && (
//         <p>
//           Yes! We offer 17% discount for payment per year. There may be other
//           temporary discounts, check for this inside the service.
//         </p>
//       )}

//       <button onClick={() => handleClick(5)}>Can I request a refund?</button>

//       {activeQuestion === 5 && (
//         <p>
//           Sure, you will be welcome to request your refund within 14 days of
//           subscribing to any paid plan.
//         </p>
//       )}
//     </>
//   );
// }

// export default FAQAccordion;


//Dynamic implement

import { useState } from "react";

function FAQAccordion() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: "Can I cancel my subscription at anytime?",
      answer:
        "Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan.",
    },
    {
      question: "Can I change my plan later on?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan anytime.",
    },
    {
      question: "Will you renew my subscription automatically?",
      answer:
        "Yes, your subscription will be automatically renewed according to your pay period.",
    },
    {
      question: "Do you offer any discounts?",
      answer:
        "Yes! We offer 17% discount for payment per year.",
    },
    {
      question: "Can I request a refund?",
      answer:
        "Sure, you will be welcome to request your refund within 14 days.",
    },
  ];

  function handleClick(index) {
    setActiveQuestion(
      activeQuestion === index ? null : index
    );
  }

  return (
    <>
      <h2>FAQ Accordion</h2>

      {faqs.map((faq, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>
            {faq.question}
          </button>

          {activeQuestion === index && (
            <p>{faq.answer}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default FAQAccordion;