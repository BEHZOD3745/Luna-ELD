
import pt30Image from "../../assets/images/Device/pt30.png";
import plugIcon from "../../assets/icons/plug.svg";
import gpsIcon from "../../assets/icons/gps.svg";
import bluetoothIcon from "../../assets/icons/bluetooth.svg";
import durableIcon from "../../assets/icons/durable.svg";

import "./EldDevice.scss";
import Container from "../../components/Container";
import Badge from "../../components/Badge";
import ProductFeature from "../../components/ProductFeature";
import SectionTitle from "../../components/SectionTitle";

const EldDevice = () => {
    return (
        <section className="eld-device section" id="eld-device">
            <Container>
                <div className="eld-device__layout">
                    <div className="eld-device__visual">
                        <div className="eld-device__glow" />
                        <img src={pt30Image} alt="PT30 ELD device" className="eld-device__image" />
                        <Badge className="eld-device__badge-dot">
                            PT30
                        </Badge>
                    </div>
                    <div className="eld-device__content">
                        <SectionTitle
                            eyebrow="ELD Device"
                            title="Reliable hardware built for the road"
                            description="The PT30 connects your vehicle with Luna ELD and automatically synchronizes driving data with the platform."
                        />
                        <div className="eld-device__features">
                            <ProductFeature
                                icon={plugIcon}
                                title="Quick Installation"
                                description="Connect the PT30 directly to the vehicle and get your driver ready in just a few minutes."
                            />
                            <ProductFeature
                                icon={gpsIcon}
                                title="Real-Time Data"
                                description="Automatically transmit vehicle and driving information to the Luna ELD platform."
                            />
                            <ProductFeature
                                icon={bluetoothIcon}
                                title="Automatic Synchronization"
                                description="Keep the device, driver application and fleet dashboard continuously connected."
                            />
                            <ProductFeature
                                icon={durableIcon}
                                title="Built for Daily Use"
                                description="Compact and dependable hardware designed for everyday trucking operations."
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default EldDevice