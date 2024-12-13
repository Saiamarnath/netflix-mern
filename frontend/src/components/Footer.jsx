import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <hr className="border-gray-600" />
      
      <div className="text-center my-4">
        <p>Questions? Call: <u className="text-gray-400">800053662</u></p>
      </div>
      
      <div className="flex flex-col lg:flex-row lg:justify-evenly mx-4 lg:mx-10 my-6 space-y-4 lg:space-y-0 lg:space-x-8">
        <ul className="flex flex-col items-center space-y-2">
          <li><a href="#" className="hover:underline">FAQ</a></li>
          <li><a href="#" className="hover:underline">Investor Relations</a></li>
          <li><a href="#" className="hover:underline">Privacy</a></li>
          <li><a href="#" className="hover:underline">Speed Test</a></li>
        </ul>
        <ul className="flex flex-col items-center space-y-2">
          <li><a href="#" className="hover:underline">Help</a></li>
          <li><a href="#" className="hover:underline">Jobs</a></li>
          <li><a href="#" className="hover:underline">Cookies</a></li>
          <li><a href="#" className="hover:underline">Legal Notices</a></li>
        </ul>
        <ul className="flex flex-col items-center space-y-2">
          <li><a href="#" className="hover:underline">Account</a></li>
          <li><a href="#" className="hover:underline">Ways to Watch</a></li>
          <li><a href="#" className="hover:underline">Corporate Info</a></li>
          <li><a href="#" className="hover:underline">Only on Netflix</a></li>
        </ul>
        <ul className="flex flex-col items-center space-y-2">
          <li><a href="#" className="hover:underline">Media Centre</a></li>
          <li><a href="#" className="hover:underline">Terms of Use</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      <div className="flex justify-center items-center h-20 w-32 mx-auto">
        <img src="netflix-logo.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

      <div className="text-center text-xs text-white mt-4">
        <p>© 2024, Netflix, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
