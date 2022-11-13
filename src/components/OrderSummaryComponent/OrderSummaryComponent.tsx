import {
  OSCAnnualPlan,
  OSCAnnualPlanPricing,
  OSCButtons,
  OSCContent,
  OSCDescription,
  OSCPage,
  OSCShape,
  OSCTitle,
} from "./OrderSummaryComponentStyles";

const OrderSummaryComponent = (): JSX.Element => {
  return (
    <OSCPage>
      <OSCShape>
        <img
          src="images/illustration-hero.svg"
          alt="caricature of a woman listening music"
        ></img>
        <OSCContent>
          <OSCTitle>Order Summary</OSCTitle>
          <OSCDescription>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
          </OSCDescription>
          <OSCAnnualPlan>
            <img src="images/icon-music.svg" alt="music icon" />
            <OSCAnnualPlanPricing>
              <span>Annual Plan</span>
              <span>$59.99/year</span>
            </OSCAnnualPlanPricing>
            <a href="." onClick={(event) => event.preventDefault()}>
              Change
            </a>
          </OSCAnnualPlan>
          <OSCButtons>
            <button>Proceed to Payment</button>
            <button>Cancel Order</button>
          </OSCButtons>
        </OSCContent>
      </OSCShape>
    </OSCPage>
  );
};

export default OrderSummaryComponent;
