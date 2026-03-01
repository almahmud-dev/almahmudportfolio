import { motion } from 'framer-motion'
import { FaCode, FaLightbulb, FaUsers, FaTachometerAlt, FaCheckCircle } from 'react-icons/fa'

const WhyChooseMe = ({ darkMode }) => {
    const reasons = [
        {
            id: 1,
            icon: <FaCode className="text-2xl" />,
            title: 'Clean & Scalable Code',
            desc: 'Writing reusable, maintainable React components following industry best practices and design patterns.',
            color: 'from-orange-500 to-amber-500',
        },
        {
            id: 2,
            icon: <FaLightbulb className="text-2xl" />,
            title: 'Problem Solving Mindset',
            desc: 'Tackling complex UI challenges with efficient solutions and innovative approaches.',
            color: 'from-amber-500 to-yellow-500',
        },
        {
            id: 3,
            icon: <FaUsers className="text-2xl" />,
            title: 'Team Collaboration',
            desc: 'Proven track record working in agile teams using Git, code reviews, and modern workflows.',
            color: 'from-orange-600 to-amber-600',
        },
        {
            id: 4,
            icon: <FaTachometerAlt className="text-2xl" />,
            title: 'Performance & Responsiveness',
            desc: 'Building lightning-fast, pixel-perfect interfaces optimized for all devices and screen sizes.',
            color: 'from-amber-600 to-orange-500',
        },
    ]

    const stats = [
        { label: 'Internship Experience', value: '3+', suffix: 'Months' },
        { label: 'Team Projects', value: '5+', suffix: 'Projects' },
        { label: 'Responsive Designs', value: '100%', suffix: 'Mobile Ready' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    }

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    }

    return (
        <section
            id="expertise"
            style={{
                backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
                transition: 'background-color 0.5s ease'
            }}
            className="relative pt-10 lg:pt-20 overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                    className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{
                        background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
                    }}
                />
                <div 
                    className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-10 blur-3xl"
                    style={{
                        background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                        style={{
                            backgroundColor: darkMode ? '#1e293b' : '#ffffff',
                            border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
                        }}
                    >
                        <FaCheckCircle className="text-orange-500" />
                        <span
                            className="text-sm font-medium"
                            style={{
                                color: darkMode ? '#cbd5e1' : '#64748b',
                            }}
                        >
                            Professional Excellence
                        </span>
                    </motion.div>

                    <h2
                        className="text-4xl sm:text-5xl font-bold mb-4 transition-colors duration-500"
                        style={{
                            color: darkMode ? '#f8fafc' : '#0f172a',
                        }}
                    >
                        Why{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            Choose Me?
                        </span>
                    </h2>
                    <p
                        className="max-w-2xl mx-auto text-base sm:text-lg transition-colors duration-500"
                        style={{
                            color: darkMode ? '#94a3b8' : '#64748b',
                        }}
                    >
                        Delivering high-quality React solutions with passion and precision
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                >
                    {reasons.map((reason) => (
                        <motion.div
                            key={reason.id}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3, ease: 'easeOut' }
                            }}
                            className="group relative"
                        >
                            {/* Gradient Border Effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                                style={{
                                    background: `linear-gradient(135deg, ${reason.color.includes('from-') ? '#f97316, #f59e0b' : reason.color})`,
                                    padding: '2px',
                                }}
                            />
                            
                            <div
                                style={{
                                    background: darkMode
                                        ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                                        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                                    border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
                                    transition: 'all 0.5s ease'
                                }}
                                className="relative rounded-2xl p-7 h-full duration-300 hover:border-transparent transition-all overflow-hidden shadow-sm"
                            >
                                {/* Hover Glow Effect */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"
                                    style={{
                                        background: 'linear-gradient(135deg, #f97316, #f59e0b)',
                                    }}
                                />

                                {/* Icon Container - */}
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                                    className="inline-flex p-4 rounded-xl mb-5 shadow-lg relative z-10 transition-all duration-500"
                                    style={{
                                        background: darkMode 
                                            ? 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)' 
                                            : '#fff7ed', 
                                    }}
                                >
                                    <div 
                                        style={{
                                            // ডার্ক মোডে সরাসরি সাদা, লাইট মোডে গ্রেডিয়েন্ট
                                            color: darkMode ? '#ffffff' : '#f97316',
                                            background: darkMode ? 'none' : 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
                                            WebkitBackgroundClip: darkMode ? 'unset' : 'text',
                                            WebkitTextFillColor: darkMode ? 'unset' : 'transparent',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {reason.icon}
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <h3
                                    className="text-xl font-bold mb-3 transition-colors duration-500"
                                    style={{
                                        color: darkMode ? '#f8fafc' : '#0f172a',
                                    }}
                                >
                                    {reason.title}
                                </h3>

                                <p
                                    className="text-sm leading-relaxed transition-colors duration-500"
                                    style={{
                                        color: darkMode ? '#94a3b8' : '#64748b',
                                    }}
                                >
                                    {reason.desc}
                                </p>

                                {/* Bottom Accent Line */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                                    style={{
                                        background: 'linear-gradient(90deg, #f97316, #f59e0b)',
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section  */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative"
                >
                    <div
                        style={{
                            background: darkMode
                                ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                                : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                            border: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`,
                            transition: 'all 0.5s ease'
                        }}
                        className="rounded-2xl p-8 sm:p-10 shadow-xl"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.6, 
                                        delay: index * 0.15,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    className="text-center relative group"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div
                                            className="text-4xl sm:text-5xl font-extrabold mb-2 transition-all duration-500"
                                            style={{
                                                // কালার আটকে যাওয়ার সমস্যা সমাধানের জন্য এই লজিক
                                                color: darkMode ? 'transparent' : '#f97316',
                                                backgroundImage: darkMode ? 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)' : 'none',
                                                WebkitBackgroundClip: darkMode ? 'text' : 'unset',
                                                WebkitTextFillColor: darkMode ? 'transparent' : 'unset',
                                            }}
                                        >
                                            {stat.value}
                                        </div>
                                        <p
                                            className="text-xs font-semibold uppercase tracking-wider mb-1"
                                            style={{
                                                color: darkMode ? '#cbd5e1' : '#64748b',
                                            }}
                                        >
                                            {stat.label}
                                        </p>
                                        <p
                                            className="text-xs"
                                            style={{
                                                color: darkMode ? '#64748b' : '#94a3b8',
                                            }}
                                        >
                                            {stat.suffix}
                                        </p>
                                    </motion.div>

                                    {/* Divider */}
                                    {index < stats.length - 1 && (
                                        <div
                                            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16"
                                            style={{
                                                background: darkMode ? '#334155' : '#e2e8f0',
                                            }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseMe