import {
  CarColumn,
  CarTitle,
  TCPPage,
  Columns,
  CarDescription,
  LearnMoreButton,
} from "./ThreeColumnsPreviewStyles";

const ThreeColumnsPreview = (): JSX.Element => {
  return (
    <TCPPage>
      <Columns>
        <CarColumn color="hsl(31, 77%, 52%)">
          <img src="images/icon-sedans.svg" alt="caricature of a sedan" />
          <CarTitle>SEDANS</CarTitle>
          <CarDescription>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </CarDescription>
          <LearnMoreButton color="hsl(31, 77%, 52%)">
            Learn More
          </LearnMoreButton>
        </CarColumn>

        <CarColumn color="hsl(184, 100%, 22%)">
          <img src="images/icon-suvs.svg" alt="caricature of a suv" />
          <CarTitle>SUV</CarTitle>
          <CarDescription>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </CarDescription>
          <LearnMoreButton color="hsl(184, 100%, 22%)">
            Learn More
          </LearnMoreButton>
        </CarColumn>

        <CarColumn color="hsl(179, 100%, 13%)">
          <img src="images/icon-luxury.svg" alt="caricature of a luxury car" />
          <CarTitle>LUXURY</CarTitle>
          <CarDescription>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </CarDescription>
          <LearnMoreButton color="hsl(179, 100%, 13%)">
            Learn More
          </LearnMoreButton>
        </CarColumn>
      </Columns>
    </TCPPage>
  );
};

export default ThreeColumnsPreview;
