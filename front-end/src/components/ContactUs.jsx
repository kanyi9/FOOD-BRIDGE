import React from 'react';
import { Link } from 'react-router-dom';

function InputField({ label, placeholder, type = 'text', rows }) {
  return (
    <div className="flex flex-col mt-5 w-full font-medium min-h-[58px]">
      <label className="gap-2.5 self-start text-sm text-black">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          rows={rows}
          className="flex overflow-hidden gap-2.5 items-center py-2.5 pl-2.5 w-full text-xs rounded-xl max-w-[404px] min-h-[32px] text-zinc-300"
          aria-label={label}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="flex overflow-hidden gap-2.5 items-center py-2.5 pl-2.5 w-full text-xs rounded-xl max-w-[404px] min-h-[32px] text-zinc-300"
          aria-label={label}
        />
      )}
    </div>
  );
}

// Button Component
function Button({ text }) {
  return (
    <div className="flex flex-col pb-2.5 mt-8 bg-slate-100">
      <button className="flex overflow-hidden justify-center gap-2.5 items-center py-2.5 pl-2.5 w-full bg-yellow-800 rounded-xl max-w-[404px] min-h-[32px]">
        <span className="z-10 self-center mt-0 text-sm font-bold text-white">
          {text}
        </span>
      </button>
    </div>
  );
}

// ContactUsForm Component
function ContactUs() {
  const inputFields = [
    { label: 'Name', placeholder: 'Enter your name' },
    { label: 'Email address', placeholder: 'Enter your email', type: 'email' },
    { label: 'Message', placeholder: 'Enter your message', type: 'textarea', rows: 4 },
  ];

  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-44 bg-white max-md:px-5 max-md:py-24">
      <section className="flex flex-col pb-10 max-w-full w-[404px]">
        <div className="flex gap-2.5 items-start pb-16">
          <div className="flex flex-col min-w-[240px] w-[404px] p-6 border border-orange-300 rounded-[45px]">
            <h1 className="gap-2.5 self-start text-3xl font-medium text-black min-h-[53px]">
              Contact Us
            </h1>
            <form>
              {inputFields.map((field, index) => (
                <InputField key={index} {...field} />
              ))}
              <Button text="Submit" />
            </form>
            <p className="flex flex-col self-center mt-6 max-w-full text-sm font-medium text-black min-h-[23px] w-[129px]">
              Go back to <Link to="/"><span className="text-yellow-800">Home</span></Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
