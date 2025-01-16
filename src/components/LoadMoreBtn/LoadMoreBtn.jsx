import clsx from "clsx";
import s from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleChangePage }) {
  return (
    <>
      <button onClick={handleChangePage} className={clsx(s.loadMoreBtn)}>
        Load more
      </button>
    </>
  );
}
