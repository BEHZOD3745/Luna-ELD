import "./ProductFeature.scss";

interface ProductFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const ProductFeature = ({
    icon,
    title,
    description
}: ProductFeatureProps) => {
  return (
    <div className="product-feature">
        <div className="product-feature__icon">
            <img src={icon} alt="" aria-hidden="true"/>
        </div>
        <div className="product-feature__content">
            <h3 className="product-feature__title">{title}</h3>
            <p className="product-feature__description"> {description} </p>
        </div>
    </div>
  )
}

export default ProductFeature