import React from 'react';

function Footer() {
  return (
    <footer className="bg-black mt-12 text-white py-4 text-center fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Dignizant Store. All rights reserved.</p>
        <p>Contact us: contact@dignizantstore.com</p>
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-200 hover:text-blue-100">Facebook</a>
          <a href="#" className="text-blue-200 hover:text-blue-100">LinkedIn</a>
          <a href="#" className="text-blue-200 hover:text-blue-100">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;