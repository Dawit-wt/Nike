import {
    CustomerReviews,
    Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality,
} from "./sections";
import Nav from "./components/Nav.jsx";

const app = () => (
    <main className="relative">
        <Nav/>
        <section id="home" className="xl:padding-l wide:padding-r padding-b">
            <Hero/>
        </section>
        <section id="products" className="padding">
            <PopularProducts/>
        </section>
        <section id="super-quality" className="padding">
            <SuperQuality/>
        </section>
        <section className="padding-x py-10">
            <Services/>
        </section>
        <section className="padding">
            <SpecialOffer/>
        </section>
        <section className="bg-pale-blue padding">
            <CustomerReviews/>
        </section>
        <section id="contact-us" className="padding-x py-16 w-full sm:py-32">
            <Subscribe/>
        </section>
        <section id="footer" className="pb-8 bg-black padding-x padding-t">
            <Footer/>
        </section>
    </main>
);

export default app;
