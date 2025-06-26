import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  
  h3 {
    margin-top: 0;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    
    input {
      width: 100%;
      padding: 6px 8px;
      margin-top: 4px;
      box-sizing: border-box;
      font-size: 14px;
    }
  }
  
  button {
    padding: 8px 12px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 14px;
  }
`;