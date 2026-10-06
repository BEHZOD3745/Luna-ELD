import "./FAQItems.scss";

interface FAQItemsProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItems = ({
    question, answer, isOpen, onClick
}: FAQItemsProps) => {
    return (
        <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} >
            <button
                className="faq-item__button"
                onClick={onClick}
                type="button"
                aria-expanded={isOpen}
            >
                <span className="faq-item__question">
                    {question}
                </span>
                <span className="faq-item__icon">
                    <span />
                    <span />
                </span>
            </button>
            <div className="faq-item__answer-wrapper">
                <div className="faq-item__answer-inner">
                    <p className="faq-item__answer">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FAQItems