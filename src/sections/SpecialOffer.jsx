import Button from "../components/Button.jsx";
import {offer} from "../assets/images/index.js";
import {arrowRight} from "../assets/icons/index.js";

const SpecialOffer = () => {
    return (
        <section id="#" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687} alt="offer image" className="object-contain w-full"/>
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red">Special</span> Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Embark on a shopping journey that redefines your experience with unbeatable deals. From premier
                    selections to incredible savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 info-text lg:max-w-lg">
                    Navigate to the realm 0f possibilities designed to fulfill your unique desires, surpassing the
                    loftiest expectations. your journey with us is nothing short of exceptional.
                </p>
                <div className="mt-11 flex flex-wrap space-x-7">
                    <Button label="Shop Now" iconURL={arrowRight}/>
                    <Button label="Learn More"
                            backgroundColor="bg-white"
                            borderColor="border-slate-gray"
                            textColor="text-slate-gray"

                    />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
