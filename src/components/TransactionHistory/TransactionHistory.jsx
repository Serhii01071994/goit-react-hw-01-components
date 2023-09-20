import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thed}>
        <tr>
          <th className={css.head}>Type</th>
          <th className={css.head}>Amount</th>
          <th className={css.head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.rows} key={id}>
              <td className={css.columns}>{type}</td>
              <td className={css.columns}>{amount}</td>
              <td className={css.columns}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
