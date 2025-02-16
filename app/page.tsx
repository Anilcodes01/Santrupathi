import Section from "@/components/HeroComponents/first_section/Section";
import SecSection from "@/components/HeroComponents/second_section/Section";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 w-full min-h-screen pb-20 bg-white ">
      <div>
        <Section />
      </div>
      <div>
        <SecSection />
      </div>
    </div>
  );
}
