import React from 'react';
import styles from './Icon.module.css';

const Icon = (props) => {
    return (
        <span className={`${props.className} ${styles.wrapper}`}>
            <i className={`${props.icon} ${styles.icon}`} />
        </span>
    );
};

export default Icon;