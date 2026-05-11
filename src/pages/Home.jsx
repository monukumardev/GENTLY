import BrandSpotlight from "../components/home/BrandSpotlight";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import FeatureSection from "../components/home/FeatureSection";
import Hero from "../components/home/Hero"


const Home = () => {
    return (
        <>
        <Hero/>
        <Categories/>
        <FeatureSection/>
        <BrandSpotlight/>
        <FeaturedProducts/>
        </>
    )
}

export default Home;