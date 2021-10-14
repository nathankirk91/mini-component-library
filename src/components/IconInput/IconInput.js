import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14 / 16 + "rem",
    iconSize: 16 + "px",
    textPadding: 4 + "px",
    textLeftPadding: 24 + "px",
    iconPaddingLeft: 0 + "px",
    underlineSize: 1 + "px",
  },
  large: {
    fontSize: 18 / 16 + "rem",
    iconSize: 24 + "px",
    textPadding: 8 + "px",
    textLeftPadding: 36 + "px",
    iconPaddingLeft: 2 + "px",
    underlineSize: 2 + "px",
  },
};

const IconInput = ({ label, icon, width = 150, size, ...delegate }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  let iconSize;
  if (size === "large") {
    iconSize = 24;
  } else if (size === "small") {
    iconSize = 16;
  }

  return (
    <Wrapper style={{"--border-bottom": styles.underlineSize}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          "--size": styles.iconSize,
          "--left-padding": styles.iconPaddingLeft,
        }}
      >
        <Icon id={icon} size={iconSize} strokeWidth={2}/>
      </IconWrapper>
      <TextInput
        {...delegate}
        style={{
          "--left-padding": styles.textLeftPadding,
          "--padding": styles.textPadding,
          "--width": width + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
`;

const TextInput = styled.input`
  height: ${24 / 16} rem;
  border: none;
  border-bottom: var(--border-bottom) solid ${COLORS.black};
  padding: var(--padding);
  padding-left: var(--left-padding);
  color: ${COLORS.gray700};
  font-weight: 700;
  width: var(--width);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  color: ${COLORS.gray700};
  left: var(--left-padding);
  pointer-events: none;

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
