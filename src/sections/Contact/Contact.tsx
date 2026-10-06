import { useState } from "react";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import Button from "../../components/Button";

import mailIcon from "../../Assets/icons/mail.svg";
import phoneIcon from "../../Assets/icons/phone.svg";
import clockIcon from "../../Assets/icons/clock.svg";

import {
    sendContactForm,
    type ContactFormPayload,
} from "../../services/contact";

import "./Contact.scss";

type SubmitStatus =
    | "idle"
    | "loading"
    | "success"
    | "error";

const initialFormData: ContactFormPayload = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
};

const Contact = () => {
    const [formData, setFormData] =
        useState<ContactFormPayload>(initialFormData);

    const [status, setStatus] =
        useState<SubmitStatus>("idle");

    const handleChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (
            status === "success" ||
            status === "error"
        ) {
            setStatus("idle");
        }
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        if (status === "loading") {
            return;
        }

        try {
            setStatus("loading");

            await sendContactForm(formData);

            setStatus("success");
            setFormData(initialFormData);
        } catch (error) {
            console.error(
                "Failed to send contact form:",
                error
            );

            setStatus("error");
        }
    };

    const getButtonText = () => {
        switch (status) {
            case "loading":
                return "Sending...";

            case "success":
                return "Message Sent ✓";

            case "error":
                return "Try Again";

            default:
                return "Send Message →";
        }
    };

    return (
        <section
            className="contact section"
            id="contact"
        >
            <Container>
                <div className="contact__box">
                    <div className="contact__info">
                        <SectionTitle
                            eyebrow="Contact Us"
                            title="Ready to move your fleet forward?"
                            description="Reach out for sales, support or partnership opportunities. Our team is ready to help you get started with Luna ELD."
                        />

                        <div className="contact__details">
                            <a
                                href="mailto:info@lunaeld.com"
                                className="contact__detail"
                            >
                                <div className="contact__detail-icon">
                                    <img
                                        src={mailIcon}
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <span className="contact__detail-label">
                                        Email
                                    </span>

                                    <strong>
                                        info@lunaeld.com
                                    </strong>
                                </div>
                            </a>

                            <a
                                href="tel:+12677037447"
                                className="contact__detail"
                            >
                                <div className="contact__detail-icon">
                                    <img
                                        src={phoneIcon}
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <span className="contact__detail-label">
                                        Phone
                                    </span>

                                    <strong>
                                        +1 (267) 703-7447
                                    </strong>
                                </div>
                            </a>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <img
                                        src={clockIcon}
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>

                                <div>
                                    <span className="contact__detail-label">
                                        Support
                                    </span>

                                    <strong>
                                        24/7 support
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        className="contact__form"
                        onSubmit={handleSubmit}
                    >
                        <div className="contact__row">
                            <div className="contact__field">
                                <label htmlFor="name">
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    autoComplete="name"
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>

                            <div className="contact__field">
                                <label htmlFor="company">
                                    Company
                                </label>

                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your company"
                                    autoComplete="organization"
                                    disabled={status === "loading"}
                                />
                            </div>
                        </div>

                        <div className="contact__row">
                            <div className="contact__field">
                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    autoComplete="email"
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>

                            <div className="contact__field">
                                <label htmlFor="phone">
                                    Phone
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 123-4567"
                                    autoComplete="tel"
                                    disabled={status === "loading"}
                                />
                            </div>
                        </div>

                        <div className="contact__field">
                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your fleet..."
                                rows={6}
                                maxLength={1500}
                                required
                                disabled={status === "loading"}
                            />
                        </div>

                        <Button
                            type="submit"
                            className={`contact__submit ${status === "success"
                                    ? "contact__submit--success"
                                    : ""
                                }`}
                            disabled={status === "loading"}
                        >
                            {getButtonText()}
                        </Button>

                        <div
                            className="contact__status"
                            aria-live="polite"
                        >
                            {status === "success" && (
                                <p className="contact__message contact__message--success">
                                    Thank you. Your message has been sent successfully.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="contact__message contact__message--error">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Contact;