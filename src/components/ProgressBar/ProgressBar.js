/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE = {
  small: {
    "--padding": 0 + "px",
    "--height": 8 + "px",
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--padding": 0 + "px",
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
  },
  large: {
    "--padding": 4 + "px",
    "--height": 24 + "px",
    "--borderRadius": 8 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  const style = SIZE[size];
  return (
    <Wrapper
      style={style}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{`progress is ${value}%`}</VisuallyHidden>
      <ProgressFillWrapper>
        <ProgressFill value={value} />
      </ProgressFillWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  height: var(--height);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressFillWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${({ value }) => value}%;
`;

export default ProgressBar;
