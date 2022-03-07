import styles from './portfolio.module.css';
// `${styles.work__filter__item} ${
//   activeFilter === item ? styles.item__active : ''
// }`;

const handleWorkFilter = (id, setSelected, setAnimateCard) => {
  setSelected(id);
  setAnimateCard([{ y: 100, opacity: 0 }]);

  setTimeout(() => {
    setAnimateCard([{ y: 0, opacity: 1 }]);
  }, 500);
};
export default function PortfolioList({
  id,
  title,
  active,
  setSelected,
  setAnimateCard,
}) {
  return (
    <div
      className={`${styles.work__filter__item} ${
        active ? styles.item__active : ''
      }`}
      onClick={() => handleWorkFilter(id, setSelected, setAnimateCard)}
      // () => setSelected(id)
    >
      {title}
    </div>
  );
}
