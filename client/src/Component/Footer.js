import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

function Footer() {
    return (
        <div className="bg-white border-t-4 border-blue-500">
            <div className="container mx-auto py-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="font-bold text-lg">Logo</h2>
                        <p className="text-sm mt-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Link</h2>
                        <ul className="mt-2 space-y-2">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Dealer</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Contact</h2>
                        <ul className="mt-2 space-y-2">
                            <li><strong>Address:</strong> Malad West, Mumbai, 40064</li>
                            <li><strong>Contact:</strong> 8596741230</li>
                            <li><strong>Email:</strong> carandbike@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg">Social link</h2>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-black"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" className="text-black"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" className="text-black"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" className="text-black"><FontAwesomeIcon icon={faPinterest} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-blue-500 mt-8">
                <p className="text-center py-4 text-sm">Copyrights 2023 - 2024. Car and bike All Rights</p>
            </div>
        </div>
    )
}

export default Footer