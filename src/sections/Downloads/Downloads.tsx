



import Container from "../../components/Container";
import ResourceCard from "../../components/ResourceCard";
import SectionTitle from "../../components/SectionTitle";
import { resources } from "../../data/resource";
import "./Downloads.scss";

const Downloads = () => {
    return (
        <section className="downloads section" id="resources">
            <Container>
                <SectionTitle
                    eyebrow="Resources"
                    title="Guides & resources"
                    description="Everything you need to set up Luna ELD, prepare for inspections and keep important compliance documents close at hand."
                    align="center"
                />
                <div className="downloads__grid">
                    {resources.map((resource) => (
                        <ResourceCard
                            key={resource.id}
                            resource={resource}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Downloads