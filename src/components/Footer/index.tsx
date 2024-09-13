const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container py-4 px-4 border-t-[1px] border-gray-500 border-opacity-50 flex flex-col gap-2 md:flex-row justify-between items-center">
        <div className="text-white text-sm lg:text-base text-center md:text-left">
          <p className="text-center md:text-start">
            <span>© Copyright</span>
            <span> {new Date().getFullYear()}</span>
            <span>, French Republic Ltd. All rights reserved.</span>
          </p>
          <p>
            Room 701, Level One Denon Aisle of the Louvre Museum in Paris,
            France.
          </p>
        </div>
        <div className="text-white text-sm lg:text-base">
          <p className="flex gap-2">
            <span>Powered by</span>
            <span className="text-blue-500 font-bold">Leonardo Da Vinci</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
