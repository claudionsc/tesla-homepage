import React, { useCallback, useRef, useState, useContext } from "react"
import { Container } from "./StyledMW"
import ModelsContext, { CarModel } from "../../../contexts/ModelsContext"

interface MWProp {
  children: React.ReactNode
}

export const ModelsWrapper = ({ children }: MWProp) => {
  const wrapperRef = useRef<HTMLElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
  }, [])

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName) || null
  }, [])
  
  return (
    <ModelsContext.Provider value={{
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getModelByName
    }}>
      <Container ref={wrapperRef}>{children}</Container>
    </ModelsContext.Provider>
  )
}
