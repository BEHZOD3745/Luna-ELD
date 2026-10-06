import downloadIcon from "../../Assets/icons/download.svg";
import type { ResourceItem } from "../../data/resource";

import "./resourceCard.scss";

interface ResourceCardProps {
    resource: ResourceItem;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
    return (
        <article className="resource-card">
            <div className="resource-card__top">
                <div className="resource-card__icon">
                    <img src={resource.icon} alt="" aria-hidden="true" />
                </div>
                <span className="resource-card__type">
                    PDF
                </span>
            </div>
            <div className="resource-card__content">
                <h3 className="resource-card__title">
                    {resource.title}
                </h3>

                <p className="resource-card__description">
                    {resource.description}
                </p>
            </div>
            <a
                href={resource.file}
                download
                className="resource-card__download"
            >
                <span>Download</span>
                <img
                    src={downloadIcon}
                    alt=""
                    aria-hidden="true"
                />
            </a>
        </article>
    )
}

export default ResourceCard