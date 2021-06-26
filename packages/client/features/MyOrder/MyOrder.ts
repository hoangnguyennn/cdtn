import styled from 'styled-components';

export default styled.div`
  overflow-x: auto;

  .order-list {
    width: 100%;
    border-collapse: collapse;

    tr {
      transition: all 0.3s linear, font-size 1ms, padding 1ms, margin 1ms,
        border 1ms;

      &:hover {
        background-color: var(--order-hover);
      }
    }

    th,
    td {
      padding: 1rem;
      font-size: 0.9375rem;
      font-weight: 400;
      text-align: left;
      border-bottom: 0.0625rem solid var(--light);

      &:last-child {
        text-align: right;
      }
    }

    .order-id {
      color: var(--primary);
      text-decoration: none;
    }
  }
`;
