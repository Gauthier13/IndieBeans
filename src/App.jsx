import { CustomerReviews, Footer, Hero, Subscribe, SuperQuality, SpecialOffer, PopularProducts, Services } from "./sections";
import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-[#FFF1E0] padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-[#332413] padding-x padding-t pb-8 text-white">
      <Footer />
    </section>
  </main>
);

export default App;