import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFileArchive, FaFolderOpen, FaSnapchat } from 'react-icons/fa';
import styles from './Guide.module.css';

const steps = [
    {
        id: 1,
        title: "Request Your Data",
        description: "Open Snapchat > Account > Settings",
        icon: FaSnapchat,
        details: [
            "Navigate to 'My Privacy & Data' > 'My Data'",
            "Under 'Select data to include', toggle these ON:",
            " - Export your Memories",
            " - Export JSON Files (Crucial for organization)",
            " - Chat History",
            " - Export Chat Media",
            "Confirm email and click 'Next' to submit request"
        ],
        image: null
    },
    {
        id: 2,
        title: "Download ZIP",
        description: "Wait for the email and download your data package.",
        icon: FaFileArchive,
        details: [
            "You will receive an email when the export is ready",
            "Log in via the link provided in the email",
            "Click to download your package (ZIP file)",
            "Keep the ZIP file handy – do not delete it"
        ],
        image: null
    },
    {
        id: 3,
        title: "Download Memories",
        description: "Use the Desktop App to download your memories.",
        icon: FaDownload,
        details: [
            "Launch Snapchat Organizer Desktop",
            "Go to the 'Download' tab",
            "Select your 'memories_history.html'",
            "Choose a destination folder and click 'Start Download'"
        ],
    },
    {
        id: 4,
        title: "Organize Chat Media",
        description: "Sort your media by conversation and date.",
        icon: FaFolderOpen,
        details: [
            "Switch to the 'Organize' tab",
            "Select your extracted 'chat_media' folder",
            "Provide the 'memories_history' file for better matching",
            "Click 'Start Organizing' to sort everything cleanly"
        ],
    }
];

export const Guide: React.FC = () => {
    return (
        <main className={styles.pageContainer}>
            <div className={styles.blob1} />
            <div className={styles.blob2} />

            <div className={styles.contentWrapper}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.header}
                >
                    <h1 className={styles.title}>How It Works</h1>
                    <p className={styles.subtitle}>
                        Follow these steps to download and organize your Snapchat history.
                    </p>
                </motion.div>

                <div className={styles.timeline}>
                    <div className={styles.line} />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`${styles.step} ${!isEven ? styles.stepRight : ''}`}
                            >
                                {/* Marker */}
                                <div className={styles.marker}>
                                    <Icon className={styles.markerIcon} />
                                    <div className={styles.markerNumber}>{step.id}</div>
                                </div>

                                {/* Content */}
                                <div className={styles.stepContent}>
                                    <div className={styles.card}>
                                        <h2 className={styles.cardTitle}>{step.title}</h2>
                                        <p className={styles.cardDesc}>{step.description}</p>
                                        <ul className={styles.list}>
                                            {step.details.map((detail, i) => (
                                                <li key={i} className={styles.listItem}>
                                                    <span className={styles.bullet} />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Spacer for flex balance */}
                                <div className={styles.stepContent} style={{ opacity: 0 }} aria-hidden="true" />
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={styles.ctaWrapper}
                >
                    <a href="/#download" className={styles.ctaBtn}>
                        <FaDownload />
                        <span>Download App</span>
                    </a>
                </motion.div>
            </div>
        </main>
    );
};
