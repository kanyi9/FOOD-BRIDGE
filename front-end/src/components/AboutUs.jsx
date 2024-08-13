

import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="flex flex-wrap gap-5 items-center self-center mt-36 max-md:mt-10">
      <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[493px] max-md:max-w-full">
        <h2 className="max-w-full text-xl leading-none font-semibold text-orange-600 w-[312px]">About Us</h2>
        <p className="mt-3.5 max-w-full text-xl leading-7 text-neutral-500 w-[603px] max-md:max-w-full">
        At FootBridge, we believe that no one should go hungry. Our mission is to create a community-driven platform where volunteers can contribute their time, resources, and skills to help those in need. Whether it's through food donations, financial contributions, or volunteering, we provide an opportunity for everyone to make a meaningful impact.
          <br /><br />
          FootBridge was born out of the desire to bring people together to combat hunger and food insecurity. We work closely with local communities, food banks, and shelters to ensure that donations reach those who need them most. Every contribution, big or small, helps us move closer to a world where everyone has access to nutritious meals.
        <br /><br />

        </p>
      </div>
      <div className="flex flex-col grow shrink justify-center self-stretch px-10 py-12 my-auto text-gray-700 bg-gray-100 min-w-[240px] w-[439px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-start w-full max-w-[469px] max-md:max-w-full">
          <h3 className="max-w-full text-2xl font-extrabold rounded-none w-[190px]">Total Donation</h3>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc0bf8e949e8d263e2701dad9e950c66a9161883ce2e0fb4bb477b37bfa7ed5a?apiKey=a660b816358840e6b4fa30624def69c6" alt="Donation progress" className="object-contain mt-7 w-full rounded-none" />
          <div className="flex gap-5 justify-between mt-7 w-full text-xl font-extrabold rounded-none">
            <div>Collection - $10M</div>
            <div>Goal - $24M</div>
          </div>
          <button className="gap-2.5 self-stretch px-11 py-6 mt-10 text-lg font-medium uppercase bg-orange-300 rounded-[34px] max-md:px-5">
            Donate Now
          </button>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;