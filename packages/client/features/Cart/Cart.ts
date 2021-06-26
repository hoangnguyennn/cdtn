import styled from 'styled-components';
import FormGroup from '../../components/core/FormGroup';
import { mediaQueries } from '../../helpers/checkTypes';

export default styled.div`
  .cart-sidebar {
    .cart-detail {
      .cart-item {
        padding-bottom: 0.5rem;
        border-bottom: 0.0625rem solid #dae1e7;
        display: flex;

        .thumbnail {
          width: 5rem;
          display: flex;

          img {
            width: 100%;
          }
        }

        .info {
          flex: 1;
          padding-left: 1rem;
          padding-right: 1rem;

          .name {
            margin-bottom: 0.625rem;
            color: inherit;
            font-size: 0.8125rem;
            text-decoration: none;
            transition: all 0.3s linear, font-size 1ms, padding 1ms, margin 1ms,
              border 1ms;

            &:hover {
              color: var(--primary);
              text-decoration: underline;
            }
          }

          .qty {
            display: flex;

            span,
            input {
              width: 1.75rem;
              height: 1.75rem;
              border-top: 0.0625rem solid #eee;
              border-bottom: 0.0625rem solid #eee;

              display: flex;
              justify-content: center;
              align-items: center;
            }

            input {
              color: var(--primary);
              font-weight: 700;
              text-align: center;
              border-left: 0.0625rem solid #eee;
              border-right: 0.0625rem solid #eee;
            }

            .qty-decreace {
              border-left: 0.0625rem solid #eee;
            }

            .qty-increase {
              border-right: 0.0625rem solid #eee;
            }

            .qty-decreace,
            .qty-increase {
              cursor: pointer;
              user-select: none;
              transition: all 0.3s linear, font-size 1ms, padding 1ms,
                margin 1ms, border 1ms;

              &:hover {
                background-color: #aaa;
              }
            }
          }
        }

        .actions {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          .action {
            color: var(--main-text-color);
            font-size: 0.8125rem;
            transition: all 0.3s linear, font-size 1ms, padding 1ms, margin 1ms,
              border 1ms;

            &:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }

          .price {
            flex: 1;
            font-size: 0.8125rem;
            font-weight: 700;

            display: flex;
            align-items: flex-end;
          }
        }
      }
    }

    .cart-summary {
      margin-top: 1rem;

      ${FormGroup} {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .price {
        color: var(--primary);
      }

      .total-price {
        font-size: 1.125rem;
        font-weight: 700;
      }
    }
  }

  .cart-main {
    .checkout-information {
      margin-bottom: 3rem;
    }

    .payment-method {
      margin-bottom: 1rem;
      padding: 0.625rem 1rem;
      display: flex;
      align-items: center;
      border: 0.0625rem solid var(--gray);
      cursor: pointer;
      transition: none;

      * {
        transition: none;
      }

      input {
        display: none;
      }

      .icon {
        margin-right: 1.25rem;
      }

      h4 {
        font-weight: 400;
      }

      &.active {
        background-color: var(--light);
        color: var(--primary);
        border-color: var(--primary);

        .icon {
          color: var(--primary);
        }
      }
    }
  }

  ${mediaQueries('lg')} {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;

    .cart-sidebar {
      flex: 2;
    }

    .cart-main {
      flex: 3;
      margin-right: 1rem;
    }

    .cart-sidebar,
    .cart-main {
      padding: 1rem;
      margin-bottom: 0;
      border: 0.0625rem solid #dae1e7;
    }
  }
`;
