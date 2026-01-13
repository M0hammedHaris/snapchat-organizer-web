import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaWindows, FaGithub } from 'react-icons/fa';
import styles from './Download.module.css';

export const Download: React.FC = () => {
    const [releaseUrl] = useState("https://github.com/M0hammedHaris/snapchat-organizer-desktop/releases/latest");
    const [version] = useState("v1.0.0");

    useEffect(() => {
        // In a real scenario, we could fetch the latest release tag from GitHub API
        // fetch('https://api.github.com/repos/M0hammedHaris/snapchat-organizer-desktop/releases/latest')
        //   .then(res => res.json())
        //   .then(data => {
        //     setReleaseUrl(data.html_url);
        //     setVersion(data.tag_name);
        //   });
    }, []);

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
                        <a href={releaseUrl} className={styles.downloadBtn}>
                            <FaApple className={styles.osIcon} /> macOS
                        </a>
                        <a href={releaseUrl} className={styles.downloadBtn}>
                            <FaWindows className={styles.osIcon} /> Windows
                        </a>
                    </div>

                    <div className="mt-16 text-sm text-gray-500">
                        <a href={releaseUrl} className="hover:text-white flex items-center justify-center gap-2 transition-colors">
                            <FaGithub /> View Release Notes
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
