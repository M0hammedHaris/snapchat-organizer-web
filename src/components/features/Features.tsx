import React from 'react';
import { motion } from 'framer-motion';
import { FaFolderOpen, FaCamera, FaTrashAlt, FaCloudDownloadAlt, FaShieldAlt, FaToolbox } from 'react-icons/fa';
import styles from './Features.module.css';

const features = [
    {
        icon: <FaCloudDownloadAlt />,
        title: "Memory Downloader",
        desc: "Download memories directly from Snapchat HTML exports with resume capability and progress tracking."
    },
    {
        icon: <FaFolderOpen />,
        title: "Smart Organization",
        desc: "Automatically sorts chat media by conversation partner, date, and time using intelligent matching."
    },
    {
        icon: <FaCamera />,
        title: "Metadata Restoration",
        desc: "Restores missing EXIF data, fixes timestamps, and preserves GPS location for accurate timelines."
    },
    {
        icon: <FaTrashAlt />,
        title: "Duplicate Removal",
        desc: "Advanced SHA256 hashing algorithm detects and removes exact duplicates with 99.9% accuracy."
    },
    {
        icon: <FaShieldAlt />,
        title: "100% Private",
        desc: "All processing happens locally on your device. Your personal data never gets uploaded to any server."
    },
    {
        icon: <FaToolbox />,
        title: "Power Utilities",
        desc: "Includes 6+ built-in tools for verification, overlay compositing, and database management."
    }
];

export const Features: React.FC = () => {
    return (
        <section id="features" className={styles.section}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-4xl font-bold mb-4"
                >
                    Powerful Features
                </motion.h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto">
                    Everything you need to manage your exported Snapchat memories locally.
                </p>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-panel ${styles.card}`}
                        >
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
