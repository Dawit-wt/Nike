const Button = ({
                    label,
                    iconURL,
                    backgroundColor,
                    borderColor,
                    textColor,
                    fullWidth,
                    marginBottom
                }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
             ${
                backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : "bg-coral-red text-white border-coral-red hover:bg-white hover:text-coral-red "
            }
             rounded-full hover:scale-105 duration-200 transition-transform ${fullWidth && "w-full"} ${marginBottom && "mb-3 md:mb-0"}`}
        >
            {label}
            {iconURL && (
                <img
                    src={iconURL}
                    alt="arrow right icon"
                    className="ml-2 rounded-full w-5 h-5
      "
                />
            )}
        </button>
    );
};

export default Button;
