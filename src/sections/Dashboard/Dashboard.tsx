import dashboardImage from "../../Assets/images/Dashboard/dashboard.png";


import gpsIcon from "../../Assets/icons/gps.svg";
import reportIcon from "../../Assets/icons/report.svg";
import inspectionIcon from "../../Assets/icons/inspection.svg";

import "./Dashboard.scss";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ProductFeature from "../../components/ProductFeature";

const Dashboard = () => {
    return (
        <section className="dashboard-section section" id="dashboard">
            <Container>
                <div className="dashboard-section__layout">
                    <div className="dashboard-section__visual">
                        <div className="dashboard-section__browser">
                            <div className="dashboard-section__browser-bar">
                                <div className="dashboard-section__browser-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="dashboard-section__browser-address">
                                    app.lunaeld.com
                                </div>
                            </div>
                            <img src={dashboardImage} alt="Luna ELD fleet management dashboard" className="dashboard-section__image" />
                        </div>
                    </div>
                    <div className="dashboard-section__content">
                        <SectionTitle
                            eyebrow="ELD Dashboard"
                            title="Everything your fleet needs in one dashboard"
                            description="Monitor drivers, vehicles and compliance from one simple workspace built for day-to-day fleet operations."
                        />
                        <div className="dashboard-section__features">
                            <ProductFeature
                                icon={gpsIcon}
                                title="Real-Time GPS Tracking"
                                description="See current vehicle locations and monitor fleet activity in real time."
                            />
                            <ProductFeature
                                icon={reportIcon}
                                title="Reports & IFTA"
                                description="Access compliance reports, operational data and mileage information when you need it."
                            />
                            <ProductFeature
                                icon={inspectionIcon}
                                title="Inspection Ready"
                                description="Keep driver records organized and ready to present during roadside inspections."
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Dashboard