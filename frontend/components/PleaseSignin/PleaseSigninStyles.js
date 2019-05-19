import styled from 'styled-components';

const PleaseSigninStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .inner {
    width: ${props => props.theme.maxWidth};
  }
`;

export default PleaseSigninStyles;
