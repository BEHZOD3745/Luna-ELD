import { useState } from "react"
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { faqItems } from "../../data/faq";
import FAQItems from "../../components/FAQItem";


const FAQ = () => {
    const [openItem, setOpenItem] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenItem((current) => current === index ? null : index)
    }


    return (
        <section className="faq section" id="faq">
            <Container>
                <div className="faq__layout">
                    <div className="faqa__heading">
                        <SectionTitle
                            eyebrow="FAQ"
                            title="Common questions and answers"
                            description="Everything you need to know about Luna ELD, driver setup, compliance and daily use."
                        />
                    </div>
                    <div className="faq__list">
                        {faqItems.map((item, index)=> (
                            <FAQItems
                                key={item.id}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openItem === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default FAQ