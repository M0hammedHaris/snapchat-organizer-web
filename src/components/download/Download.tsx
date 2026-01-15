import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaWindows, FaLinux, FaGithub } from 'react-icons/fa';
import styles from './Download.module.css';

export const Download: React.FC = () => {
    const [releaseUrl] = useState("https://github.com/M0hammedHaris/snapchat-organizer-desktop/releases/tag/v1.0.2-alpha");
    const [version] = useState("v1.0.2-alpha");

    const downloads = {
        macOS: "https://github.com/M0hammedHaris/snapchat-organizer-desktop/releases/download/v1.0.2-alpha/Snapchat-Organizer-macOS.dmg",
        windows: "https://github.com/M0hammedHaris/snapchat-organizer-desktop/releases/download/v1.0.2-alpha/Snapchat-Organizer-Windows.zip",
        linux: "https://github.com/M0hammedHaris/snapchat-organizer-desktop/releases/download/v1.0.2-alpha/Snapchat-Organizer-Linux.tar.gz"
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
                        Get the latest version ({version}) for your operating system.
                        <br /> Open source and free forever.
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

                    <div className={styles.releaseNotes}>
                        <a
                            href={releaseUrl}
                            className={styles.releaseLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub /> View Release Notes
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
