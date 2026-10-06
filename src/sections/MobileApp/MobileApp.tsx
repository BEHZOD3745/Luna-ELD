import mobileHome from "../../Assets/images/mobileApp/mobileHome.png";
import mobileDrive from "../../Assets/images/mobileApp/mobileDrive.png";

import logsIcon from "../../Assets/icons/logs.svg";
import toggleIcon from "../../Assets/icons/toggle.svg";
import inspectionIcon from "../../Assets/icons/inspection.svg";
import uploadIcon from "../../Assets/icons/upload.svg";

import "./MobileApp.scss";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import ProductFeature from "../../components/ProductFeature";

const MobileApp = () => {
  return (
    <section className="mobile-app section" id="mobile-app">
        <Container>
            <div className="mobile-app__layout">
                <div className="mobile-app__content">
                    <SectionTitle
                        eyebrow="Driver's Mobile App"
                        title="Simple for drivers. Powerful for your fleet."
                        description="Give drivers an easy-to-use mobile experience for logs, duty status, inspections and everyday fleet operations."
                    />
                    <div className="mobile-app__features">
                        <ProductFeature
                            icon={logsIcon}
                            title="Manage Driver Logs"
                            description="Drivers can review and manage their daily ELD records directly from the mobile app."
                        />
                        <ProductFeature
                            icon={toggleIcon}
                            title="Duty Status Control"
                            description="Quickly switch between driving, on duty, sleeper berth and off-duty statuses."
                        />
                        <ProductFeature
                            icon={inspectionIcon}
                            title="Roadside Inspections"
                            description="Access inspection-ready ELD records and present required information when needed."
                        />
                        <ProductFeature
                            icon={uploadIcon}
                            title="Shipping Documents"
                            description="Keep trailer numbers, shipping documents and trip information connected to the driver's records."
                        />
                    </div>
                </div>
                <div className="mobile-app__visual">
                    <div className="mobile-app__glow" />
                    <img src={mobileHome} alt="Luna ELD driver mobile application home screen" className="mobile-app__phone mobile-app__phone--back"/>
                    <img src={mobileDrive} alt="Luna ELD driver logs mobile application" className="mobile-app__phone mobile-app__phone--front"/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default MobileApp