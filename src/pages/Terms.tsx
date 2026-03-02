import React from 'react';
import { motion } from 'framer-motion';
import styles from './Legal.module.css';

export const Terms: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h1>Terms and Conditions</h1>
                    <p>Last Updated: March 2, 2026</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={styles.content}
                >
                    <p>
                        These Terms and Conditions ("Terms") govern your use of the Snapchat Organizer Desktop application, 
                        website, and related services (collectively, the "Software"). The Software is owned and operated 
                        by MacHive, an entity owned by Mohammed Haris ("Licensor", "we", or "us").
                    </p>
                    <p>
                        By downloading, installing, or using the Software, you agree to be bound by these Terms. 
                        If you do not agree to these Terms, do not install or use the Software.
                    </p>

                    <h2>1. License Grant</h2>
                    <p>
                        The Software is purely a proprietary product. It is licensed, not sold. Subject to your continuous 
                        compliance with these Terms and payment of any applicable subscription or licensing fees, we grant 
                        you a limited, non-exclusive, non-transferable, non-sublicensable, and revocable license to install 
                        and use the Software on your personal devices for your personal use.
                    </p>

                    <h2>2. Restrictions</h2>
                    <p>You agree that you will not, under any circumstances:</p>
                    <ul>
                        <li>Copy, modify, adapt, or create derivative works of the Software.</li>
                        <li>Reverse engineer, decompile, decrypt, disassemble, or derive the source code of the Software.</li>
                        <li>Distribute, sell, lease, sublicense, or otherwise transfer your license or the Software to third parties.</li>
                        <li>Remove or alter any copyright, trademark, or other proprietary rights notices contained in the Software.</li>
                        <li>Bypass, bypass, or attempt to bypass licensing mechanisms or subscription checks.</li>
                    </ul>

                    <h2>3. Subscriptions and Payments</h2>
                    <p>
                        Certain features (Pro/Premium tiers) require a paid subscription. Subscription fees are billed 
                        through our third-party payment processor (Stripe). By subscribing, you authorize us to charge 
                        your payment method on a recurring basis as outlined at the time of purchase. Subscriptions 
                        can be managed or canceled in accordance with the terms provided at checkout.
                    </p>

                    <h2>4. Intellectual Property Rights</h2>
                    <p>
                        Snapchat Organizer and MacHive. All title, ownership rights, and intellectual property rights in and 
                        to the Software (including any images, UI/UX, logic, code, and accompanying documentation) remain 
                        solely with Mohammed Haris / MacHive.
                    </p>
                    <p>
                        Disclaimer: "Snapchat" is a trademark of Snap Inc. We are not officially affiliated, 
                        associated, authorized, endorsed by, or in any way officially connected with Snap Inc. 
                        The Software is an independent tool built to help users manage their own legally obtained data exports.
                    </p>

                    <h2>5. User Data and Responsibilities</h2>
                    <p>
                        You acknowledge that the Software operates locally on your machine and that you are entirely 
                        responsible for backing up, maintaining, and securing your personal data and files prior to 
                        running the Software. While the Software aims to organize files efficiently, we take no 
                        responsibility for potential data loss resulting from local file modifications, moves, or duplicate deletions.
                    </p>

                    <h2>6. Disclaimer of Warranties</h2>
                    <p>
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
                        LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. 
                        WE DO NOT WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE FROM BUGS.
                    </p>

                    <h2>7. Limitation of Liability</h2>
                    <p>
                        IN NO EVENT SHALL MACHIVE OR MOHAMMED HARIS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
                        IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
                        OR THE USE OR OTHER DEALINGS IN THE SOFTWARE, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, 
                        SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES (SUCH AS LOSS OF DATA, DEVICE FAILURE, OR BUSINESS INTERRUPTION).
                    </p>

                    <h2>8. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms at any time. If we do, we will update the "Last Updated" 
                        date at the top of these Terms. Continuing to use the Software after changes are made constitutes 
                        your acceptance of the modified Terms.
                    </p>

                    <h2>9. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws applicable in your jurisdiction, 
                        without regard to its conflict of law provisions. Any disputes arising out of these Terms will be handled in 
                        the competent courts representing our operating jurisdiction.
                    </p>

                    <h2>10. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms, licensing, or the Software, please contact us. 
                        Snapchat Organizer is proudly developed by MacHive.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};