import React, { useEffect, useRef } from "react";
import { Container } from "./MSStyled";
import useModel from "../../../hooks/useModel";

interface MSProps extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

export const ModelSection =  ({ modelName, overlayNode, children, ...props }: MSProps) => {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if(sectionRef.current){
      registerModel({ modelName, overlayNode, sectionRef })
    }
  }, [modelName, overlayNode, registerModel])

  return (
    <Container ref={sectionRef} {...props}>
      <h1>{children}</h1>
    </Container>
  );
};
