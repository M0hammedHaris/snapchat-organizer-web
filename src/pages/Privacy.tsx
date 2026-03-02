import React from 'react';
import { motion } from 'framer-motion';
import styles from './Legal.module.css';

export const Privacy: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h1>Privacy Policy</h1>
                    <p>Last Updated: March 2, 2026</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={styles.content}
                >
                    <p>
                        Welcome to Snapchat Organizer, a software application ("Software") built and maintained by MacHive ("we", "our", or "us"), 
                        owned by Mohammed Haris. This Privacy Policy details how we handle the information related to your 
                        use of the Snapchat Organizer Desktop application and the accompanying website.
                    </p>

                    <h2>1. 100% Private, Local Processing</h2>
                    <p>
                        Our core philosophy is absolute privacy. Snapchat Organizer Desktop is designed to process your Snapchat 
                        data exports locally on your own device.
                    </p>
                    <ul>
                        <li>We <strong>do not</strong> have access to your personal Snapchat data, chat history, memories, images, or videos.</li>
                        <li>We <strong>do not</strong> upload, transmit, or store your organized media on our servers.</li>
                        <li>All operations, including parsing, EXIF metadata application, media organization, and duplicate removal, execute 100% locally on your machine.</li>
                    </ul>

                    <h2>2. Information We Collect</h2>
                    <p>Because the app runs locally, we collect minimal data to provide the service and fulfill legal/licensing obligations:</p>
                    <h3>a. Licensing & Purchase Information</h3>
                    <p>
                        When you purchase a subscription or license for Snapchat Organizer Pro/Premium tiers, our payment processor (Stripe) 
                        collects billing information such as your email address and payment details. We retain license keys and emails to validate 
                        your active subscription, manage hardware fingerprinting for activation, and send important service updates. 
                        We do not store your credit card information directly.
                    </p>

                    <h3>b. Crash Reports & Telemetry (Sentry)</h3>
                    <p>
                        To improve stability and user experience, the desktop application optionally utilizes Sentry for crash reporting. 
                        If the app encounters a fatal error, it will securely send an anonymous crash report. This report may include 
                        operating system version, app version, error stack traces, and non-identifying hardware usage. We strictly scrub 
                        all file paths and private data from these reports. You may opt out of crash reporting within the application settings.
                    </p>

                    <h3>c. Website Analytics</h3>
                    <p>
                        When you visit our website (snapchat-organizer-web), we may collect standard aggregate analytics (browser types, 
                        referring pages, timestamps) to understand traffic patterns and optimize the user experience.
                    </p>

                    <h2>3. How We Use Your Information</h2>
                    <ul>
                        <li><strong>License Verification:</strong> To ensure you receive the features you paid for and prevent unauthorized distribution.</li>
                        <li><strong>Customer Support:</strong> To assist you with troubleshooting using the contact email provided.</li>
                        <li><strong>App Improvement:</strong> To fix bugs and optimize performance based on crash logs.</li>
                    </ul>

                    <h2>4. Data Sharing & Third Parties</h2>
                    <p>
                        We will not sell, rent, or lease your personal information to third parties. We only share information with trusted 
                        third parties that help us operate our service (e.g., Stripe for payment processing, Sentry for error tracking) under 
                        strict confidentiality agreements.
                    </p>

                    <h2>5. Security</h2>
                    <p>
                        We take reasonable administrative, technical, and physical measures to safeguard your licensing data against unauthorized access. 
                        Because your actual Snapchat data never leaves your device via our Software, the security of that data remains your 
                        exclusive responsibility. We recommend keeping your personal device secure and encrypted.
                    </p>

                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or our data practices, please reach out to us. 
                        Snapchat Organizer is a product of MacHive.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};