// Components
import GoBackButton from "@/components/go-back-button";
import CheckoutPageForm from "@/components/checkout-page-form";
import CheckoutPageSummary from "@/components/checkout-page-summary";
import CheckoutConfirmationModal from "@/components/checkout-page-confirmation-modal";

export const metadata = {
  title: "Checkout Page",
};

export default function Checkout() {
  return (
    <>
      <GoBackButton />
      <main className="checkout-page-main">
        <CheckoutPageForm />
        <CheckoutPageSummary />
        <CheckoutConfirmationModal />
      </main>
    </>
  );
}
