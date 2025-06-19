import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 16px;
  font-family: Arial, sans-serif;
`;

export const Table = styled.div`
  width: 100%;
  border-collapse: collapse;
  display: table;
`;

export const Header = styled.div`
  display: table-row;
  background-color: #f0f0f0;
  font-weight: bold;
`;

export const Row = styled.div`
  display: table-row;

  &:nth-child(even) {
    background-color: #fafafa;
  }
`;

export const Cell = styled.div`
  display: table-cell;
  padding: 12px;
  border: 1px solid #ccc;
  text-align: left;
`;
