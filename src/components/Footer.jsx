import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
     <div className="flex flex-col items-center border-t border-red-500 pt-4">
  <a
    href="https://github.com/Abreeu"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer mb-2 flex flex-col items-center"
  >
    <FaGithub className="text-4xl text-white hover:text-red-500 transition-colors" />
    <span className="text-white font-medium mt-1 hover:text-red-500 transition-colors">By Abreeu</span>
  </a>
</div>
    </>
  );
}

export default Footer;
