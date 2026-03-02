import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} MacHive / Mohammed Haris. All rights reserved.
                </div>

                <div className={styles.links}>
                    <Link to="/privacy" className={styles.legalLink}>Privacy Policy</Link>
                    <Link to="/terms" className={styles.legalLink}>Terms & Conditions</Link>
                </div>

                <div className={styles.socials}>
                    <a href="https://github.com/M0hammedHaris" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
