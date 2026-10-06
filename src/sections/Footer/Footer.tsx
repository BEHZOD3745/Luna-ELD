import Container from "../../components/Container";

import lunaMark from "../../Assets/icons/luna-mark.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <a
            href="#hero"
            className="footer__brand"
            aria-label="Luna ELD home"
          >
            <img
              src={lunaMark}
              alt=""
              className="footer__logo"
            />

            <span>Luna ELD</span>
          </a>

          <p className="footer__copyright">
            Copyright © LUNA ELD. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;