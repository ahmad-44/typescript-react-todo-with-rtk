import { images, appName } from "../constants/constants";
import Time from "./Time";

function Header() {
  return (
    <header className="bg-white h-100px shadow-md mb-10 w-full">
      <div className="flex items-center md:items-center md:justify-between max-w-1152 mx-auto max-[1152px]:px-[10px]">
        <div className="md:w-[160px]">
          <img src={images.logo} alt="Logo" />
        </div>
        <p className="text-2xl md:text-3xl text-gradient font-poppins">
          {appName}
        </p>
        <Time />
      </div>
    </header>
  );
}

export default Header;
