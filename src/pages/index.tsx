import React from 'react';
import styles from './index.less';

export default () => {
  let a: String = 'about';
  return (
    <div>
      <h1 className={styles.title}>Page index {a}</h1>
    </div>
  );
};
