import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Post from '@/components/recentpost';
import FeaturedPost from '@/components/featuredpost';

export default function Home() {
  return (
  
<div>
  <Navbar />
  <Hero />
  <Post />
  <FeaturedPost />
  <Footer />
</div>
  );
}
