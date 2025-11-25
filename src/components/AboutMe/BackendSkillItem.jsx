import { IoMdCheckmark } from "react-icons/io";

const BackendSkillsItem = ({skill}) => {
    return (
        <li className="flex items-center gap-2 leading-7">
            <IoMdCheckmark /> {skill}
        </li>
    )
};

export default BackendSkillsItem;