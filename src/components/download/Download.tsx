import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaWindows, FaLinux } from 'react-icons/fa';
import styles from './Download.module.css';

const version = import.meta.env.VITE_RELEASE_VERSION as string;
const baseUrl = import.meta.env.VITE_DOWNLOAD_BASE_URL as string;

export const Download: React.FC = () => {
    const downloads = {
        macOS: `${baseUrl}/${version}/Snapchat-Organizer-macOS.dmg`,
        windows: `${baseUrl}/${version}/Snapchat-Organizer-Windows.zip`,
        linux: `${baseUrl}/${version}/Snapchat-Organizer-Linux.tar.gz`,
    };

    return (
        <section id="download" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.glow} />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Ready to Organize?</h2>
                    <p className={styles.description}>
                        Get the latest beta ({version}) for your operating system.
                        <br /> Free tier available &mdash; upgrade anytime for Pro features.
                    </p>

                    <div className={styles.btnGroup}>
                        <a href={downloads.macOS} className={styles.downloadBtn} target="_blank" rel="noopener noreferrer">
                            <FaApple className={styles.osIcon} /> macOS
                        </a>
                        <a href={downloads.windows} className={styles.downloadBtn} target="_blank" rel="noopener noreferrer">
                            <FaWindows className={styles.osIcon} /> Windows
                        </a>
                        <a href={downloads.linux} className={styles.downloadBtn} target="_blank" rel="noopener noreferrer">
                            <FaLinux className={styles.osIcon} /> Linux
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
