import React from "react";
import { Container } from "./MSStyled";

interface MSProps extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

export const ModelSection = ({ modelName, overlayNode, ...props }, children: MSProps) => {
  return (
    <Container {...props}>
      <h1>ModelSection</h1>
    </Container>
  );
};
