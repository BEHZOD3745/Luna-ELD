
import "./FeatureCard.scss"

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard = ({
    icon,
    title,
    description,
}: FeatureCardProps) => {
  return (
    <article className="feature-card">
        <div className="feature-card__icon">
            <img src={icon} alt="" aria-hidden="true"/>
        </div>
        <h3 className="feture-card__title">
            {title}
        </h3>
        <p className="feature-card__description">
            {description}
        </p>
    </article>
  )
}

export default FeatureCard