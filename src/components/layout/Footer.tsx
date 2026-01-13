import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Mohammed Haris. All rights reserved.
                </div>

                <div className={styles.socials}>
                    <a href="https://github.com/M0hammedHaris" className={styles.socialLink}>
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
