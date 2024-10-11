import React from 'react'
import { Link } from 'react-router-dom'; 
function Footer() {
    return (
        <footer className="mt-20 text-center text-gray-500 bg-gray-900 py-6">
        <p>© 2024 ChatApp. All rights reserved.</p>
        <p className="mt-4">
            <a href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</a> |{' '}
            <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
        </p>
        <p className="mt-4">
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GitHub
            </a> |{' '}
            <a href="https://www.linkedin.com/in/your-linkedin-username/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
            </a>
        </p>
    </footer>
    )
}

export default Footer
