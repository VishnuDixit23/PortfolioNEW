const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-4">
  <a
    href="https://github.com/VishnuDixit23"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center hover:scale-110 transition-transform duration-200"
  >
    <img src="/assets/github.svg" alt="github" className="w-5 h-5" />
  </a>

  <a
    href="https://x.com/dixitvishnu23"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center hover:scale-110 transition-transform duration-200"
  >
    <img src="/assets/x.svg" alt="twitter" className="w-5 h-5" />
  </a>

  <a
    href="https://instagram.com/dixitvishnu23"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-[#1e1e1e] flex items-center justify-center hover:scale-110 transition-transform duration-200"
  >
    <img src="/assets/instagram.svg" alt="instagram" className="w-5 h-5" />
  </a>
</div>


      <p className="text-white-500">© 2025 Vishnu Dixit. All rights reserved.</p>
    </footer>
  );
};

export default Footer;