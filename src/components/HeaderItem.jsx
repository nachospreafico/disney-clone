import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeaderItem = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer  ">
      <FontAwesomeIcon icon={icon} className="text-white" />
      <h2 className=" text-white font-semibold hover-underline">
        {name.toUpperCase()}
      </h2>
    </div>
  );
};

export default HeaderItem;
