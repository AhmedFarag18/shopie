import { Link } from "react-router";
import { error404Img } from "../assets/icons";

const Error404 = () => {
  return (
    <div className="bg-light">
      <div className="flex items-center justify-center py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img className="px-4 hidden md:block" src={error404Img} alt="Error Image" />
            <img className="md:hidden" src={error404Img} alt="Error Image" />
            <h2 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS! </h2>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">No signal here! we cannot find the page you are looking for </p>
            <Link to={"/"} className="flex justify-center items-center mx-4 h-10 w-44 border rounded-md text-light text-base bg-primary hover:bg-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
