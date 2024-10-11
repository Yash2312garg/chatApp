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
            <div className="px-6 py-10">
                <main className="mt-10 text-center relative overflow-hidden bg-gradient-to-r rounded-lg from-gray-800 to-gray-900 text-white py-20 h-screen flex flex-col justify-center items-center">
                    <div className="absolute inset-0 opacity-20 bg-gray-800"></div> {/* Optional darker overlay */}
                    <h2 className="text-4xl font-bold mb-4 animate-fade-in-up relative z-10">Stay <span className='text-[#16A64A]'>Connected</span>, Anytime, Anywhere</h2>
                    <p className={`text-lg mb-8 transition-opacity duration-300  ease-in-out relative z-10 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                        {messages[currentMessageIndex]}
                    </p>
                    <a
                        href="/login"
                        className="bg-gray-500 w-[200px] text-white px-8 py-4 rounded-full text-lg hover:scale-110 transition-all duration-300 ease-out transform shadow-lg hover:bg-[#16A64A] hover:shadow-2xl relative z-10"
                    >
                        Get Started
                    </a>
                </main>


                {/* Features */}
                <section ref={sectionRef} className="mt-20 py-10  rounded-lg ">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Digital chat?</h3>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 transition-transform duration-500 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
                        {[
                            { title: "Secure Messaging", description: "End-to-end encryption to keep your conversations private." },
                            { title: "Group Chats", description: "Stay in touch with all your friends and family with group chats." },
                            { title: "File Sharing", description: "Easily share photos, videos, and documents securely." },
                        ].map((feature, index) => (
                            <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:shadow-2xl hover:scale-105 hover:rotate-1">
                                <h4 className="text-xl font-semibold mb-4 text-white text-center">{feature.title}</h4>
                                <p className="text-gray-300 text-center mb-2">
                                    {feature.description}
                                </p>
                                <button className="mt-auto bg-[#16A64A] text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>
                </section>



                {/* FAQ Section */}
                <section className="mt-20 py-10 bg-gray-900 rounded-lg shadow-lg">
                    <h3 className="text-4xl font-bold mb-8 text-center text-[#16A64A]">Frequently Asked Questions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { question: "Is Digital chat free to use?", answer: "Yes! We offer a free plan with all the basic features you need to stay connected." },
                            { question: "Is my data secure?", answer: "Absolutely! We use end-to-end encryption to protect your conversations and files." },
                            { question: "How do I reset my password?", answer: "You can reset your password by going to the login page and clicking on the 'Forgot Password?' link." },
                            { question: "Can I use Digital chat on multiple devices?", answer: "Yes, you can log into your account on multiple devices and stay connected seamlessly." },
                        ].map((faq, index) => (
                            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                                <h4 className="text-xl font-semibold mb-3 text-white">{faq.question}</h4>
                                <p className="text-gray-400">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Contact Form */}
                < ContactForm />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Homepage;
