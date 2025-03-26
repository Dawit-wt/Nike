import Button from "../components/Button.jsx";

const Subscribe = () => {
    return (
        <section
            id="contact-us"
            className="max-container"
        >
            <div className="flex flex-col flex-wrap lg:flex-row lg:justify-between">
                <h3 className="font-palanquin text-4xl leading-[68px] capitalize font-bold lg:max-w-md text-center">
                    Sign Up for <span className="text-coral-red">Updates</span> &
                    Newsletter
                </h3>
                <div
                    className="lg:max-w-full md:flex-row flex items-center flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full mt-6">
                    <input
                        type="text"
                        className="input"
                        placeholder="subscribe@nike.com"
                    />
                    <div className="flex max-sm:justify-end items-center max-sm:w-full">
                        <Button label="Sign Up" fullWidth/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
