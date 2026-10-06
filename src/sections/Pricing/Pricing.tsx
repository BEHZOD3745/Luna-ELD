
import Container from "../../components/Container";
import PricingCard from "../../components/PricingCard";
import SectionTitle from "../../components/SectionTitle";
import { pricingPlans } from "../../data/pricing";
import "./Pricing.scss";

const Pricing = () => {
    return (
        <section className="pricing section" id="pricing">
            <Container>
                <SectionTitle
                    eyebrow="Pricing"
                    title="Simple plans for every fleet"
                    description="Choose the plan that fits your operation today and scale as your fleet grows."
                    align="center"
                />
                <div className="pricing__grid">
                    {pricingPlans.map((plan) => (
                        <PricingCard
                            key={plan.id}
                            plan={plan}
                        />
                    ))}
                </div>
                <p className="pricing__note">
                    Need a custom setup or integration? Contact us
                    and we’ll build a solution around your fleet.
                </p>
            </Container>
        </section>
    )
}

export default Pricing