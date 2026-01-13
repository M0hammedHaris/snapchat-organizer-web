import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub } from 'react-icons/fa';
import styles from './Hero.module.css';
import heroMockup from '../../assets/images/hero-mockup.png';

export const Hero: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.background}>
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={styles.blob1}
                />
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className={styles.blob2}
                />
            </div>

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <h1 className={styles.title}>
                        Your Memories, <br />
                        <span className="text-gradient">Organized.</span>
                    </h1>

                    <p className={styles.description}>
                        The ultimate tool to export, organize, and preserve your Snapchat history with powerful metadata tools and a beautiful interface.
                    </p>

                    <div className={styles.ctaGroup}>
                        <a href="#download" className={styles.primaryBtn}>
                            <FaDownload /> Download App
                        </a>
                        <a href="https://github.com/M0hammedHaris/snapchat-organizer-desktop" target="_blank" rel="noopener" className={styles.secondaryBtn}>
                            <FaGithub /> View on GitHub
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: -10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={styles.imageWrapper}
                >
                    <motion.img
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        src={heroMockup}
                        alt="App Screenshot"
                        className={styles.mockup}
                    />
                </motion.div>
            </div>
        </section>
    );
};
