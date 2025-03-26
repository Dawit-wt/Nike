import {star} from "../assets/icons/index.js";

const Rating = ({rating}) => {
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
};

export default Rating;
