import { IoMdClose } from "react-icons/io";

const FormNotification = ({title, message, onClose, isSuccess, isError}) => {
    return (
        <div className="fixed top-0 left-0 z-[70] bg-dark-bg/60 flex justify-center items-center w-full h-full">
            <div className={`bg-lite-gray w-[90%] max-w-100 relative z-[75] rounded-lg py-8 px-4 border ${isSuccess ? "border-dark-bg" : "border-black/30"} ${isError ? "border-red-400" : "border-black/30"} shadow-lg flex flex-col gap-4`}>
               
                <button 
                    className="border border-black/30 w-8 h-8 rounded-full flex justify-center items-center absolute right-4 top-3 cursor-pointer hover:bg-pri-blue hover:text-white-shade"
                    onClick={onClose}
                >
                    <IoMdClose className="text-lg" />
                </button>

                <h2 className={`capitalize font-semibold ${isSuccess ? "text-pri-blue" : ""} ${isError ? "text-red-400" : ""}`}> {title} </h2>

                <p className="text-sm">
                    {message}
                </p>
            </div>
        </div>
    )
}

export default FormNotification;