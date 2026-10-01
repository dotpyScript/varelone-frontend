import { BeyondToday } from "@/components/sections/beyond-today";
import { ColdChainStory } from "@/components/sections/cold-chain-story";
import { ContactDetails } from "@/components/sections/contact-details";
import { CTASection } from "@/components/sections/cta-section";
import { CurrentSolutions } from "@/components/sections/current-solutions";
import { EnergyAgriculture } from "@/components/sections/energy-agriculture";
import { Hero } from "@/components/sections/hero";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Positioning } from "@/components/sections/positioning";
import { VideoPlaceholder } from "@/components/sections/video-placeholder";
import { VisionStatement } from "@/components/sections/vision-statement";
import { images } from "@/content/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <CurrentSolutions />
      <ColdChainStory />
      <VideoPlaceholder
        poster={images.solarWide}
        title="Energy, built around the work."
        caption="A short film on how Varelon approaches energy and cold-chain infrastructure."
      />
      <HowWeWork />
      <EnergyAgriculture />
      <BeyondToday />
      <VisionStatement />
      <CTASection showDetails={false} />
      <ContactDetails />
    </>
  );
}
