import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md';

import { CardRev } from '../components/extras';
import { reviews } from '../assets/reviews';

export const Privacy = () => {
    const [readMore, setReadMore] = useState(false);
  useEffect(() => {
    if (readMore) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [readMore]);

//   const viip = (<div> A. We grant you a nonexclusive, nontransferable, limited right and license to access and make personal use of the Website and the material provided hereon for your personal, noncommercial use, provided that you fully comply with the terms and conditions of use of the Website. You agree not to download (other than page caching) or modify the Website, or any portion of it. <br /><br />
//                      B. This license does not include any rights of resale or commercial use of the Website or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of the Website or its contents; any downloading or copying of account information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and extraction tools. The Website or any portion of the Website may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including, without limitation, images, text, page layout, or form) of High Five Media, Us, our affiliates or suppliers. You may not use any metatags or any other "hidden text" utilizing High Five Media's, Our, any of our affiliates', or suppliers’ name or trade names, trademarks, or service marks. Any unauthorized use terminates the permission or license granted by Company. <br /> <br />
//                      C. You are granted a limited, revocable, and nonexclusive right to create a hyperlink to the home page of our website so long as the link does not portray High Five Media, Our company, any of our affiliates, or suppliers, or their products or services, in a false, misleading, derogatory, or otherwise offensive matter. You may not use any proprietary graphic, trade name, trademark, or service mark of High Five Media, Our company, any of our affiliates, or suppliers as part of the link without the express, written consent of our company.
//                      </div>)
  const privacyList = [
    {
        l: 'Website Terms and conditions of use',
        p: `Welcome to hchokc.org [the “website”]. Hendrick, Casey, & Hutter (Hendrick, 
                        Casey, & Hutter herein We, Us, Our) provides access to the Website and its services offered in the Website, 
                        to you subject to the following terms and conditions. In return for gaining access to the Website, you agree to
                         be bound by these terms and conditions of use without limitation or qualification. If you do not intend to be 
                         legally bound by these terms and conditions of use, do not access or use the Website. If you visit the Website,
                          you accept these terms and conditions of use. Please read them carefully.`
    },
    {
        l: 'Privacy',
        p: `A. Please review our privacy policy, which also governs your visit to the Website, to understand our privacy practices.`
    },
    {
        l: 'Geographic Scope',
        p: `A. The Website may be viewed internationally and may contain references to products or services not available in all countries. References to a particular product or service do not imply that We intend to make such products or services available in such countries.

i. “Unless otherwise specified, We may offer to sell products or services featured on the Website only in the United States. The Website is displayed solely for purposes of promoting Our products and services in the United States. Unless otherwise specified, the Website is available for visitors outside of the United States only for purposes of information. The Website is controlled by Us from its offices in the United States of America.

`
    },
    {
        l: ' Electronic Communications',
        p: `A. When you visit the Website or send e-mails, form fills, or social media to us, you are communicating with us electronically. You consent to receive communications from Us electronically. We will communicate with you by e-mail or by posting notices on the Website. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically via e-mail or by posting notices on the Website satisfy any legal requirement that such communications be in writing.`
    },
    {
        l: 'V. Copyright',
        p: `A. All content included on the Website, including, but not limited to, text, design, graphics, logos, button icons, images, audio clips, digital downloads, interfaces, data compilations, software, and code is the property of High Five Media, Us, affiliates, or content suppliers, and is protected by United States and international copyright laws. The compilation of all content on this site is the exclusive property of High Five Media, Us, affiliates, or content suppliers, and is protected by U.S. and international copyright laws. All software used on this site is the property of High Five Media, Us, our affiliates, or software suppliers and is protected by United States and international copyright laws. For purposes of these terms and conditions of use, the term “affiliates” means any entity or person, directly or indirectly, owning a controlling interest in, or under common ownership control with, High Five Media, Us, or any entity or person in which High Five Media or We directly or indirectly, owns a controlling interest. Nothing contained on the Website should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any of the copyrighted works displayed or contained in the Website without the express, written consent of the High Five Media, Us, affiliates, or suppliers.`
    },
    {
        l: 'Trademarks',
        p: `A. High Five Media, Us, one of our affiliates, or suppliers is the owner of the following registered trademarks in the United States or other countries:

i. High Five Media, Us, one of our affiliates, or suppliers are also the owner of the unregistered trademarks, service marks, trade names, graphics, logos, page headers, button icons, scripts, trade dress, or other indicia of trade origin that appear on this Website, including, without limitation, the following:

1. The registered and unregistered trademarks, service marks, trade names, graphics, logos, page headers, button icons, scripts, trade dress, or other indicia of trade origin of High Five Media, Us, one of our affiliates, or suppliers may not be used in connection with any business, product or service whose source is not High Five Media, Us, one of its affiliates, or suppliers in any manner that is likely to cause confusion among customers, the trade, or the public or in any manner that disparages or discredits High Five Media, Us, one of our affiliates, or suppliers. All other trademarks, service marks, trade names, and logos not owned by High Five Media, Us, one of our affiliates, or suppliers that appear on the website are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by High Five Media, Us, one of our affiliates, or suppliers. Nothing contained on the Website should be construed as granting, by implication, estoppel or otherwise, any license or right to use any of the trademarks, service marks, trade names, graphics, logos, page headers, button icons, scripts, trade dress, or other indicia of trade origin of High Five Media, Us one of our affiliates, or suppliers displayed or contained in the Website without the express, written consent of High Five Media, Us, one of our affiliates, or suppliers.`
    },
    {
        l: 'Patents',
        p: `A. If applicable, one or more patents apply to the Website and to the features, products, and services accessible via the Website. Nothing contained on the Website should be construed as granting, by implication, estoppel or otherwise, any license or right to use any of the foregoing patents, licensed patents, or the patentable inventions contained therein without the express, written consent of High Five Media, Us, one of our affiliates, or suppliers.`
    },
    {
        l: 'License and Site Access',
        p: (<div> A. We grant you a nonexclusive, nontransferable, limited right and license to access and make personal use of the Website and the material provided hereon for your personal, noncommercial use, provided that you fully comply with the terms and conditions of use of the Website. You agree not to download (other than page caching) or modify the Website, or any portion of it. <br /><br />
        B. This license does not include any rights of resale or commercial use of the Website or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of the Website or its contents; any downloading or copying of account information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and extraction tools. The Website or any portion of the Website may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including, without limitation, images, text, page layout, or form) of High Five Media, Us, our affiliates or suppliers. You may not use any metatags or any other "hidden text" utilizing High Five Media's, Our, any of our affiliates', or suppliers’ name or trade names, trademarks, or service marks. Any unauthorized use terminates the permission or license granted by Company. <br /> <br />
        C. You are granted a limited, revocable, and nonexclusive right to create a hyperlink to the home page of our website so long as the link does not portray High Five Media, Our company, any of our affiliates, or suppliers, or their products or services, in a false, misleading, derogatory, or otherwise offensive matter. You may not use any proprietary graphic, trade name, trademark, or service mark of High Five Media, Our company, any of our affiliates, or suppliers as part of the link without the express, written consent of our company.
        </div>)
    },
    {
        l: 'Your Account',
        p: `A. When you use the Website, if applicable, you are responsible for maintaining the confidentiality of your account and password, and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.`
    },
    {
        l: 'Reviews, Comments, Communications, and Other Content',
        p: (<div>
            A. Our Company and its affiliates reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in their sole discretion. Visitors may not post reviews, comments, and other content, send e-cards and other communications, or submit suggestions, ideas, comments, questions, or other information, any of which is illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties or objectionable, or which consists of or contains software viruses, political campaigning, commercial solicitation, chain letters, mass mailings, or any form of "spam." You may not use a false e-mail address, impersonate any person or entity, or otherwise mislead as to the origin of a card or other content. Our Company reserves the right (but has no obligation) to remove or edit such content but does not regularly review posted content. <br/><br/>
            B. If you do post content or submit material, and unless we indicate otherwise, you grant Our Company and its affiliates a nonexclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media, including, without limitation, any ideas, concepts, know-how, or techniques contained in any communications, content, or materials you send to the Website for any purpose whatsoever, including, without limitation, developing, manufacturing, providing, or promoting new products or services using such information and things. You grant Our Company and its affiliates and sublicensees the right to use the name that you submit in connection with such content, if they choose. You represent and warrant that you own or otherwise control all of the rights to the content that you post; that the content is accurate; that use of the content you supply does not violate the Terms and Conditions of Use and will not cause injury to any person or entity; and that you will indemnify Our Company, High Five Media, suppliers, and its affiliates for all claims resulting from content you supply.<br/><br/>
            C. From time to time, our Company may monitor and edit or remove any activity or content, but it has no obligation to do so. Our Company takes no responsibility and assumes no liability for any content posted by you or any third party. Harassment in any manner or form on the Website, including via e-mail or chat or by obscene or abusive language is strictly forbidden. Impersonation of others, including a Company employee, host, or representative or other members or visitors to the Website is prohibited. You may not upload to, distribute, or otherwise publish through the Website any content that is libelous, defamatory, obscene, threatening, invasive of privacy or publicity rights, abusive, illegal, or otherwise objectionable, or that constitutes or encourages a criminal offense, violates the rights of any party, or otherwise gives rise to liability or violates any law. You may not upload commercial content on the Website or use the Website to solicit others to join or become members of any commercial online service or other organization.
        </div>)
    },
    {
        l: 'Product Descriptions',
        p: `A. Our Company and its affiliates attempt to be as accurate as possible. However, Our Company does not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. If a product offered by Our Company itself is not as described, your sole remedy is to return it in unused condition.`
    },
    {
        l:'Links',
        p: (<div>
            A. These terms and conditions of use apply only to this Website, and not to the websites of any other person or entity. We may provide, or third parties may provide, links to other worldwide websites or resources.<br/><br/>

B. You acknowledge and agree that we are not responsible for the availability of such external websites or resources, and do not endorse (and are not responsible or liable for) any content, advertising, products, services, or other materials on or available from such other websites or resources. You further acknowledge and agree that, under no circumstances, will we be held responsible or liable, directly or indirectly, for any loss or damage that is caused or alleged to have been caused to you in connection with your use of, or reliance on, any content, advertisements, products, services or other resources available from any other website (regardless of whether we directly or indirectly link to such content, advertisements, products, services, or other resources). You should direct any concerns with respect to any other websites to that website's administrator or webmaster.
        </div>)
    },
    {
        l:'Disclaimer of Warranties and Limitation of Liability',
        p: (<div>
            This policy is intended to comply fully with the requirements of the Online Copyright Infringement Liability Limitation Act.

A. The Website is provided by Us on an "as is" and "as available" basis.<br/><br/>

B. We make no representations or warranties of any kind, express or implied, as to the operation of the Website or the information, content, materials, or products included on the Website. You expressly agree that your use of the Website is at your sole risk.<br/><br/>

C. To the fullest extent permissible by applicable law, We and High Five Media disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We and High Five Media do not warrant that the Website, its servers, or e-mail sent from Us or High Five Media are free of viruses or other harmful components. We and High Five Media will not be liable for any damages of any kind arising from the use of the Website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.<br/><br/>

D. Certain state laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above disclaimers, exclusions, or limitations may not apply to you, and you might have additional rights.
        </div>)
    },
    {
        l:'Governing Law',
        p: `A. The Website was developed in the United States of America in accordance with and shall be governed by the laws of the State of Oklahoma, United States of America. By visiting the Website, you agree that the laws of the Oklahoma of the United States, without regard to principles of conflict of laws, will govern these terms and conditions of use, and any dispute of any sort that might arise between you and Company or its affiliates.

`
    },
    {
        l:'Disputes',
        p: `A. Any dispute relating in any way to your visit to the Website or to products you purchase through the Website shall be submitted to confidential arbitration in Oklahoma City, Oklahoma of the United States of America, except that, to the extent you have in any manner violated or threatened to violate Company's intellectual property rights, Company may seek injunctive or other appropriate relief in any state or federal court in the state of Oklahoma, and you consent to exclusive jurisdiction and venue in such courts. Arbitration under these terms and conditions of use shall be conducted under the rules then prevailing of the American Arbitration Association. The arbitrator's award shall be binding and may be entered as a judgment in any court of competent jurisdiction. To the fullest extent permitted by applicable law, no arbitration under these terms and conditions of use shall be joined to an arbitration involving any other party subject to these terms and conditions of use, whether through class arbitration proceedings or otherwise.`
    },
    {
        l:'Site Policies Modification and Severability',
        p: (<div>
            A. As noted above, you are encouraged and advised to review the terms and conditions of use and the privacy policy posted on the Website. These policies also govern your visit to the Website. By using the Website, you agree to be bound by and to abide by these policies, just as if you had signed an agreement. If you do not comply with these terms and conditions of use at any time, we reserve the right, if applicable, to terminate your password, user account, or your access to the Website (or any part thereof). You agree that any termination or cancellation of your access to, or use of, the Website, may be affected without prior notice. Further, you agree that we will not be liable to you or to any third party for any termination or cancellation of your access to, or use of, the Website.<br/><br/>

B. We reserve the right, in our sole discretion, to change, modify, add to, or remove portions of the Website, the terms and conditions of use and the privacy policy at any time. You should check these terms and conditions of use and privacy policy periodically for changes. By using the Website after we post any changes to the terms and conditions of use or the privacy policy, you agree to accept those changes, regardless of whether you have reviewed them. If you do not agree to these terms and conditions of use and the privacy policy, you should not use the Website and, if applicable, you should arrange to cancel your registered user account or subscription with us. If any of these terms or conditions is deemed invalid, void, or for any reason unenforceable, that condition will be deemed severed and will not affect the validity and enforceability of any remaining condition.
        </div>)
    },
    
  ]

  const webPrivacy = [
    {
        l:'Website Privacy Policy',
        p: (
            <div>
                Revised as of September 1, 2023 <br/><b/>

I. The Website located at hchokc.org [the “Website”] is operated by Hendrick, Casey, & Hutter (Hendrick, Casey, & Hutter may also be referred to as “us,” “we,” and “our”). We have created this privacy policy to demonstrate our firm commitment to the privacy of our visitors and customers. We are committed to respecting your privacy and recognizing your need for appropriate protection and management of personally identifiable information you share with us (the phrases “personally identifiable information” and “personal information” mean any information by which you, individually can be identified, such as your name, address, telephone number, etc.) and other non-public information that is associated with the foregoing, as well as “Anonymous Information,” which is information that is not associated with or linked to your Personal Information and does not permit the identification of individual persons. The purpose of this privacy policy is to inform you when you visit our Website how we use such information, and the choices you have regarding our use of, and your ability to review and correct, your information.
            </div>
        )
    },
    {
        l:'Scope',
        p: `This Privacy Policy describes how we collect, use, disclose and store information you provide to us. The Privacy Policy applies to {{ url }} and any website, application, service, or tool that our services are on or in which it is posted, linked or referenced. The Services are owned and operated by us and our affiliates.`
    },
    {
        l:'User Consent',
        p: (<div>
            A. PLEASE REVIEW THIS PRIVACY POLICY CAREFULLY. When you submit information to or through the Services, you consent to the collection and processing of your Personal Information and Anonymous Information as described in this Privacy Policy.<br/><b/>

B. By using the Services, you accept the terms of this Privacy Policy and our Terms of Use and consent to our collection, use, disclosure, and retention of your information as described in this Privacy Policy. If you have not already done so, please also review our Terms of Service.<br/><b/>

C. IF YOU DO NOT AGREE WITH ANY PART OF THIS PRIVACY POLICY OR OUR TERMS OF SERVICE, THEN PLEASE DO NOT USE ANY OF THE SERVICES.
        </div>)
    },
    {
        l:' Regarding Children',
        p: `i. The Services are not intended for use by children. If you are under the age of majority in your place of residence, you may use the Services only with the consent of or under the supervision of your parent or legal guardian. Consistent with the requirements of the Children's Online Privacy Protection Act (COPPA), if we learn that we have received any information directly from a child under age 13 without first receiving his or her parent's verified consent, we will use that information only to respond directly to that child (or his or her parent or legal guardian) to inform the child that he or she cannot use the Services and subsequently we will delete that information.`
    },
    {
        l:' Collection and Use of Information',
        p: (<div>
            <b className='font-bold text-xl'>A. Information We Collect</b><br />
            <p>i. Personal Information vs. Usage Information</p><br />
            <p>1. “Personal Information” means information associated with or used to identify or contact a specific person. Personal Information includes: (1) contact data (such as e-mail address, telephone number and employer); (2) demographic data (such as gender, date of birth and zip code); and (3) certain Usage Data (defined below), such as IP address; and (4) describe any other categories of information the user provides or the digital service operator collects, such as user generated content or purchases].</p><br />
            <p>2. “Usage Information” or “Usage Data” is information about an individual’s online activity that, by itself, does not identify the individual, such as browser type, operating system and webpages visited. Generally, we do not consider Usage Data as Personal Information because Usage Data by itself usually does not identify an individual. Personal Information and Usage Data may be linked together. Different types of Usage Information also may be linked together, and once linked, may identify an individual person. Also, some Usage Data may be Personal Information under applicable law.</p><br />
            <p>a. Categories of Usage Data:</p>
            <ul className='list-disc list-outside'>
                <h2>1. Technical information;</h2>
                <li className='ml-8'>Information about user searches/looking at while using the service;</li>
                <li className='ml-8'>Information about communications the user made using the Services;</li>
                <li className='ml-8'>Metadata.</li>
            </ul>
            <h2>ii. Sensitive Personal Information</h2>
            <p className='py-2'>
            Certain Personal Information, such as information about personal health or finances, is characterized as sensitive and subject to stricter regulation than other personal information. Before providing it to us, we urge you to carefully consider whether to disclose your sensitive Personal Information to us. If you do provide Sensitive Personal Information to us, you consent to use and disclosure for the purposes and in the manner described in this Privacy Policy.
            </p>
            <h2>iii. Location Data</h2>
            <p className='py-2'>“Location Data” is a category of Personal Information collected about the location of a mobile device or computer, including:</p>
            <p>1. The location of the mobile device or computer used to access the Services derived from GPS or Wi-Fi use;</p>
            <ul className='list-disc list-outside'>
            <li className='ml-8'>The IP address of the mobile device or computer or internet service used to access the Services;</li>
            <li className='ml-8'>Other information made available by a user or others that indicates the current or prior location of the user, such as [information that you or others post indicating your location] [geotag information in photographs].</li>
            </ul>
            <p>iv. Combining Information from Third Party Sources</p>
            <p className='py-4'>
            We may combine the information we collect from you with information from other sources and use the combined information as described in this Privacy Policy.
            </p>
            <p className='py-5'>v. E-Mail and E-Mail Addresses</p>
            <p>If you send an e-mail to us or provide your e-mail address to us, we will collect your e-mail address and the full content of your e-mail, including attached files, and other information you provide. We may use this e-mail address to contact you. You may indicate your preference to stop receiving further promotional communications as further detailed below.</p>
            <h2 className='font-bold py-2 text-xl'>B. How Information is Collected</h2>
            <p>i. General</p>
            <p className='py-3'>We collect information that you provide to us and from your use of the Services. The information that we collect and how we process it depends on how you use and access the Services. Some information is collected automatically through use of cookies and similar data collection tools.</p>
            <p >ii. We collect Information from you when you:</p>
            <p className='py-3'>1. Use the Services: we collect Personal Information and Usage Data from you when you create an account to use one of the Services, contact us for help or information or otherwise voluntarily provide your Personal Information.</p>
            <p>2. Connect with Social Media through the Services: The Services may offer you the ability to use Facebook Connect or other social media services (collectively, ‘Social Media’) in conjunction with certain Services. When you access the Services through your Facebook or other Social Media account, the Services may, depending on your privacy settings, have access to information that you have provided to the Social Media platform. We may use this information for the purposes described in this Privacy Policy.</p>
            <p className='py-3'>3. From our Business Partners and Service Providers: Third Parties that assist us with our business operations also collect information (including Personal Information and Usage Data) about you through the Services and share it with us. For example, our vendors collect and share information with us to help us detect and prevent fraud.</p>
            <p>4. Usage Data: we also automatically collect Usage Data when you interact with the Services.</p>
            <p className='py-3'></p>
            <p>iii. Information Collected Via Technology</p>
            <p className='py-3'></p>
            <p>1. As you use our Website, certain information may also be passively collected and stored on our or our service providers' server logs, including your Internet protocol address, browser type, and operating system. We also use Cookies and navigational data like Uniform Resource Locators (URL) to gather information regarding the date and time of your visit and the solutions and information for which you searched and viewed, or on which of the advertisements displayed on our site you clicked. This type of information is collected to make our Website and solutions more useful to you and to tailor the experience with our Website to meet your special interests and needs.</p>
            <p className='py-3'></p>
            <p>2. An "Internet protocol address" or "IP Address" is a number that is automatically assigned to your computer when you use the Internet. In some cases your IP Address stays the same from browser session to browser session; but if you use a consumer internet access provider, your IP Address probably varies from session to session. For example, we, or our service providers, may track your IP Address when you access our Website to assist with ad targeting. "Cookies" are small pieces of information that a website sends to your computer's hard drive while you are viewing a website.</p>
            <p className='py-3'>3. We may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience with our Website. Persistent Cookies can be removed by following your Internet browser help file directions. In order to use our Services offered through our Website, your web browser must accept Cookies. If you choose to disable Cookies, some aspects of our Website may not work properly, and you will not be able to receive our Services.</p>
            <p>4. We may also enable advertisers and ad servers to promote third-party products and/or services by placing advertisements on our Website. These advertisers and ad servers may use Cookies and/or Web Beacons in order to monitor information related to served advertisements. Clicking on such advertisements will direct you to the website of a third-party and the advertiser. This Privacy Policy does not cover the privacy practices of any advertisers or ad servers.</p>
            <p className='py-3'></p>
            <p>a. Cookies</p>
            <p className='py-3'>i. The Website uses cookie technology to improve the quality of your experience. A cookie is a small file that contains information sent by a website that is saved on your hard disk by your computer’s browser. Cookies store information that a website may need in order to personalize your experience and gather website statistical data. Any time you visit our Website to browse or to read or download information, we collect and store the name of the domain and host from which you access the Internet; the Internet protocol (IP) address of the computer you are using; the browser software you use and your operating system; the date and time you access the Website; and the Internet address of the website from which you linked directly to the Website. We use this information to measure the number of visitors to areas of the Website, and to help us make the Website more useful and interesting to our visitors. We use information from cookies in the aggregate to analyze for trends and statistics, we do not track individuals, only instances of entry onto the Website.</p>
            <p>ii. Some consumers may not know that cookies are being placed on their computers when they visit websites. If you want to know when this happens, or to prevent it from happening, you can set your browser to advise you when a website attempts to place a cookie on your computer.</p>
            <h2 className='font-bold py-3 text-xl'>C. How Information is Used</h2>
            <p className='py-3'>i. We use the Personal Information that we collect to operate, improve and personalize the Services, to provide customer service, customize our advertising and marketing to detect, prevent and mitigate fraudulent or illegal activities. You agree that we may use your Personal Information as follows:</p>
            <p>1. Operate, improve and personalize the Services</p>
            <p className='py-3 ml-1'>Provide use of and access to the Services;</p>
            <ul className='list-disc list-outside ml-6'>
                <li>Customize, measure and improve the Services;</li>
                <li>Provide content that we think users will like;</li>
                <li>Provide services requested by you;</li>
                <li>As described when we collect the information.</li>
            </ul>
            <p>2. Provide customer support</p>
            <p className='py-3 ml-1'> 1.Provide customer support for the Services or for the products offered by/through the Services.</p>
            <ul className='list-disc list-outside ml-6'>
                <li>Contact users, either via email or telephone, text (SMS) messages (if applicable) as authorized by the recipient user to resolve disputes, collect fees and troubleshoot problems with the Services and for other purposes authorized by law and consistent with this Privacy Policy. Message and data rates may apply.</li>
                <li>Check and verify Personal Information with third parties as necessary.</li>
                <li>Customize our advertising and marketing communication.</li>
                <li>Customize, measure, and improve our content and advertising based on users' ad customization preferences.</li>
                <li>Contact users, either via email, telephone, text (SMS) messages (if applicable based on your consent), postal mail or otherwise as authorized by you to inform you about the Services special offers, etc. Message and data rates may apply.</li>
            </ul>
            <p>3. Detect, prevent, and mitigate fraudulent or illegal activities</p>
            <p className='py-3 mr-1'>
            Prevent, detect, and investigate fraud, security breaches, potentially prohibited or illegal activities.
            </p>
            <ul className='list-disc list-outside ml-6'>
                <li>Enforce our Terms of Use or other applicable policies.</li>
            </ul>
            <h2 className='font-bold py-2 text-xl'>D. Sharing/Disclosure of Information</h2>

            <p>i. Except as otherwise stated in this Privacy Policy, we do not generally sell, trade, rent, or share the Personal Information that we collect with third parties, unless you ask or authorize us to do so. In general, Personal Information you submit to us is used by us to provide you better access, improve your experience, and to better tailor the features, performance, and support we provide to you, and to offer you additional information, opportunities, promotions and functionality from us, our partners or our advertisers at your request. Additionally, we do share your content preferences and other information with the social network from which you have connected to, along with those companies and persons you have asked us to share your information with. We may share and disclose information as described at the time information is collected or as follows:</p>
            <p className='py-3'>1. To Perform Services. We may disclose Personal Information to third parties in order to perform services requested or functions initiated by users. In addition, we may disclose Personal Information in order to identify a user in connection with communications sent through the Services. We also may offer users the opportunity to share information with friends and other users through the Services.</p>
            <p>2. With Third Party Service Providers Performing Services on Our Behalf. We share information, including Personal Information, with our service providers to perform the functions for which we engage them (such as hosting and data analyses). We may share information as needed to operate other related services.</p>
            <p className='py-3'>3. For Legal Purposes. We also may share information that we collect from users, as needed, to enforce our rights, protect our property or protect the rights, property or safety of others, or as needed to support external auditing, compliance and corporate governance functions. We will disclose Personal Information as we deem necessary to respond to a subpoena, regulation, binding order of a data protection agency, legal process, governmental request or other legal or regulatory process. We may also share Personal Information as required to pursue available remedies or limit damages we may sustain.</p>
            <p>4. Corporate Changes. We may transfer information, including your Personal Information, in connection with a merger, sale, acquisition or other change of ownership or control by or of us or any affiliated company (in each case whether in whole or in part).</p>
            <p className='py-3'>ii. We may disclose your Personal Information if we believe in good faith that such disclosure is necessary to (a) comply with relevant laws or to respond to subpoenas or warrants served on us; or (b) to protect and defend our rights or property, you, or third parties. You hereby consent to us sharing your Personal Information under the circumstances described herein.</p>
            
            <h2 className='font-bold py-2 text-xl'>E. How Information is Retained and Secured</h2>

            <p>i. Retention and Disposal</p>
            <p className='py-3'>1. We retain information as long as we deem necessary and relevant for our operations. In addition, we retain personal information to comply with applicable law, prevent fraud, resolve disputes, troubleshoot problems, assist with any investigation, enforce our Terms of Use, [collect any fees owed] and other actions permitted by law.</p>
            <p>ii. Security <br /><br />
1. We are committed to protecting the security of your Personal Information. We use a variety of industry-standard security technologies and procedures to help protect your Personal Information from unauthorized access, use, or disclosure. Even though we have taken significant steps to protect your Personal Information, no company, including us, can fully eliminate security risks associated with Personal Information.
</p>
        
        </div>)
    },
    {
        l: 'Linked Services',
        p:`The Website may contain links to other sites. These links are an accommodation to the respective third-party site owners and for your convenience. Sites linked to and from the Website are not necessarily under our control, and we shall have no responsibility or liability whatsoever for the content or privacy practice of any linked sites, or any link or linking program at any time. You should read and understand our policies with respect to such third-party links, as stated in the Terms and Conditions of Use of the Website.`
    },
    {
        l: 'Safe Harbor',
        p:`We adhere to the U.S. safe harbor privacy policy principles of notice, choice, onward transfer, security, data integrity, access, and enforcement, and is registered with the U.S. Department of Commerce’s safe harbor program. If you have any questions regarding this policy, contact us through the Website for privacy questions.`
    },
    {
        l: 'Contact and Revisions',
        p:`If you have questions or concerns about our Privacy Policy, please contact us using the information in this Website’s contact page. This Privacy Policy is subject to revision at our sole discretion. If you object to any such changes, you must cease using our Website. Continued use of our Website following notice of any such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.

`
    },
    {
        l: 'Effective Date and Changes to Privacy Policy',
        p:`The Effective Date of this Privacy Policy is set forth at the top of this webpage. Your continued use of the Services after the Effective Date constitutes your acceptance of the amended Privacy Policy. The amended Privacy Policy supersedes all previous versions.`
    },

  ]

  return (
    <div 
     className={`w-full pb-96  bg-white dark:bg-neutral-800 text-black dark:text-white `}
     >
        <div>
         <div 
          className={`
            fixed top-0 left-0 w-full h-full bg-black/50 z-50
            transition-opacity duration-300 ease-in-out
            ${readMore ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
        >
          <div 
            className={`
              fixed overflow-auto flex-col z-50 top-0 h-full 
              dark:bg-neutral-900 bg-white left-0 w-[24rem] p-5
              transition-transform duration-300 ease-in-out
              ${readMore ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <MdCancel 
              onClick={() => setReadMore(false)} 
              className='relative z-20 right-4 text-black dark:text-white text-2xl cursor-pointer hover:opacity-70 transition-opacity' 
            />
            
            {reviews.map((review, index) => (
              <CardRev key={index} review={review}/>
            ))}
          </div>
          
          <div 
            className='absolute top-0 left-0 w-full h-full bg-black/50 transition-opacity duration-300 ease-in-out'
            onClick={() => setReadMore(false)}
          >
            <MdCancel 
              onClick={() => setReadMore(false)} 
              className='fixed top-4 left-[25rem] text-black dark:text-white text-2xl cursor-pointer hover:opacity-70 transition-opacity' 
            />
          </div>
        </div>
        <div className="flex flex-col  w-[35rem]  other:items-center other:w-full">
          <div className="flex p-5">
            <div className="px-3 py-2 ml-3 bg-white rounded-md">
              <div className="flex justify-center items-center -mb-1 space-x-2">
                <span className="text-xl font-bold text-black">4.9</span>
                <div className="flex text-[1.3rem] text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <span onClick={() => setReadMore(true)} className="px-3 text-xs underline">
                Read our 183 reviews
              </span>
            </div>
          </div>
          </div>
          </div>
          <div className='flex justify-center'>
        <   div className='text-justify other:px-10 px-40'>
            <h1 className='font-extrabold text-4xl'>Terms of Use and Privacy Policy Terms of Use</h1>
            <h2 className='font-extrabold selfs pt-5 text-3xl'> Terms Of use </h2>
            <ul className='list-inside list-[upper-roman] space-y-3 py-3'>
                {
                    privacyList && privacyList.map((list, index)=>
                        <li key={index} className='space-y-1 font-bold text-2xl'> <b className='font-bold text-2xl'>{list.l}</b>
                    <p className='font-normal text-base'>{list.p }</p>
                </li>
                    )
                }
                
            </ul>
            <ul className='list-inside list-[upper-roman] space-y-3 py-3'>
                {
                    webPrivacy && webPrivacy.map((list, index)=>
                        <li key={index} className='space-y-1 font-bold text-2xl'> <b className='font-bold text-2xl'>{list.l}</b>
                    <p className='font-normal text-base'>{list.p }</p>
                </li>
                    )
                }
                
            </ul>
        </div>
        </div>
    </div>
  )
}