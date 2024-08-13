import React from 'react';

const InfoCard = ({ title, description, buttonText, bgColor, textColor }) => (
  <div className={`flex flex-col px-10 pt-16 pb-16 ${bgColor} w-[401px] h-[400px] max-md:px-5 max-md:w-full max-md:h-auto`}>
    <div className="flex flex-col w-full h-full max-w-[321px]">
      <div className="flex flex-col w-full flex-grow">
        <h2 className={`text-4xl font-extrabold leading-none ${textColor}`}>{title}</h2>
        <p className={`mt-4 text-xl leading-7 ${textColor}`}>{description}</p>
      </div>
      <button className={`gap-2.5 self-start px-7 py-6 mt-auto text-lg font-medium ${textColor === 'text-gray-700' ? 'text-gray-700 bg-white' : 'text-white bg-gray-700'} rounded-[34px] max-md:px-5 ${buttonText === 'Become a Volunteer' ? 'underline' : ''}`}>
        {buttonText}
      </button>
    </div>
  </div>
);

const InfoCards = () => {
  const cards = [
    {
      title: "Become A Hero",
      description: "Donate some food today and become a Hero for your society.",
      buttonText: "Discover Causes",
      bgColor: "bg-teal-300",
      textColor: "text-gray-700"
    },
    {
      title: "Become a Volunteer",
      description: "Join Us as a Volunteer",
      buttonText: "Become a Volunteer",
      bgColor: "bg-gray-700",
      textColor: "text-white"
    }
  ];

  return (
    <div className="flex z-10 flex-wrap justify-center items-start self-center mt-0">
      {cards.map((card, index) => (
        <InfoCard key={index} {...card} />
      ))}
    </div>
  );
};

export default InfoCards;
