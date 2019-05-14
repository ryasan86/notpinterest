import styled from 'styled-components';

const SigninStyles = styled.div`
  width: 30rem;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.white};
  box-shadow: 0 0 1rem ${props => props.theme.bsColor};

  p {
    text-align: center;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
    a {
      color: ${props => props.theme.primary};
    }
  }
`;

export default SigninStyles;