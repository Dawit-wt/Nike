import {star} from "../assets/icons";

const PopularProductsCard = ({imgURL, name, price, rating}) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
            <div className="mt-8 flex justify-start gap-2.5">
                {<Rating rating={rating}/>}
                <p className="font-montserrat leading-normal text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal  font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
        </div>
    );
};

function Rating({rating}) {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div
            className="flex gap-1"
            role="img"
            aria-label={`Rating: ${rating} out of 5 stars`}
        >
            {[...Array(fullStars)].map((_, index) => (
                <img key={`full-${index}`} src={star} alt="rating" width={24} height={24}/>
            ))}
            {hasHalfStar && (
                <img
                    key="half"
                    src={star}
                    alt="half star"
                    width={24}
                    height={24}
                    className="opacity-50"
                />
            )}
            {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map(
                (_, index) => (
                    <img
                        key={`empty-${index}`}
                        src={star}
                        alt=""
                        width={24}
                        height={24}
                        className="opacity-20"
                    />
                ),
            )}
        </div>
    );
}

export default PopularProductsCard;
