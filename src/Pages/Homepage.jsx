import React, { useState, useEffect, useRef } from 'react';
import Nav from '../Components/Homepage/Nav';
import "./Homepage.css"
import ContactForm from '../Components/Homepage/ContactUs';
import Footer from '../Components/Homepage/Footer';

const messages = [
    "Digital chat makes it easy to communicate with friends, family, and colleagues securely and effortlessly.",
    "Join the millions of users who trust Digital chat for real-time messaging and file sharing.",
    "Stay connected wherever you are with Digital chat's seamless experience across devices.",
    "Enjoy secure, real-time messaging with advanced encryption features to protect your privacy.",
];

function Homepage() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); // Start fading out
            setTimeout(() => {
                setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
                setFade(false); // Start fading in
            }, 300); // Match this to your fade-out duration
        }, 5000); // Change message every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing after becoming visible
                }
            });
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div>
            <Nav />
            <div className="font-sans">
                {/* Hero Section with Light Background */}
                <div
                    style={{
                        backgroundColor: 'var(--color-bg-content)',
                        color: 'var(--color-text-body)'
                    }}
                    className="relative py-20 px-4 text-center flex flex-col items-center justify-center min-h-[70vh]"
                >
                    <main>
                        <div
                            style={{ backgroundColor: 'var(--color-bg-selected)' }}
                            className="absolute inset-0 opacity-30"
                        ></div>
                        <h2 className="text-4xl font-bold mb-4 animate-fade-in-up relative z-10">
                            Stay <span style={{ color: 'var(--color-brand-secondary)' }}>Connected</span>, Anytime, Anywhere
                        </h2>
                        <p
                            style={{ color: 'var(--color-text-body)' }}
                            className={`text-lg mb-8 transition-opacity duration-300 ease-in-out relative z-10 ${fade ? 'opacity-0' : 'opacity-100'}`}
                        >
                            {messages[currentMessageIndex]}
                        </p>
                        <a
                            href="/login"
                            style={{
                                backgroundColor: 'var(--color-btn-primary)',
                                color: 'var(--color-btn-primary-text)',
                                boxShadow: 'var(--shadow-md)'
                            }}
                            className="w-[200px] px-8 py-4 rounded-full text-lg hover:scale-110 transition-all duration-300 ease-out transform relative z-10"
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-btn-primary-hover)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-btn-primary)'}
                        >
                            Get Started
                        </a>
                    </main>
                </div>

                {/* Features */}
                <section
                    ref={sectionRef}
                    className="mt-20 py-10 px-4 max-w-7xl mx-auto"
                >
                    <h3
                        style={{ color: 'var(--color-heading-h1)' }}
                        className="text-3xl font-bold mb-8 text-center"
                    >
                        Why Choose Digital Chat?
                    </h3>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 transition-transform duration-500 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
                        {[
                            {
                                title: "Secure Messaging",
                                description: "End-to-end encryption to keep your conversations private.",
                                icon: "🔒"
                            },
                            {
                                title: "Group Chats",
                                description: "Stay in touch with all your friends and family with group chats.",
                                icon: "👥"
                            },
                            {
                                title: "File Sharing",
                                description: "Easily share photos, videos, and documents securely.",
                                icon: "📁"
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: 'var(--color-bg-card)',
                                    borderColor: 'var(--color-border-subtle)',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                                className="flex flex-col items-center p-6 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 border"
                                onMouseOver={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-lg)'}
                                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-sm)'}
                            >
                                <div className="text-3xl mb-4">{feature.icon}</div>
                                <h4
                                    style={{ color: 'var(--color-heading-h3)' }}
                                    className="text-xl font-semibold mb-4 text-center"
                                >
                                    {feature.title}
                                </h4>
                                <p
                                    style={{ color: 'var(--color-text-body)' }}
                                    className="text-center mb-4"
                                >
                                    {feature.description}
                                </p>
                                <button
                                    style={{
                                        backgroundColor: 'var(--color-btn-secondary)',
                                        color: 'var(--color-btn-secondary-text)'
                                    }}
                                    className="mt-auto px-4 py-2 rounded transition-colors duration-300"
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-btn-secondary-hover)'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-btn-secondary)'}
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section
                    style={{
                        backgroundColor: 'var(--color-status-info-light)',
                        boxShadow: 'var(--shadow-sm)'
                    }}
                    className="mt-20 py-10 px-4 rounded-lg max-w-7xl mx-auto"
                >
                    <h3
                        style={{ color: 'var(--color-heading-h3)' }}
                        className="text-4xl font-bold mb-8 text-center"
                    >
                        Frequently Asked Questions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                question: "Is Digital Chat free to use?",
                                answer: "Yes! We offer a free plan with all the basic features you need to stay connected."
                            },
                            {
                                question: "Is my data secure?",
                                answer: "Absolutely! We use end-to-end encryption to protect your conversations and files."
                            },
                            {
                                question: "How do I reset my password?",
                                answer: "You can reset your password by going to the login page and clicking on the 'Forgot Password?' link."
                            },
                            {
                                question: "Can I use Digital Chat on multiple devices?",
                                answer: "Yes, you can log into your account on multiple devices and stay connected seamlessly."
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: 'var(--color-bg-content)',
                                    borderColor: 'var(--color-brand-neutral)',
                                    boxShadow: 'var(--shadow-xs)'
                                }}
                                className="p-6 rounded-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 border"
                                onMouseOver={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-md)'}
                                onMouseOut={(e) => e.currentTarget.style.boxShadow = 'var(--shadow-xs)'}
                            >
                                <h4
                                    style={{ color: 'var(--color-brand-primary)' }}
                                    className="text-xl font-semibold mb-3"
                                >
                                    {faq.question}
                                </h4>
                                <p style={{ color: 'var(--color-text-secondary)' }}>
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section
                    style={{
                        background: `linear-gradient(to right, var(--color-brand-primary), var(--color-brand-primary-dark))`,
                        color: 'var(--color-text-inverse)',
                        boxShadow: 'var(--shadow-lg)'
                    }}
                    className="mt-20 py-16 px-4 text-center rounded-lg max-w-7xl mx-auto"
                >
                    <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Join millions of users worldwide who trust Digital Chat for their communication needs.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/signup"
                            style={{
                                backgroundColor: 'var(--color-brand-tertiary)',
                                color: 'var(--color-text-inverse)',
                                boxShadow: 'var(--shadow-md)'
                            }}
                            className="px-8 py-3 rounded-full text-lg transition-colors duration-300"
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-tertiary-light)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-tertiary)'}
                        >
                            Sign Up Free
                        </a>
                        <a
                            href="/features"
                            style={{
                                backgroundColor: 'transparent',
                                borderColor: 'var(--color-brand-neutral)',
                                color: 'var(--color-text-inverse)'
                            }}
                            className="px-8 py-3 rounded-full text-lg border-2 transition-colors duration-300"
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-primary-dark)'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            Learn More
                        </a>
                    </div>
                </section>

                {/* Contact Form */}
                < ContactForm />
            </div >
            {/* Footer */}
            < Footer />
        </div >
    );
}

export default Homepage;
