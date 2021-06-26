import styled from 'styled-components';
import { mediaQueries } from '../../helpers/checkTypes';

export default styled.div`
  .register-form {
    .submit-group {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  .sign-in {
    text-align: center;

    span {
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    a {
      color: var(--primary);
      text-decoration: none;
      transition: all 0.3s linear, font-size 1ms, padding 1ms, margin 1ms,
        border 1ms;

      &:hover {
        color: var(--primary-hover);
      }
    }
  }

  ${mediaQueries('lg')} {
    .register-form {
      width: 40%;
      margin-left: auto;
      margin-right: auto;

      .submit {
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;
