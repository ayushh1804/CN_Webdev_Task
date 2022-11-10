
import Navbar from './components/Navbar';
import FreeTrial from './components/FreeTrial';
import Circles from './components/Circles';
import ProdDesigner from './components/ProdDesigner';
import FeatureQuoteRight from './components/FeatureQuoteRight';
import FeatureQuoteLeft from './components/FeatureQuoteLeft';
import PostsBlogTop from './components/PostsBlogTop';
import BlogCard from './components/BlogCard';
import Testimonial from './components/Testimonial';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
    return(
       
       <div className='font-roboto'>
        <Navbar/>
        <FreeTrial/>
        <Circles />
        <ProdDesigner/>
        <FeatureQuoteRight/>
        <FeatureQuoteLeft />
        <PostsBlogTop/>
        <BlogCard/>
        <Testimonial/>
        <Cta/>
        <Footer/>
       </div>
    );
  
  

};
export default App;
