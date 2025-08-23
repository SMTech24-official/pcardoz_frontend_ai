import { ContactSection } from "../_components/modules/Conatct.section";
import { FAQSection } from "../_components/modules/FAQSection.section";
import { Features } from "../_components/modules/Feature.section";
import { Hero } from "../_components/modules/Hero.section";
import { MissionSection } from "../_components/modules/Mission.section";
import { PeterSection } from "../_components/modules/Peter.section";
import { ProcessSection } from "../_components/modules/Process.section";
import { ReviewSection } from "../_components/modules/Review.section";
import { TextSection } from "../_components/modules/Text.section";
import { VisionSection } from "../_components/modules/Vision.section";
import { WhoIsItForSection } from "../_components/modules/WhoIsItFor.section";

export default function HomePage() {
    return (
        <>
            <div>
                <Hero />
            </div>
            <div>
                <Features />
            </div>
            <div>
                <TextSection />
            </div>
            <div>
                <VisionSection />
            </div>
            <div>
                <MissionSection />
            </div>
            <div>
                <WhoIsItForSection />
            </div>
            <div>
                <ProcessSection />
            </div>
            <div>
                <PeterSection />
            </div>
            <div>
                <ReviewSection />
            </div>
            <div>
                <FAQSection />
            </div>
            <div>
                <ContactSection />
            </div>
        </>
    );
}