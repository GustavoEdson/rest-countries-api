import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  font-family: "Roboto Flex";
  flex-shrink: 0;
  border-bottom: 1px solid black;
`;

export const Theme = styled.span<{ $active?: boolean }>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => (props.$active ? "#fff" : "#000000")};
  font-family: "Roboto Flex";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
