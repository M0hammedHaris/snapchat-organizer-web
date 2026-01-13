import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={styles.header}
        >
            <div className={`glass-panel ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>S</div>
                    <span className={styles.logoText}>SnapOrganizer</span>
                </div>

                <nav className={styles.nav}>
                    <a href="#features" className={styles.link}>Features</a>
                    <a href="#download" className={styles.downloadBtn}>
                        Download
                    </a>
                </nav>
            </div>
        </motion.header>
    );
};
