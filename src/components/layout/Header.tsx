import React from 'react';
import { Link } from 'react-router-dom';
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
                    <img src="/favicon.png" alt="SnapOrganizer Logo" className={styles.logoIcon} />
                    <span className={styles.logoText}>SnapOrganizer</span>
                </div>

                <nav className={styles.nav}>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/guide" className={styles.link}>Guide</Link>
                    <a href="/#download" className={styles.downloadBtn}>
                        Download App
                    </a>
                </nav>
            </div>
        </motion.header>
    );
};
