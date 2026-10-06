import heroImage from "../../Assets/images/hero/hero.png";

import Badge from "../../components/Badge";
import Button from "../../components/Button";
import Container from "../../components/Container";
import TrustItem from "../../components/TrustItem";

import "./Hero.scss";

const Hero = () => {
  return (
    <section
      className="hero"
      id="hero"
    >
      <div className="hero__glow" />

      <Container className="hero__container">
        <div className="hero__content">
          <div className="hero__copy">
            <Badge>
              FMCSA compliant ELD platform
            </Badge>

            <h1 className="hero__title">
              Modern ELD platform
              <span>
                {" "}
                for smarter fleet management.
              </span>
            </h1>

            <p className="hero__description">
              Manage compliance, drivers, vehicles
              and your entire fleet from one simple
              platform built for modern trucking
              operations.
            </p>

            <div className="hero__actions">
              <Button
                href="#contact"
              >
                Get Started
              </Button>

              <Button
                href="#dashboard"
                variant="secondary"
              >
                Explore Platform
              </Button>
            </div>

            <div className="hero__trust">
              <TrustItem>
                FMCSA compliant
              </TrustItem>

              <TrustItem>
                Real-time visibility
              </TrustItem>

              <TrustItem>
                Driver mobile app
              </TrustItem>
            </div>
          </div>

          <div className="hero__visual">
            <img
              src={heroImage}
              alt="Luna ELD dashboard and driver mobile application"
              className="hero__image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;