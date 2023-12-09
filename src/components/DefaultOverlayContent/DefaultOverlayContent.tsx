import { Buttons, Heading } from "./Default";

interface Props {
  label: string;
  description: string;
}

export const DefaultOverlayContent = ({ label, description }: Props) => {
  return (
    <div>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </div>
  );
};
