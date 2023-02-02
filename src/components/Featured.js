import Heading from "@/components/Heading";
import FeaturedCard from "@/components/FeaturedCards";

export default function Featured() {
  return (
    <section className="featured background">
      <div className="container pb-8">
        <Heading
          title="Featured Property Types"
          subtitle="Find All Type of Property."
        />
        <FeaturedCard />
      </div>
    </section>
  );
}
