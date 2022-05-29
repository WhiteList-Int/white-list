import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../animation-variants.js';
import { transitions } from '../../page-transitions.js';
import Img2 from '../images/white-list-icon-gradient.svg';
import Footer from '../essentials/Footer';
import NavbarFixed from '../essentials/NavbarFixed';

//reused css from termsservice :)
function PrivacyPolicy() {
    return (
        <>
            <NavbarFixed/>
            <body className="terms-service">
                {window.scroll(0,0)}
                
                <motion.div 
                    className="terms-service-container"
                    initial="slideOutY" 
                    animate="slideInY"
                    variants={variants}
                    transition={transitions.tweenEaseOutFast}    
                >
                    <img className = "terms-service-bg" src = {Img2} alt="WhiteList"></img>
                    <h1 className="terms-service-h1">Data Privacy</h1>
                    <p className="terms-service-p">WhiteList (hereinafter referred to as "WhiteList", "WhiteList.ph", "We", “Our” or "us") operates a platform that helps properties provide technology-enabled and community-driven coliving spaces for students and professionals who need safe and quality places to live ("Platform").
                    Data protection is very important to us. This page is intended to help you understand why and how we use personal data. If you do not agree to any part of this Privacy Policy, then we cannot provide the Platform or our services to you, and you should stop accessing the Platform and deactivate your WhiteList account. You can find out more about how to deactivate your WhiteList account at (link to the Help Center)</p>
                    
                    <h2 className="terms-service-h2">DEFINITIONS</h2>
                    <p className="terms-service-p2">Where the definition of a term does not appear in this Privacy Policy (such as "Listing", "Rooms", "Content," "Services" etc.), it shall be given its definition as outlined in our Terms of Service 
                    <br /><br />
                    "Aggregated Information" means information about all of our users or specific groups or categories of users that we combine together so that it no longer identifies or references an individual user.
                    <br /> <br />
                    "Data Controller" means WhiteList, the company responsible for the use and processing of Personal Information.
                    <br /> <br />
                    "Personal Information" means information relating to a living individual who is or can be identified either from that information or from that information in conjunction with other information that is in, or is likely to come into, the possession of the Data Controller.</p>

                    <h2 className="terms-service-h2">WHAT TYPES OF INFORMATION DOES WhiteList GATHER ABOUT ITS USERS?</h2>
                    <p className="terms-service-p2">
                    These are information that you give us, we receive, store and process and that you make available to us when accessing or using our Platform and Services. Examples include when you:
                    <br /><br />
                    1.1. Fill in any form on the Platform, such as when you register or update the details of your user account
                    <br /><br />
                    1.2. Access or use the Platform, such as to search for Listings, make or accept bookings, pay for Listings, book or pay for any associated services that may be available (such as but not limited to cleaning), post comments or reviews, or communicate with other users;
                    <br /><br />
                    1.3. Link your account on a third party site (e.g. Facebook) to your WhiteList account, in which case we will obtain the Personal Information that you have provided to the third party site, to the extent allowed by your settings with the third party site and authorized by you; and
                    <br /><br />
                    1.4. Communicate with WhiteList.
                    </p>

                    <h2 className="terms-service-h2">Log Data</h2>
                    <p className="terms-service-p2"> We may also receive, store and process Log Data, which is information that is automatically recorded by our servers whenever you access or use the Platform, regardless of whether you are registered with WhiteList or logged in to your WhiteList account, such as your IP Address, the date and time you access or use the Platform, the hardware and software you are using, referring and exit pages and URLs, the number of clicks, pages viewed and the order of those pages, and the amount of time spent on particular pages.</p>

                    <h2 className="terms-service-h2">Cookies and other Tracking Technologies</h2>
                    <p className="terms-service-p2">WhiteList uses cookies and other similar technologies, such as mobile application identifiers, on the Platform. We may also allow our business partners to use their cookies and other tracking technologies on the Platform. As a result, when you access or use the Platform, you will provide or make available certain information to us and to our business partners.</p>

                    <h2 className="terms-service-h2">Third-Party Social Plugins</h2>
                    <p className="terms-service-p2">While you may disable the usage of cookies through your browser settings, we do not change our practices in response to a "Do Not Track" signal in the HTTP header from your browser. We track your activities if you click on advertisements for WhiteList services on third party platforms such as search engines and social networks, and may use analytics to track what you do in response to those advertisements.
                    <br /><br />
                    We may, either directly or through third party companies and individuals we engage with to provide services to us, also continue to track your behavior on our own Platform for purposes of our own customer support, analytics, research, product development, fraud prevention, risk assessment, regulatory compliance, investigation, as well as to enable you to use and access the Platform and pay for your activities on the Platform. We may also, either directly or through third party companies and individuals we engage with to provide services to us, track your behavior on our own Platform to market and advertise our services to you on the Platform and third party websites. Third parties that use cookies and other tracking technologies to deliver targeted advertisements on our Platform and/or third party websites may offer you a way to prevent such targeted advertisements by opting-out at the websites of industry groups such as the  Network Advertising Initiative and/or the Digital Advertising Alliance. You may also be able to control advertising cookies provided by publishers with the use of tools such as Google's Ad Preference Manager. Please note that even if you choose to opt-out of receiving targeted advertising, you may still receive advertising on or about the Platform but it will not be tailored to your interests.
                    <br /><br />
                    Third parties may not collect information about users' online activities on the Platform except as described in this policy and our Cookie Policy. Our Platform may use social plugins which are provided and operated by third-party companies, such as Facebook's Like Button. As a result of this, you may send to the third-party company the information that you are viewing a certain part of our Platform. If you are not logged into your account with the third-party company, the third party may not know your identity. If you are logged into your account with the third-party company, the third party may be able to link information about your visit to our Platform to your account with them. Similarly, your interactions with the social plugin may be recorded by the third party. Please refer to the third party's privacy policy to find out more about its data practices, such as what data is collected about you and how the third party uses such data. </p>

                    <h2 className="terms-service-h2">HOW WhiteList USES AND PROCESSES THE INFORMATION THAT YOU PROVIDE OR MAKE AVAILABLE</h2>
                    <p className="terms-service-p2">We use, store and process Information about you for the following general purposes:
                    <br /><br />
                    To enable you access and use of the Platform;
                    <br /><br />
                    To operate, protect, improve, and optimize the Platform, WhiteList's business, and our users' experience, with activities such as to performing analytics, conducting research, personalizing or otherwise customizing your experience, and for advertising and marketing;
                    <br /><br />
                    To help create and maintain a trusted and safer environment on the Platform and Services, such as detecting and preventing fraud, conducting investigations and risk assessments, verifying the address of your listings, verifying any identifications provided by you, and conducting checks against databases such as public government databases;
                    <br /><br />
                    To send you service, support and administrative messages, reminders, technical notices, updates, security alerts, and information requested by you;
                    <br /><br />
                    Where we have your consent, to send you marketing and promotional messages and other information that may be of interest to you, including information about WhiteList or general promotions for partner campaigns and services. You can unsubscribe or opt-out from receiving these communications in your settings (in the "Account" section) when you login to your WhiteList account;
                    <br /><br />
                    To administer referral programs, rewards, surveys, sweepstakes, contests, or other promotional activities or events sponsored or managed by WhiteList or our business partners; and
                    <br /><br />
                    To comply with our legal obligations, resolve any disputes that we may have with any of our users, and enforce our agreements with third parties. </p>

                    <h2 className="terms-service-h2">HOW WhiteList USES AND PROCESSES USER COMMUNICATIONS</h2>
                    <p className="terms-service-p2">We may, either directly or through third party companies and individuals we engage with to provide services to us, review, scan, or analyze your communications with other users exchanged via the Platform for fraud prevention, risk assessment, regulatory compliance, investigation, product development, research and customer support purposes. By using the Platform, you consent that WhiteList, in its sole discretion, may, either directly or through third party companies and individuals we engage with to provide services to us, review, scan, analyze, and store your communications, whether done manually or through automated means. For example, as part of our fraud prevention efforts, the Platform may scan and analyze your messages to mask contact information and references to other websites. This helps to prevent fraudulent actors from asking Renters to send them money outside of the Platform with methods such as bank transfer or other money transfer methods. We may also scan, review or analyze messages for research and product development purposes to help make search, booking and user communications more efficient and effective, as well as to debug, improve and expand product offerings. We will not review, scan, or analyze your communications for sending third party marketing messages to you. We will also not sell these reviews or analyses of communications to third parties. We will use automated methods to carry out these reviews or analyses where reasonably possible. However, from time to time we may have to manually review some communications. </p>

                    <h2 className="terms-service-h2">WHEN WhiteList DISCLOSES OR SHARES PERSONAL INFORMATION, AND TO WHOM</h2>
                    <p className="terms-service-p2">IMPORTANT: When you use the Platform, your data may be sent to the United States and possibly other countries. </p>

                    <h2 className="terms-service-h2">Your Personal Information may be disclosed as follows:</h2>
                    <p className="terms-service-p2">Parts of your public profile page that contain some Personal Information may be displayed in other parts of the Platform to other users for marketing purposes or to the extent necessary to operate and manage referral and rewards programs.
                    <br /><br />
                    Your public Listing page will always include some minimum information such as the city and neighborhood where the Accommodation is located, your listing description, your calendar availability, your public profile photo and your responsiveness in replying to Renters' queries. Your public Listing page may also include aggregated demand information (such as number of page views over a period of time). Parts of your public Listing page may be displayed in other parts of the Platform to other users for marketing purposes. The Platform may also display the Accommodation's approximate geographic location on a map, such that a user can see the general area of the Accommodation.
                    <br /><br />
                    The Platform allows your public profile and public Listing pages to be included in search engines, in which case your public profile and public Listing pages will be indexed by search engines and may be published as search results. This option is enabled by default, and you may opt out of this feature by changing your settings on the Platform. If you change your settings or the information on your public profile or public Listing pages, third-party search engines may not update their databases quickly or at all. We do not control the practices of third-party search engines, and they may use caches containing outdated information, including any information indexed by the search engine before you change your settings or the information on your public profile or public Listing pages.
                    <br /><br />
                    When you submit a request to book an Accommodation, your full name will become visible to the Landlord. In addition, if you agree to be contacted by the Landlord by phone when submitting your request and the Landlord decides to do so, WhiteList will call your phone number first, before connecting you with the Landlord. We will not share your phone number unless there is a confirmed booking; if there is a confirmed booking, your phone number will become visible to the Landlord/Renter, who may call you directly.
                    <br /><br />
                    When your request to book an Accommodation is accepted by the Landlord or when you accept a Renter's request to book your Accommodation, we will disclose some of your Personal Information to the Landlord or Renter. However, your billing and payout information will never be shared with another user.
                    <br /><br />
                    When a Renter stays at your Accommodation or when you stay at a Landlord's Accommodation, we will ask you to review the Renter or the Accommodation. If you choose to provide a review, your review may be public on the Platform.
                    <br /><br />
                    You may link your account on a third party social networking site to your WhiteList account. We refer to a person's contacts on these third party sites as "Friends". When you create this linkage:
                    <br /><br />
                    Some of the information you provide to us from the linking of your accounts may be published on your WhiteList account profile;
                    <br /><br />
                    Your activities on the Platform may be displayed to your Friends on the Platform and/or that third party site;
                    <br /><br />
                    Other WhiteList users may be able to see any common Friends that you may have with them, or that you are a Friend of their Friend if applicable;
                    <br /><br />
                    WhiteList users may be able to see any schools, hometowns or other groups you have in common with them as listed on your linked social networking site(s); and
                    <br /><br />
                    The information you provide to us from the linking of your accounts may be stored, processed and transmitted for fraud prevention and risk assessment purposes.
                    <br /><br />
                    The publication and display of information that you provide to WhiteList through this linkage is subject to your settings and authorizations on the Platform and the third party site.
                    <br /><br />
                    We may distribute parts of the Platform (including your Listing) for display on sites operated by WhiteList's business partners and affiliates, using technologies such as HTML widgets. If and when your Listings are displayed on a partner's site, information from your public profile page may also be displayed.
                    <br /><br />
                    We may allow our related entities such as our subsidiaries, and their employees, to use and process your Personal Information in the same way and to the same extent that we are permitted to under this Privacy Policy. These related entities comply with the same obligations that we have to protect your Personal Information under this Privacy Policy.
                    <br /><br />
                    We may also engage third party companies and individuals, who may be located outside of the EEA, to provide services to us, including but not limited to technology services and services to help verify your identification, to conduct checks against databases such as public government databases (where legally allowed), to otherwise assist us with fraud prevention and risk assessment, to assist us with customer service, and to facilitate the payments or reimbursements you request (such as Concur and American Express). We may provide Personal Information about you to these third parties, or give them access to this Personal Information, for the limited purpose of allowing them to provide these services. We will ensure that such third parties have contractual obligations to protect this Personal Information and to not use it for unrelated purposes.
                    <br /><br />
                    For any jurisdiction in which we facilitate the Collection and Remittance of Taxes or Opt-in for Landlord Remittance of Taxes as described in the "Taxes" section of the Terms of Service, Landlords and Renters expressly grant us permission, without further notice, to store, transfer and disclose data and other information relating to them or to their Transactions, Bookings, Listings and Occupancy Taxes, including, but not limited to, personally identifiable information such as Landlord or Renter's name, listing addresses, transaction dates and amounts, tax identification number(s), the amount of taxes received by Landlords from Renters, or allegedly due, contact information, and similar information to the relevant Tax Authority.
                    <br /><br />
                    You acknowledge, consent and agree that WhiteList may access, preserve and disclose your account information and Collective Content if required to do so by law or in a good faith belief that such access, preservation or disclosure is reasonably necessary to (a) respond to claims asserted against WhiteList; (b) to comply with legal process (for example, subpoenas and warrants); (c) to enforce and administer our agreements with users, such as the Terms of Service , this Privacy Policy; (d) for fraud prevention, risk assessment, investigation, customer support, product development and de-bugging purposes; or (e) to protect the rights, property or personal safety of WhiteList, its users or members of the public. We will use commercially reasonable efforts to notify users about law enforcement requests for their data unless:
                    <br /><br />
                    providing notice is prohibited by the legal process itself, by court order we receive, or by applicable law;
                    <br /><br />
                    based on information supplied by law enforcement, we, in our sole discretion, believe: (a) that providing notice could create a risk of injury or death to an individual or group of individuals, (b) that the case involves potential harm to minors, or (c) that harm or fraud could be directed to WhiteList, its Members, the Platform, or Services.
                    <br /><br />
                    We may also publish, disclose and use Aggregated Information and non-personal information for industry and market analysis, demographic profiling, marketing and advertising, and other business purposes. </p>

                    <h2 className="terms-service-h2">BUSINESS TRANSFERS BY WhiteList</h2>
                    <p className="terms-service-p2">If WhiteList undertakes or is involved in any merger, acquisition, reorganization, sale of assets or bankruptcy or insolvency event, then we may sell, transfer or share some or all of our assets, including your Personal Information. In this event, we will notify you before your Personal Information is transferred and becomes subject to a different privacy policy. </p>

                    <h2 className="terms-service-h2">HOW TO CHANGE OR DELETE YOUR INFORMATION, OR CANCEL YOUR WhiteList ACCOUNT</h2>
                    <p className="terms-service-p2">You may review, update, correct or delete the Personal Information in your WhiteList account. You can log on to your account if you would like to correct your information or cancel your WhiteList account entirely. Please also note that any reviews, forum postings and similar materials posted by you may continue to be publicly available on the Platform in association with your first name, even after your WhiteList account is cancelled. </p>

                    <h2 className="terms-service-h2">SECURING YOUR PERSONAL INFORMATION</h2>
                    <p className="terms-service-p2">We are continuously implementing and updating administrative, technical, and physical security measures to help protect your Personal Information against unauthorized access, destruction or alteration. However, no method of transmission over the Internet, and no method of storing electronic information, can be 100% secure. So, we cannot guarantee the absolute security of your transmissions to us and of your Personal Information that we store. </p>

                    <h2 className="terms-service-h2">YOUR PRIVACY WHEN YOU ACCESS THIRD-PARTY WEBSITES AND RESOURCES</h2>
                    <p className="terms-service-p2">The Platform will contain links to other websites not owned or controlled by WhiteList. We do not have any control over third party websites. These other websites may place their own cookies, web beacons or other files on your device, or collect and solicit Personal Information from you, and they will have their own rules about the collection, use and disclosure of Personal Information. We encourage you to read the terms of use and privacy policies of the other websites that you visit.
                    <br /><br />
                    Some portions of the Platform implement Google Maps services, including Google Maps API(s). Your use of Google Maps is subject to Google’s terms of use and Google’s privacy policy, as may be amended by Google from time to time. </p>

                    <h2 className="terms-service-h2">COOKIE POLICY</h2>
                    <p className="terms-service-p2">WhiteList uses "cookies" in conjunction with the Platform to obtain information. A cookie is a small data file that is transferred to your device (e.g., your phone or your computer) for record-keeping purposes. For example, a cookie could allow the Platform to recognize your browser, while another could store your preferences and other information.
                    <br /><br />
                    Your browser may allow you to set how it handles cookies, such as declining all cookies or prompting you to decide whether to accept each cookie. Please note that some parts of the Platform may not work as intended or may not work at all without cookies. </p>

                    <h2 className="terms-service-h2">WhiteList COOKIES AND THIRD PARTY COOKIES</h2>
                    <p className="terms-service-p2">WhiteList may place our cookies on your device via the Platform and our Privacy Policy will apply to our treatment of the information we obtain via our cookies. We may also allow our business partners to place cookies on your device. For example, through our use of Google Analytics for web analytics, Google may also set cookies on your device. As further explained below, third parties may also place cookies on your device for advertising purposes. There are two types of cookies used on the Platform, namely "persistent cookies", cookies that remain on your device after you close your browser and can be used again the next time you access the Platform, and "session cookies" which normally expire when you close your browser. </p>

                    <h2 className="terms-service-h2">OTHER TECHNOLOGIES</h2>
                    <p className="terms-service-p2">The Platform may also use other technologies with similar functionality to cookies, such as web beacons and tracking URLs to obtain Log Data about users. We may also use web beacons and tracking URLs in our messages to you to determine whether you have opened a certain message or accessed a certain link. </p>

                    <h2 className="terms-service-h2">USES FOR WhiteList COOKIES</h2>
                    <p className="terms-service-p2">WhiteList uses cookies for a number of purposes, such as but not limited to the following:
                    <br /><br />
                    1. To enable, facilitate, and streamline the functioning of the Platform across different web pages and browser sessions;
                    <br /><br />
                    2. To simplify your access to and use of the Platform for a more seamless experience;
                    <br /><br />
                    3. To monitor and analyze the performance, operation, and effectiveness of the Platform, so that we can improve and optimize it;
                    <br /><br />
                    4. To show you content, which may include advertisements, that is more relevant to you. </p>

                    <h2 className="terms-service-h2">USES FOR THIRD PARTY COOKIES</h2>
                    <p className="terms-service-p2">Our partners' cookies are intended to obtain information to help them provide services to WhiteList. For example, third party companies and individuals we engage with to provide services to us may track your behavior on our Platform to market and advertise WhiteList listings or services to you on the Platform and third party websites. Third parties that use cookies and other tracking technologies to deliver targeted advertisements on our Platform and/or third party websites may offer you a way to prevent such targeted advertisements by opting-out at the websites of industry groups such as the Network Advertising Initiative and/or the Digital Advertising Alliance. You may also be able to control advertising cookies provided by publishers with tools such as Google's Ad Preference Manager.
                    <br /><br />
                    Please note that even if you choose to opt-out of receiving targeted advertising, you may still receive advertising on the Platform that will not be tailored to your interests. </p>

                    <h2 className="terms-service-h2">DISABLING COOKIES</h2>
                    <p className="terms-service-p2">Most browsers automatically accept cookies, but you can modify your browser setting to decline cookies by visiting the Help portion of your browser's toolbar. If you choose to decline cookies, please note that you may not be able to sign in, customize, or use some of the interactive features of the Platform. Flash cookies operate differently than browser cookies, and cookie management tools available in a web browser will not remove flash cookies. To learn more about how to manage flash cookies, you can visit the Adobe website  http://www.adobe.com and make changes at the 
                    Global Privacy Settings Panel </p>

                    <h2 className="terms-service-h2">CHANGES TO THIS COOKIE POLICY</h2>
                    <p className="terms-service-p2">We can change this Cookie Policy at any time. If we make material changes to the Cookie Policy, we will inform you either by posting the changed Cookie Policy on the Platform or by sending you an email. It's important that you review the changed Cookie Policy. If you do not wish to agree to the changed Cookie Policy, then we cannot continue to provide the Platform to you, and your only option is to stop accessing the Platform and deactivate your WhiteList account. </p>

                    <h2 className="terms-service-h2">CHANGES TO THIS PRIVACY POLICY</h2>
                    <p className="terms-service-p2">We may change how we collect and use your Personal Information at any time and without prior notice, at our sole discretion. We may change this Privacy Policy at any time. If we make material changes to the Privacy Policy, we will notify you either by posting the changed Privacy Policy on the Platform or by sending an email to you. We will also change the "Last Updated Date" at the top of this Privacy Policy. If we let you know of changes through an email communication, then the date on which we send the email will be deemed to be the date of your receipt of that email.
                    <br /><br />
                    It's important that you review the changed Privacy Policy. If you do not wish to agree to the changed Privacy Policy, then we will not be able to continue providing the Platform and Services to you, and your only option will be to stop accessing the Platform and Services and deactivate your WhiteList account. </p>

                    <h2 className="terms-service-h2">GOT FEEDBACK?</h2>
                    <p className="terms-service-p2">Your opinion matters to us! If you'd like to provide feedback to us about this Privacy Policy, please email us at hello@whitelist.ph </p>
                    <p className="terms-service-p2" id="terms-data-src">Reference: https://rentalbee.ph/data-privacy</p>
                </motion.div>
            </body>
            <Footer/>
        </>
    )
}

export default PrivacyPolicy