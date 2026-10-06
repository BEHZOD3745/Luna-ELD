
import Container from "../../components/Container"
import FeatureCard from "../../components/FeatureCard"
import SectionTitle from "../../components/SectionTitle"

import shieldIcon from "../../assets/icons/shield-check.svg";
import visibilityIcon from "../../assets/icons/eye.svg";
import usersIcon from "../../assets/icons/users.svg";

import "./WhyPlatform.scss"

const WhyPlatform = () => {
    return (
        <section className="why-platform section" id="why-platform">
            <Container>
                <SectionTitle
                    eyebrow="Why Luna ELD"
                    title="Everything your fleet needs. Nothing it doesn’t."
                    description="A modern ELD platform designed to simplify compliance, improve fleet visibility and make everyday operations easier."
                    align="center"
                />
                <div className="why-platform__grid">
                    <FeatureCard
                        icon={shieldIcon}
                        title="Automated Compliance"
                        description="Stay FMCSA compliant with automated HOS tracking, digital logs and inspection-ready records."
                    />
                    <FeatureCard
                        icon={visibilityIcon}
                        title="Real-Time Visibility"
                        description="Monitor drivers, vehicles and fleet activity in real time from one simple dashboard."
                    />
                    <FeatureCard
                        icon={usersIcon}
                        title="Simple Driver Experience"
                        description="Give drivers an intuitive mobile app for logs, duty status, inspections and daily workflow."
                    />
                </div>
            </Container>
        </section>
    )
}

export default WhyPlatform