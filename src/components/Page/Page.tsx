import { DefaultOverlayContent } from "../DefaultOverlayContent/DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import { Container } from "./PStyled";

export const Page = () => {
  return (
    <Container>
      <ModelsWrapper>
        <span>
          {[
            "Model One",
            "Model Two",
            "Model Three",
            "Model Four",
            "Model Five",
            "Model Six",
            "Model Seven",
          ].map(modelName => (
            <ModelSection
            key={crypto.randomUUID()}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </span>
      </ModelsWrapper>
    </Container>
  );
};
