import React from "react"

interface MWProp {
  children: React.ReactNode
}

export const ModelsWrapper = ({ children }: MWProp) => {
  return (
    <div>{children}</div>
  )
}
