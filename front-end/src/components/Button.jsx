import React from 'react';

function Button({ children, variant }) {
  const baseClasses = "gap-2.5 self-stretch px-7 py-6 rounded-[34px] max-md:px-5";
  const variantClasses = {
    primary: "text-white bg-orange-300",
    secondary: "text-gray-700 bg-white"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
}

export default Button;