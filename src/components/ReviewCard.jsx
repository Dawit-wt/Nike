import Rating from "./Rating.jsx";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={imgURL}
                alt="customer"
                className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center gap-2.5">
                {<Rating rating={rating}/>}
                <p className="text-xl font-montserrat leading-normal text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-1 text-3xl text-center font-bold font-palanquin">{customerName}</h3>
        </div>
    );
};

export default ReviewCard;
