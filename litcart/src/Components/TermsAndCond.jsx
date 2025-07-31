import React from 'react'
import logoUsed from './homepage/logoused.jpg';
 import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const TermsAndCond = () => {
 
    
const ScrollHandler = () => {
  useEffect(() => {
    // Smooth scrolling
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
      }
    };

    anchorLinks.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Scroll listener for highlighting nav links
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.anchor-link');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + 100;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const currentId = `#${section.id}`;

          navLinks.forEach((link) => {
            link.classList.remove('font-bold', 'text-indigo-800');
            if (link.getAttribute('href') === currentId) {
              link.classList.add('font-bold', 'text-indigo-800');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}

 
 return (
<div className='bg-[#FFF0F5]'>
    <div className="sticky-nav bg-black/95 shadow-sm">
        <div className="container mx-auto pt-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div
  className="w-20 h-10 bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${logoUsed})` }}></div>
                </div>
                <div>
                    <Link to="/" className="text-emerald-500  font-semibold  hover:text-white">Back to Home</Link>
                </div>
            </div>
        </div>
    </div>

    <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
            
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
                <p className="text-gray-600 mb-4 flex items-left">Last Updated: <span className="font-medium">July 13, 2025</span></p>
                <div className="last-updated inline-block">
                    <p className="text-sm text-gray-600 flex items-left">These terms were last updated and are effective as of the date shown above.</p>
                </div>
            </div>

            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
                <h3 className="font-medium text-lg mb-3">Quick Links:</h3>
                <div className="flex flex-wrap gap-2">
                    <a href="#introduction" className="anchor-link text-indigo-600">1. Introduction</a>
                    <span className="text-gray-400">|</span>
                    <a href="#account-terms" className="anchor-link text-indigo-600">2. Account Terms</a>
                    <span className="text-gray-400">|</span>
                    <a href="#ordering" className="anchor-link text-indigo-600">3. Ordering</a>
                    <span className="text-gray-400">|</span>
                    <a href="#pricing" className="anchor-link text-indigo-600">4. Pricing</a>
                    <span className="text-gray-400">|</span>
                    <a href="#returns" className="anchor-link text-indigo-600">5. Returns</a>
                    <span className="text-gray-400">|</span>
                    <a href="#intellectual-property" className="anchor-link text-indigo-600">6. Intellectual Property</a>
                    <span className="text-gray-400">|</span>
                    <a href="#user-conduct" className="anchor-link text-indigo-600">7. User Conduct</a>
                    <span className="text-gray-400">|</span>
                    <a href="#limitation-liability" className="anchor-link text-indigo-600">8. Limitation of Liability</a>
                    <span className="text-gray-400">|</span>
                    <a href="#governing-law" className="anchor-link text-indigo-600">9. Governing Law</a>
                </div>
            </div>

            
            <div className="bg-[#FFE4E1] p-6 rounded-lg shadow-sm text-left">
                <section id="introduction" className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                    <h2 className="mb-4 flex items-left">Welcome to LitCart ("we", "our", or "us"). These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using LitCart, you agree to be bound by these Terms.</h2>
                    
                    <div className="highlight-box">
                        <h2 className="font-medium flex items-left">Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our website or services.</h2>
                    </div>
                    
                    <h2 className='flex items-left mt-1'>These Terms apply to all visitors, users, and others who access or use our services. We reserve the right to modify these Terms at any time. Your continued use of LitCart after changes constitutes acceptance of the new Terms.</h2>
                </section>

                <section id="account-terms" className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Account Terms</h2>
                        <p className="mb-4 flex items-left">To access certain features of LitCart, you may be required to create an account.</p>

                        <ul className="list-disc pl-6 mb-4 space-y-2">
                          <li>You must provide accurate and complete information when creating an account</li>
                          <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                          <li>You are responsible for all activities that occur under your account</li>
                          <li>We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion</li>
                        </ul>

                        <h2 className="font-medium items-left">
                          You may not use another user's account without permission. You must immediately notify us of any unauthorized use of your account or other security breaches.
                        </h2>
                </section>


                <section id="ordering" className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Ordering and Purchases</h2>
                    <p className="mb-4 flex items-left">By placing an order through LitCart, you represent that you are legally capable of entering into binding contracts.</p>
                    
                    <h3 className="font-medium text-lg mb-2">Order Process:</h3>
                    <ol className="list-decimal pl-6 mb-4 space-y-2">
                        <li>Select books and add them to your cart</li>
                        <li>Review items in your cart and proceed to checkout</li>
                        <li>Provide accurate shipping and payment information</li>
                        <li>Review and confirm your order</li>
                        <li>Receive order confirmation via email</li>
                    </ol>
                    
                    <h3 className="font-medium text-lg mb-2">Order Acceptance:</h3>
                    <h2 className="mb-4 flex items-left">Your order constitutes an offer to purchase. We reserve the right to accept or decline your order for any reason, including but not limited to:</h2>
                    
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Pricing errors</li>
                        <li>Product unavailability</li>
                        <li>Suspected fraudulent activity</li>
                        <li>Shipping restrictions</li>
                    </ul>
                </section>

                <section id="pricing" className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Pricing and Payment</h2>
                    <p className="mb-4 flex items-left">All prices displayed on LitCart are in Rupees (₹) and include applicable taxes unless otherwise stated.</p>
                    
                    <div className="highlight-box">
                        <h2 className="font-medium mb-4">We strive to display accurate pricing information but may correct errors in pricing. If an order's correct price is different from what was displayed, we may cancel your order and notify you.</h2>
                    </div>
                    
                    <h3 className="font-medium text-lg mb-2">Payment Methods:</h3>
                    <p className="mb-4 flex items-left">We accept various payment methods including:</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center bg-gray-100 px-3 py-2 rounded">
                            <img src="https://thumb.ac-illust.com/d3/d36b69e25936e0208a07e2653fce0342_w.jpeg" alt="Credit card icon" className="mr-2 w-[200px] h-auto" />
                            <span>Credit Cards</span>
                        </div>
                        <div className="flex items-center bg-gray-100 px-3 py-2 rounded">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMygmfcEEjx2eeafyWmPKoxt69_LBBVDZ4Wg&s" alt="Debit card icon" className="mr-2 w-[200px] h-auto"/>
                            <span>Debit Cards</span>
                        </div>
                        <div className="flex items-center bg-gray-100 px-3 py-2 rounded">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png" alt="UPI icon" className="mr-2 w-[200px] h-auto"/>
                            <span>UPI</span>
                        </div>
                        <div className="flex items-center bg-gray-100 px-3 py-2 rounded">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRecjRFd-nuM73vNDVGdSfJWq4MIQIwTGxbw&s" alt="Net Banking icon" className="mr-2 w-[200px] h-auto" />
                            <span>Net Banking</span>
                        </div>
                    </div>
                    
                    <h2 className="mb-4">Payment authorization occurs at the time of order placement. Your payment method will be charged when we ship your order.</h2>
                </section>

                <section id="returns" className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Returns and Refunds</h2>
                    <p className="mb-4 flex items-left">Our return policy is designed to ensure customer satisfaction while protecting against abuse.</p>
                    
                    <h3 className="font-medium text-lg mb-2">General Return Policy:</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Books must be returned within 15 days of delivery</li>
                        <li>Books must be in original condition with no markings or damage</li>
                        <li>Original invoice must accompany all returns</li>
                        <li>Digital products are non-refundable</li>
                    </ul>
                    
                    <div className="highlight-box">
                        <h4 className="font-medium mb-2">Damaged or Defective Items:</h4>
                        <h2 >If you receive a damaged or defective book, contact us within 48 hours of delivery with photos. We will provide a replacement or full refund.</h2>
                    </div>
                    
                    <h3 className="font-medium text-lg mb-2 mt-4">Refund Processing:</h3>
                    <p className="mb-4 flex items-left">Refunds will be issued to the original payment method and may take 7-14 business days to process.</p>
                </section>

                <section id="intellectual-property" className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
                    <h2 className="mb-4">All content on LitCart, including text, graphics, logos, and software, is our property or of our content suppliers and protected by copyright laws.</h2>
                    
                    <div className="highlight-box">
                        <h2 className="font-medium">You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any LitCart content without express written permission.</h2>
                    </div>
                    
                    <h3 className="font-medium text-lg mb-2 mt-4">User  Content:</h3>
                    <h2 className="mb-4">You retain ownership of content you submit (reviews, comments, etc.), but grant us a worldwide, non-exclusive license to use, reproduce, and display such content.</h2>
                </section>

                <section id="user-conduct" className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. User Conduct</h2>
                    <p className="mb-4 flex items-left">When using LitCart, you agree not to:</p>
                    
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Violate any laws or regulations</li>
                        <li>Infringe on others' rights</li>
                        <li>Use BookVerse for any unlawful purpose</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Engage in fraudulent activity</li>
                        <li>Submit false or misleading information</li>
                        <li>Interfere with other users' enjoyment of LitCart</li>
                    </ul>
                    
                    <div>
                        <h2 className="font-medium">We reserve the right to investigate violations of these Terms and may consult with law enforcement regarding any illegal activity.</h2>
                    </div>
                </section>

                <section id="limitation-liability" className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Limitation of Liability</h2>
                    <p className="mb-4 flex items-left">To the maximum extent permitted by law, BookVerse and its affiliates shall not be liable for:</p>
                    
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Any indirect, incidental, special or consequential damages</li>
                        <li>Loss of profits, data, use or goodwill</li>
                        <li>Damages related to unauthorized access or use</li>
                        <li>Third-party products or services</li>
                    </ul>
                    
                    <h2 className="mb-4 ">Our total liability for any claims related to these Terms or your use of LitCart shall not exceed the amount you paid us in the past six months.</h2>
                    
                    <div className="highlight-box">
                        <h2 className="font-medium">Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so these limitations may not apply to you.</h2>
                    </div>
                </section>

                <section id="governing-law" className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
                    <h2 className="mb-4">These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</h2>
                    
                    <div className="highlight-box">
                        <h2 className="font-medium ">Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.</h2>
                    </div>
                    
                    <h3 className="font-medium text-lg mb-2 mt-4">Contact Information:</h3>
                    <p className='flex items-left'>If you have any questions about these Terms, please contact us:</p>
                    <p className='flex items-left mt-2'><strong>Email:</strong> legal@litcart.com</p>
                    <p className='flex items-left'><strong>Address:</strong> LitCart Legal Department, Patna, Bihar</p>
                </section>
            </div>

            <div className="text-center text-sm text-gray-500 mt-8">
                <p>© 2025 LitCart. All rights reserved.</p>
            </div>
        </div>
    </div>
    </div>
    

  )
}

export default TermsAndCond
