
import { useEffect, useState } from "react";
import lunaMark from "../../assets/icons/luna-mark.svg";
import monitorIcon from "../../assets/icons/monitor.svg";
import logsIcon from "../../assets/icons/logs.svg";
import plugIcon from "../../assets/icons/plug.svg";
import "./Header.scss";

const navigation = [
    {
        label: "Integrations",
        href: "#integrations",
    },
    {
        label: "Pricing",
        href: "#pricing",
    },
    {
        label: "Resources",
        href: "#resources",
    },
    {
        label: "FAQ",
        href: "#faq",
    },
    {
        label: "Contact",
        href: "#contact",
    },
]

const productLinks = [
    {
        title: "ELD Dashboard",
        description: "Monitor drivers, HOS and fleet activity.",
        href: "#dashboard",
        icon: monitorIcon,
    },
    {
        title: "Driver's Mobile App",
        description: "Manage logs, duty status and inspections.",
        href: "#mobile-app",
        icon: logsIcon,
    },
    {
        title: "ELD Device",
        description: "Connect vehicles with the PT30 device.",
        href: "#eld-device",
        icon: plugIcon,
    },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen])

    const closeMenu = () => {
        setIsMenuOpen(false)
        setIsProductsOpen(false);
    }


    return (
        <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
            <div className="container header__container">
                <a
                    href="#hero"
                    className="header__logo"
                    onClick={closeMenu}
                    aria-label="Luna ELD home">
                    <img src={lunaMark} alt="" className="header__logo-icon" />
                    <span className="header__logo-text">Luna ELD</span>
                </a>
                <nav className="header__nav">
                    <div className="header__products">
                        <button
                            type="button"
                            className="header__nav-link header__products-button"
                            aria-haspopup="true"
                        >
                            Products
                            <span className="header__products-chevron">
                                ↓
                            </span>
                        </button>
                        <div className="header__dropdown">
                            <div className="header__dropdown-inner">
                                {productLinks.map((product) => (
                                    <a
                                        href={product.href}
                                        key={product.title}
                                        className="header__product"
                                    >
                                        <div className="header__product-icon">
                                            <img
                                                src={product.icon}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div>
                                            <strong>
                                                {product.title}
                                            </strong>

                                            <span>
                                                {product.description}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    {navigation.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="header__nav-link"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="header__actions">
                    <a href="#" className="header__login">Log In</a>
                    <a href="#contact" className="header__cta">Get Started <span className="header__cta-arrow" aria-hidden="true"> → </span></a>
                </div>

                <button
                    type="button"
                    className={`header__burger ${isMenuOpen ? "header__burger--open" : ""}`}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                    aria-expanded={isMenuOpen}
                >
                    <span className="first"></span>
                    <span className="second"></span>
                    <span className="third"></span>
                </button>
            </div>

            <div className={`header__mobile ${isMenuOpen ? "header__mobile--open" : ""}`}>
                <div className="container header__mobile-inner">
                    <nav className="header__mobile-nav">
                        <button
                            type="button"
                            className="header__mobile-link header__mobile-products-button"
                            onClick={() =>
                                setIsProductsOpen((prev) => !prev)
                            }
                        >
                            <span>Products</span>

                            <span className={`header__mobile-chevron ${isProductsOpen ? "header__mobile-chevron--open" : ""}`}>
                                +
                            </span>
                        </button>
                        <div
                            className={`header__mobile-products ${isProductsOpen
                                    ? "header__mobile-products--open"
                                    : ""
                                }`}
                        >
                            <div className="header__mobile-products-inner">
                                {productLinks.map((product) => (
                                    <a
                                        key={product.title}
                                        href={product.href}
                                        className="header__mobile-product"
                                        onClick={closeMenu}
                                    >
                                        <img
                                            src={product.icon}
                                            alt=""
                                        />

                                        <div>
                                            <strong>
                                                {product.title}
                                            </strong>

                                            <span>
                                                {product.description}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        {navigation.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={closeMenu}
                                className="header__mobile-link"
                            >
                                {item.label}
                                <span>↗</span>
                            </a>
                        ))}
                    </nav>
                    <div className="header__mobile-actions">
                        <a
                            href="#"
                            className="header__mobile-login"
                            onClick={closeMenu}
                        >
                            Log in
                        </a>

                        <a
                            href="#contact"
                            className="header__mobile-cta"
                            onClick={closeMenu}
                        >
                            Get Started
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header