import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const StyleButton = styled.button`
  border-radius: 5px;
  padding: 0.7rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  border: none;
  background-color: var(--elements-bg);
  box-shadow: 0px 0px 4px 1px var(--box-shadow-color);
  color: inherit;
`;

interface StyledButtonProps {
  children: React.ReactNode;
}

export default function StyledButton({ children }: StyledButtonProps) {
  const navigate = useNavigate();
  return <StyleButton onClick={() => navigate(-1)}>{children}</StyleButton>;
}
