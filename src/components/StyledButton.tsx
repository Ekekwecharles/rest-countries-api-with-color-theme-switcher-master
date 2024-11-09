import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const StyleButton = styled.button<{ clickable: boolean }>`
  border-radius: 5px;
  padding: 0.7rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  border: none;
  background-color: var(--elements-bg);
  box-shadow: 0px 0px 4px 1px var(--box-shadow-color);
  color: inherit;
`;

interface StyledButtonProps {
  children: React.ReactNode;
  clickable?: boolean;
}

export default function StyledButton({
  children,
  clickable = true,
}: StyledButtonProps) {
  const navigate = useNavigate();

  function handleClick() {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <StyleButton
      onClick={clickable ? handleClick : undefined}
      disabled={!clickable}
      clickable={clickable}
    >
      {children}
    </StyleButton>
  );
}
