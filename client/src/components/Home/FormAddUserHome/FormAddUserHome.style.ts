// src/components/FormAddUserHome/FormAddUserHome.styled.ts

import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    border-color: #0f1c2e;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #0f1c2e;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a2a40;
  }
`;

export const ErrorText = styled.p`
  color: #c0392b;
  font-size: 0.875rem;
  margin: -10px 0 8px 0;
`;
