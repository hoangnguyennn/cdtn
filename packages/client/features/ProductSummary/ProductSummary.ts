import styled from 'styled-components';
import { mediaQueries } from '../../helpers/checkTypes';

export default styled.div`
  .summary {
    display: flex;
    flex-direction: column;

    .thumbnail {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
      }
    }

    .info {
      padding-top: 1.5rem;
    }

    .stop-business {
      margin-bottom: 1rem;
      padding: 1.25rem;
      color: var(--danger);
      font-size: 1.25rem;
      font-weight: 700;
      border: 2px solid var(--danger);
    }

    .price {
      margin-bottom: 1rem;
      color: var(--primary);
      font-size: 1.75rem;
    }

    .add-to-cart {
      margin-bottom: 1.875rem;

      .qty {
        margin-bottom: 0.5rem;

        input {
          padding: 0.625rem 1rem;
          text-align: center;
        }
      }
    }

    .description {
      .list {
        list-style-type: disc;
        padding-left: 1.25rem;
      }
    }
  }

  .more-info {
    margin-top: 2.25rem;
  }

  .ql-editor {
    padding: 0;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
    }
  }

  ${mediaQueries('lg')} {
    .summary {
      flex-direction: row;

      .thumbnail {
        flex: 1;
        margin-left: 10%;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }

      .info {
        flex: 1;
        margin-left: 10%;
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        flex-direction: column;
      }

      .add-to-cart {
        display: flex;

        .qty {
          margin-right: 1rem;
          margin-bottom: 0;
          width: 7rem;

          input {
            text-align: left;
          }
        }
      }

      .description {
        padding: 1.25rem;
        border: 0.0625rem solid #dae1e7;
        border-radius: 0.5rem;
      }
    }

    .more-info {
      padding-left: 1rem;
      padding-right: 1rem;

      > * {
        width: 60%;
        padding-top: 1.5rem;
        border-top: 0.0625rem solid #dae1e7;
      }
    }
  }
`;
