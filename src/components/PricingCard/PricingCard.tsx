import type { PricingPlan } from "../../data/pricing";
import Button from "../Button";
import "./PricingCard.scss";

interface PricingCardProps {
    plan: PricingPlan;
}



const PricingCard = ({ plan }: PricingCardProps) => {
    return (
        <article
            className={`pricing-card ${plan.popular ? "pricing-card--popular" : ""}`}
        >
            {plan.popular && (
                <div className="pricing-card__badge">
                    Most Popular
                </div>
            )}
            <div className="pricing-card__header">
                <h3 className="pricing-card__name">
                    {plan.name}
                </h3>
                <p className="pricing-card__description">
                    {plan.description}
                </p>
            </div>
            <div className="pricing-card__price">
                <span className="pricing-card__amount">
                    {plan.price}
                </span>

                {plan.period && (
                    <span className="pricing-card__period">
                        {plan.period}
                    </span>
                )}
            </div>
            <Button
                href="#contact"
                variant={plan.popular ? "primary" : "secondary"}
                className="pricing-card__button"
            >
                Get Started
            </Button>

            <div className="pricing-card__divider" />

            <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                    <li
                        key={feature}
                        className="pricing-card__feature"
                    >
                        <span
                            className="pricing-card__check"
                            aria-hidden="true"
                        >
                            ✓
                        </span>
                        {feature}
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default PricingCard