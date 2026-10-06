import highwayLogo from "../../Assets/integration-logos/highway.svg"
import macroPointLogo from "../../Assets/integration-logos/macropoint.svg"
import project44Logo from "../../Assets/integration-logos/project44.svg"
import truckerCloudLogo from "../../Assets/integration-logos/truckercloud.svg"
import truckerToolsLogo from "../../Assets/integration-logos/truckertools.svg"
import truckStopLogo from "../../Assets/integration-logos/truckstop.svg"
import Container from "../../components/Container"
import SectionTitle from "../../components/SectionTitle"
import "./Integrations.scss";

const integrations = [
    {
        name: "Highway",
        logo: highwayLogo,
    },
    {
        name: "Trucker Tools",
        logo: truckerToolsLogo,
    },
    {
        name: "Trucker Cloud",
        logo: truckerCloudLogo,
    },
    {
        name: "Decrates Macro Point",
        logo: macroPointLogo,
    },
    {
        name: "Project44",
        logo: project44Logo,
    },
    {
        name: "Truckstop RMIS",
        logo: truckStopLogo,
    },
];



const Integrations = () => {

    return (
        <section
            className="integrations section"
            id="integrations">
            <Container>
                <SectionTitle
                    eyebrow="Integrations"
                    title="Connected with the tools your fleet already uses"
                    description="Luna ELD works seamlessly with leading fleet, insurance and logistics platforms."
                    align="center" />

                <div className="integrations__grid">
                    {integrations.map((integration) => (
                        <div className="integrations__card" key={integration.name}>
                            <img src={integration.logo} alt={`${integration.name} integration`} className="integrations__logo" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Integrations