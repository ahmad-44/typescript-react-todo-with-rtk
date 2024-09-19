import { images, appName } from "../constants/constants";
import Time from "./Time";

function Header() {
  return (
    <header className="bg-white h-100px shadow-md mb-10">
      <div className="flex items-center justify-between max-w-1152 mx-auto">
        <div className="w-[160px]">
          <img src={images.logo} alt="Logo" />
        </div>
        <p className="text-3xl text-gradient font-poppins">{appName}</p>
        <Time />
      </div>
    </header>
  );
}

export default Header;
