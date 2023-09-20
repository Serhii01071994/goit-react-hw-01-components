import css from './Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(({ label, percentage, id }) => {
            const styleLabel = label.substring(1);
          return (
            <li className={`${css.item} ${css[styleLabel]}`} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
