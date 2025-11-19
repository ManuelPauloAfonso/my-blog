import RecentPost from "@/components/recent";
import Featured from "@/components/featured";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import Posts from "@/lib/posts";

export default async function Home() {
  const posts = await Posts.findAll();

  const featured = posts.slice(0, 3);
  const recent = posts.slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-0 py-10">
      <Navbar />
      <Banner />
      <Featured posts={featured} />
      <RecentPost posts={recent} />
      <Footer />
    </div>
  );
}
