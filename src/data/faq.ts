export interface FAQItemdata {
    id: number;
    question: string;
    answer: string;
}

export const faqItems: FAQItemdata[] = [
    {
        id: 1,
        question: "Is Luna ELD FMCSA compliant?",
        answer: 
        "Yes. Luna ELD is designed to support FMCSA-compliant Hours of Service logging, driver records, roadside inspections and fleet compliance workflows."
    },
    {
        id: 2,
        question: "How do I create a driver and vehicle?",
        answer: 
        "You can create drivers and vehicles directly from the Luna ELD dashboard. Add the required information, assign the vehicle and provide the driver with login credentials for the mobile app."
    },
    {
        id: 3,
        question: "How does the driver mobile app work?",
        answer: 
        "Drivers use the Luna ELD mobile app to manage duty status, review logs, connect to their vehicle, update shipping information and prepare records for roadside inspections."
    },
    {
        id: 4,
        question: "Can Luna ELD track vehicles in real time?",
        answer: 
        "Yes. Fleet managers can view vehicle locations and monitor fleet activity from the Luna ELD dashboard using real-time GPS data."
    },
    {
        id: 5,
        question: "What happens during a roadside inspection?",
        answer: 
        "Drivers can access the inspection section in the mobile app and present the required ELD records to the inspecting officer."
    },
    {
        id: 6,
        question: "Does Luna ELD support integrations?",
        answer: 
        "Yes. Luna ELD can integrate with supported logistics, insurance and fleet-management platforms to help keep your operations connected."
    },
]