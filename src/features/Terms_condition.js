import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export default function Terms_condition() {
  const status = useSelector((state) => state.status.otherContent?.infoContent);
  const URL_DATA = window?.location?.href?.includes("termscondition");
  const navigate = useNavigate();
  React.useEffect(() => {
    window.scroll(0,0) 
  }, [])
  
  return (
    <section className='other_mainblog'>
      <div className='container'>
        <div className='othercontent_blog'>
          <h1 className="other-title">Terms & Conditions <svg width="82" height="3" viewBox="0 0 82 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 0H68L65 3H0L3 0Z" fill="#0D1C6D"></path><path d="M70 0H75L72 3H67L70 0Z" fill="#0D1C6D"></path><path d="M77 0H82L79 3H74L77 0Z" fill="#D62B56"></path></svg></h1>          
            <div>
              <p>These Terms of Use, the natural and legal person who uses the content, products and services offered on the platforms by becoming a member through PicGround AI and PicGround websites, mobile applications or any media and application developed, published or operated by PicGround (“User”). or “you”). By accessing the https://Picground.co.uk/en website and all relevant digital channels such as mobile apps or apps, these Terms of Use, all relevant policies, rules, instructions and additional terms must be complied with. The member agrees to comply with these conditions by becoming a member of digital channels through the website.</p>              
              <p>PicGround, provides its users with services such as automatic car photo editor through the Platform. Users must register an account to access PicGround’s services. All requested information must be filled in correctly and completely.</p>
              <ul className='content_list-style'>
                <li>PicGround requires users to protect their personal information when subscribing to their Platform. This includes not sharing their passwords or names with anyone else, as PicGround will not be held liable for any damages resulting from the disclosure of this information. PicGround is also not responsible for the damages caused by the users' use of its products and services in violation of their privacy.</li>
                <li>To create a PicGround Platform account, you must be at least 18 years old and able to legally sign a contract. You must also be able to act legally as an individual; You must not have been previously shut down or suspended on PicGround Platforms. You must also be authorized to register on Product Platforms and accept terms of service. The platform requires users to be at least 18 years old.</li>
                <li>Legally valid activities are activities performed by PicGround for legitimate purposes for users. All other activities on the platform are the responsibility of the user. Making a transaction or using a service provided by PicGround is the sole responsibility of the user.</li>
                <li>Users; They cannot transfer or sell their accounts, liabilities and rights to third parties or offer their own memberships under any name. Otherwise, PicGround reserves the right to cancel, suspend and terminate the user's account. With PicGround’s exercise of these rights, the user agrees that he irrevocably waives all his rights. The user is responsible for all damages that occur within the scope of this article, and all penal sanctions belong to the user.</li>
                <li>User profile information (name, surname, e-mail address, etc.), IP address and usage history, content and content published to protect PicGround systems and their customers, subpoenas or orders, without restriction, upon request for information from a government agency. It is authorized to share any information requested, including but not limited to, with the relevant institutions.</li>
                <li>PicGround fulfills its obligation to share the above information in accordance with the Personal Data Protection Law No. 6698 and other laws. By using this platform, you consent to PicGround’s collection, processing and transfer of your personal data as set forth in the Personal Data Protection Instructions.</li>
              </ul>
              <h6>Subscription</h6>
              <ul className='content_list-style'>
                <li>Certain services may be made available to users free of charge from time to time. Users need to pay to access other services. Users will be able to access the Product Services after they have successfully subscribed to a subscription plan ("Paid Services") for which PicGround charges. Subscription fees can be paid by credit card, ___ ("Payment Method"). PicGround reserves the right to provide other paid services at its sole discretion. Unless otherwise stated by PicGround, all fees are in Turkish Lira (TL). Although taxes are not included in the price, taxes are the responsibility of the user.</li>
                <li>Subscription to paid services is made on an auto-renewal basis. Subscription automatically renews when the subscription period (monthly or yearly) expires.</li>
                <li>Terms regarding promotions and discounts that we offer users to subscribe to paid services will be explained in the submitted offer.</li>
                <li>The billing period for each subscription type occurs as specified on the Platform at the time of purchase.</li>
                <li>PicGround reserves the right, in its sole discretion, to change, change, adjust or diversify the prices, packages and/or features of the Paid Service Subscription Plans without prior notice to users.</li>
                <li>PicGround makes reasonable efforts to ensure that pricing and information for Services described on the Platform are accurate. PicGround is not responsible for possible obvious mispricing of services described on the platform.</li>
              </ul>
              <h6>Cancel subscription</h6>
              <ul className='content_list-style'>
                <li>Users can cancel their paid service subscription at any time. If the subscription is canceled within this scope, the user will be able to continue to benefit from paid services until the end of the billing period. Subscription fees will not be refunded to users to the extent permitted by applicable law. No refunds will be made for paid services not used by the user.</li>
                <li>Subscription cancellations (if any) are made through the relevant app store or platform.</li>
              </ul>
              <h6>Close member account</h6>
              <ul className='content_list-style'>
                <li>Users can request that their accounts be closed completely at any time without giving any reason. This request is for hello@picground.co.uk only. It can be forwarded to the address. At the request of the user, the account is closed within 30 days from the date of receipt of the request.</li>
                <li>Account transaction information and data of users whose accounts have been closed in accordance with the law and the legitimate interests of the Site will continue to be stored by PicGround for the period specified in the Law.</li>
              </ul>
              <h6>Permissions</h6>
              <ul className='content_list-style'>
                <li>PicGround grants the User a non-exclusive, non-transferable, non-sublicensable, revocable, limited license to access and use the Services in accordance with these Terms of Use under the following terms.</li>
                <li>Based on the permissions given to the user; I. You may not license, sublicense, sell, rent, transfer, distribute or otherwise commercially exploit any content used or displayed in any part or all of the Services without the prior written consent of PicGround.</li>
                  <ol>
                    <li>The Product Service cannot be changed in any way.</li>
                    <li>PicGround may not access the Services by any technical means other than authorized digital means determined by PicGround.</li>
                    <li>Advertising, promotion, marketing, etc. on the PicGround Platform without the prior written consent of PicGround. Commercial activities are not allowed.</li>
                  </ol>
                <li>PicGround reserves the right to change, suspend or terminate the services provided to users without prior notice. The User agrees that PicGround will not be liable for any change, suspension or termination of its services for any reason. PicGround is not obligated to provide users with any support or maintenance regarding the Services.</li>
                <li>Any disadvantage, any manager, shareholder, supplier, representative, agent, employee, consultant, affiliate or affiliate that may arise during the use of the Platform or the services provided or transactions performed within the scope of the User. User, Product Conditions, Disputes and Disputes PicGround or its commitments shall not be liable for any loss and/or damage arising from them.</li>
              </ul>
              <h6>Intellectual Property</h6>
              <ul className='content_list-style'>
                <li>Users may send various data, information, text, photos, images, graphics, codes, logos, logos or other content ("Content") to PicGround and its affiliates, unless otherwise stated. , royalty-free, transferable and non-exclusive license. accepts and declares that he has the right to benefit from moral rights.</li>
                <li>Article 5.1. You acknowledge and agree that you own all intellectual and industrial property rights in this content, to the extent that this content does not violate these Terms of Use and the rights of any third party or organization.</li>
                <li>You accept, declare and undertake that PicGround has the title of hosting provider pursuant to Law No. 5651, it is not obliged to check the Content provided by you and to investigate whether the publication of the relevant Content from anywhere on the internet or the display and sale of products related to these Contents constitutes an unlawful situation. you are doing.</li>
                <li>Unless otherwise stated, all kinds of messages, data, information, text, music, sound, photo, picture, graphic, code, sign, logo, sound and video, image, animation, podcast, analysis, research, report and content on the Platform. All copyrights and other intellectual property rights related to these contents belong to PicGround and are protected in accordance with the Law No. 5846 on Intellectual and Artistic Works. PicGround owns the copyrights of all or part of any Content available or accessible on the Platform and their databases.</li>
                <li>The PicGround brand and logo and other marks (“Trademarks”) displayed on the Platforms are registered and/or common law trademarks of PicGround and/or third parties. Unless expressly stated otherwise, users are not granted any right or license to use any Trademark on the Platform without the written consent of PicGround or a third party.</li>                
              </ul>
              <h6>Prohibited Activities</h6>
              <ul className='content_list-style'>
                <li>1 Users agree and undertake that they will not engage in prohibited activities or any similar activities, including but not limited to the following: i. Content that is illegal, untrue, defamatory, obscene, pornographic, indecent, threatening, infringing on privacy, misleading, fraudulent, criminal, inciting or leading to a crime, violating the rights of third parties and in this context, national and international laws and regulations use, ii. Using Content that infringes third parties' patent, trademark, trade secret, copyright or other intellectual property rights, disclosing proprietary information, including but not limited to address, telephone number, e-mail address, social security numbers, and credit card information, iii . Using Content containing viruses, corrupted data and similar malicious software, iv. Using all kinds of Content that is not suitable for the purpose of the Platform and Content where the promotion, advertisement and marketing of products and services incompatible with the purpose of the Platform are made,</li>
                <ol>
                  <li>Using any automatic mechanisms such as robots, web bots, crawlers, spiders and data crawling and/or using these mechanisms to extract or collect any systematic data from the Platform, including but not limited to Content,</li>
                  <li>Interfering with the Platform, PicGround systems, servers or networks, whether or not connected to the Platform; disrupting PicGround systems, servers or networks,</li>
                  <li>Attempting to gain unauthorized access to any part or all of the Platform, the accounts of other Users, or any PicGround systems or networks connected or not connected to the Platform.</li>
                  <li>Using all kinds of Content, including but not limited to the above, that is contrary, objectionable or inappropriate and that restricts or prevents other Users from using the Platform and benefiting from the site,</li>                  
                </ol>
                <li>The user undertakes not to engage in actions that tarnish PicGround, damage its commercial reputation or create unfair competition by using the PicGround brand name and/or logo, including the activities mentioned above. This commitment covers all social media authorities, including all kinds of written and visual media. In the event of detection of a violation of this clause, PicGround may restrict the User's access without prior notice; reserves the right to block, suspend or completely delete your account. In addition, PicGround shall exercise its right of compensation for any breach of this clause against the User. The user accepts, declares and undertakes that he waives all objection and demand rights due to the implementation of this article. PicGround reserves the right to sue, demand and complain in any case where the User violates these Terms of Use.</li>
              </ul>
              <h6>Third Party Platform Links</h6>
              <ul className='content_list-style'>
                <li>PicGround Platforms contain links to third-party platforms other than their own subsidiaries and group companies. In this context, the links provided through the Platform “Links”) are not under the control of PicGround, but PicGround is not responsible for the products, services and content of the linked Platforms. The Links on the Platform are for the purpose of improving the Platform experiences of the Users and facilitating their transactions. Linked Platforms are owned by retailers or service providers independent of PicGround and are the property of third parties. Users are responsible for accepting the terms of use and privacy policies of these linked Platforms.</li>
              </ul>
              <h6>Changes Made by PicGround</h6>
              <ul className='content_list-style'>
                <li>PicGround has the authority and opportunity to make changes on its Platforms and the Terms of Use regarding the Platforms at any time and to the extent and manner it deems necessary. All changes made will be valid on the Platform or as of the "Last Updated Date" specified in the Terms of Use. In order to make changes, the User is not obliged to give any warning or prior notice, and the User does not have the right to object to the changes made. However, PicGround undertakes that it will take due care to notify the User of this change by the communication method chosen by the User (if not, only by e-mail) a reasonable time before the changes are processed. The User who does not want to accept the change can close his account. Continuing to use the Platforms by the user means acceptance of the changes made.</li>
                <li>We recommend that you periodically check these Terms of Use to be aware of any changes. Platforms will always publish the latest version of these Terms of Use.</li>
              </ul>
              <h6>Force Majeure</h6>
              <ul className='content_list-style'>
                <li>The user, the economic, social or political turmoil that may occur in Turkey and/or the countries where PicGround's transactions are carried out, regional and/or global wars that may significantly affect PicGround's activities, national, regional or global economic crises and fluctuations, or due to restrictions that other countries may impose on their markets, natural disasters and unusual market conditions, or due to legal regulations that may be made in Turkey and other countries, the actions of public authorities or other events that cannot be overcome by forethought and due diligence, or accepts that he may not be able to fulfill his obligations under the service due to reasons (“Force Majeure”) and that he will not have any responsibility towards the User.</li>
              </ul>
              <h6>Severability</h6>
              <ul className='content_list-style'>
                <li>If any provision, clause or condition of these Terms of Use is or is deemed to be wholly or partially invalid, illegal or unenforceable at any time and for any reason, this shall in no way affect the validity and performance of the other provisions, clauses or conditions. In this case, the Parties will negotiate in good faith to replace the partially or wholly invalid, illegal or unenforceable provisions with new, valid and enforceable provisions that have the same economic and legal effects on the Parties.</li>
              </ul>
              <h6>Applicable Law and Authority</h6>
              <ul className='content_list-style'>
                <li>Terms of Use and Turkish Law will be applied in disputes arising from the use of the Platforms, and Istanbul Anatolian Courts and Execution Offices are exclusively authorized to resolve disputes.</li>
              </ul>
            </div>          
           <button
          type="submit"
          className="btn-log_reg me-0 mt-3"
          onClick={()=>window.history.go(-1)}
        >
          Back
        </button>
        </div>
       
      </div>
    </section>
  )
}
