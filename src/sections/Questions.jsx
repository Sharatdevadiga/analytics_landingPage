import Accordion from "../components/accordion/Accordion";
import StillQuestion from "../components/accordion/StillQuestion";

const accordionData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. The changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Your access will continue until the end of your current billing period, after which you won’t be charged further.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information such as your company name, VAT number, or custom notes to your invoices in the billing settings.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is done on a monthly or annual basis, depending on the plan you choose. You'll receive an invoice by email each billing period, and payments will be automatically charged to your selected payment method.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can update your account email from your account settings page. After changing the email, you will receive a confirmation email to verify the new address.",
  },
];

function Questions() {
  return (
    <div className="mb-24 flex flex-col items-center gap-9 pb-16 pt-16">
      <div className="flex max-w-[768px] flex-col items-center justify-center gap-7">
        <h2 className="text-center text-[30px] font-semibold md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="text-gray-shade2 text-center text-base">
          Everything you need to know about the product and billing.
        </p>
      </div>
      <Accordion data={accordionData} />
      <StillQuestion />
    </div>
  );
}

export default Questions;
