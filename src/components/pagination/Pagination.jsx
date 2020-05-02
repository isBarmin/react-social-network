import React from 'react';
import classNames from 'classnames';
import './Pagination.scss';

const Pagination = (props) => {
  const { className, pages, activeItemIndex, onPageChange } = props;
  const mainCls = 'pagination';
  const classes = classNames({
    [mainCls]: true,
    [className]: className,
  });

  const btnCls = `${mainCls}__btn`;

  return (
    <div className={classes}>
      {new Array(pages).fill(0).map((item, i) => {
        const pageNumber = i + 1;
        const btnClasses = classNames({
          [btnCls]: true,
          [`${btnCls}_active`]: activeItemIndex === pageNumber,
        });

        return (
          <button
            key={i}
            className={btnClasses}
            onClick={() => onPageChange(pageNumber)}
            type="button"
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
