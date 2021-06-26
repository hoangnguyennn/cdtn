import styled from 'styled-components';

export default styled.footer`
  .footer-navigation {
    margin-top: 3rem;
    padding-top: 3rem;
    padding-bottom: 1.5rem;
    background-color: var(--dark);
  }

  .footer-copyright {
    padding-top: 3rem;
    padding-bottom: 1.5rem;
    background-color: var(--darker);
    color: var(--white);

    .copyright-text {
      display: flex;
      align-items: center;
    }

    .copyright {
      color: var(--white);
      text-decoration: none;
      transition: all 0.3s linear, font-size 1ms, padding 1ms, margin 1ms,
        border 1ms;

      &:hover {
        color: var(--gray);
        text-decoration: underline;
      }
    }

    .czi-heart {
      margin-left: 0.5rem;
      color: var(--danger-hover);
      text-decoration: none;
    }
  }
`;
