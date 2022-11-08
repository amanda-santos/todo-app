import styled from "styled-components/native";

export type TextProps = {
  color?:
    | "primary-base"
    | "primary-dark"
    | "secondary-base"
    | "secondary-dark"
    | "danger-base"
    | "gray-700"
    | "gray-600"
    | "gray-500"
    | "gray-400"
    | "gray-300"
    | "gray-200"
    | "gray-100";
  size?: "sm" | "md" | "lg";
  weight?: "bold" | "regular";
  customStyles?: string;
};

export const Text = styled.Text<TextProps>`
  line-height: 20px;

  ${({ color, size, weight, theme, customStyles }) => `
    color: ${color ? theme.colors[color] : theme.colors["gray-100"]};
    font-family: ${
      weight ? theme.fontFamily["bold"] : theme.fontFamily.regular
    };
    font-size: ${size ? theme.fontSize[size] : theme.fontSize.md};
    
    ${customStyles}
  `}
`;
