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

export const CellActions = styled(Cell)`
display: flex;
justify-content: space-around;
 
`

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #cc0000;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
    color: #a00000;
  }
`;

