import styled from 'styled-components';

import device from '../../utils/device';

const CreatePinStyles = styled.form`
  flex-grow: 0;
  background: ${props => props.theme.white};
  max-width: ${props => props.theme.maxWidth};
  padding: 5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2),
    0 0 0.5rem rgba(0, 0, 0, 0.2);
  @media ${device.laptop} {
    padding: 2rem;
    flex-direction: column;
  }

  .column {
    @media ${device.laptop} {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .dropzone {
    @media ${device.laptop} {
      width: 100%;
      align-items: center;
      margin-bottom: 3rem;
    }
  }

  .inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin-left: 3rem;
    @media ${device.laptop} {
      margin: 0;
      width: 100%;
      align-items: center;
    }
    .text-inputs {
      textarea {
        font-family: inherit;
        border: none;
        border-bottom: 1px solid gray;
        outline: none;
        resize: none;
        padding: 1rem 0;
        margin-bottom: 1rem;
        width: 100%;
        &.title-input {
          font-weight: 900;
          font-size: 3.5rem;
        }
        &.description-input {
          font-size: 2rem;
        }
      }
    }
    button {
      width: 20rem;
      margin-top: 3rem;
    }
  }
`;

export default CreatePinStyles;
