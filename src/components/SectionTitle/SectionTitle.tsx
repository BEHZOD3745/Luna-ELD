import "./SectionTitle.scss";

interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

const SectionTitle = ({
    eyebrow,
    title,
    description,
    align = "left",
    className = "",
}: SectionTitleProps) => {
    return (
        <div
            className={[
                "section-title",
                `section-title--${align}`,
                className
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {eyebrow && (
                <span className="section-title__eyebrow">
                    {eyebrow}
                </span>
            )}
            <h2 className="section-title__heading">
                {title}
            </h2>
            {description && (
                <p className="section-title__description">
                    {description}
                </p>
            )} 
        </div>
    )
}

export default SectionTitle