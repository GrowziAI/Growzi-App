import React from "react"
import { StyledTypography } from "./Typography.styles"

const Typography = ({ children }: { children: React.ReactNode}) => {
    return <StyledTypography>{children}</StyledTypography>
}

export default Typography