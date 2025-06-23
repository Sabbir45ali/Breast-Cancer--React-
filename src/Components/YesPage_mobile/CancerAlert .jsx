import React from 'react';
import Header_Yes_No_Mobile from './Header_Yes_No_Mobile';
import ConsultButton from './ConsultButton';

const CancerAlert = () => {
  const steps = [
    {
      strong: 'Schedule regular follow-ups',
      rest: 'with your doctor to monitor your condition.',
    },
    {
      strong: 'Stay informed',
      rest: 'about any changes or recommendations for future screenings.',
    },
    {
      strong: 'Continue leading a healthy lifestyle',
      rest: 'with good nutrition and regular exercise.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 relative pb-24 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      {/* Main Content Expands Responsively */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl text-white">
        <Header_Yes_No_Mobile
          title="Cancer Detected!"
          subtitle="Your recent report indicates the presence of malignant cells, which suggests cancer. While this news can be overwhelming, it's important to take the right steps:"
        />

        <ul className="list-disc list-inside text-base sm:text-lg space-y-4 mt-4 text-justify leading-relaxed">
          {steps.map((step, index) => (
            <li key={index}>
              <strong>{step.strong}</strong> {step.rest}
            </li>
          ))}
        </ul>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-4 left-0 right-0 px-4 flex justify-center">
        <ConsultButton />
      </div>
    </div>
  );
};

export default CancerAlert;
