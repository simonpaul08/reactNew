import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Privacy_policy() {
  const status = useSelector((state) => state.status.otherContent?.infoContent);
  const navigate = useNavigate();
  // console.log("status", status);
  const URL_DATA = window.location.href.includes("privacypolicy");
  React.useEffect(() => {
    window.scroll(0,0) 
  }, [])
  
  return (
    <section className="other_mainblog">
      <div className="container">
        <div className="othercontent_blog">
          <h1 className="other-title">Privacy Policy <svg width="82" height="3" viewBox="0 0 82 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 0H68L65 3H0L3 0Z" fill="#0D1C6D"></path><path d="M70 0H75L72 3H67L70 0Z" fill="#0D1C6D"></path><path d="M77 0H82L79 3H74L77 0Z" fill="#D62B56"></path></svg></h1>
          <div>
            <h6>Clarification Text on the Processing of Personal Data</h6>
            <p>Protecting the privacy of visitors to the website operated by PicGround (“PicGround” or “Company”) is one of our Company's leading principles.</p>
            <p>In this Clarification Text, the principles regarding the processing of your personal data by the Data Controller Company in accordance with the Personal Data Protection Law No. 6698 (“Law”) and the relevant legislation are set out below.</p>
            <h6>1. Purpose of Processing Personal Data</h6>
            <ul className='content_list-style'>
              <li>PicGround may process the personal data obtained from your visit to our website for the following purposes in accordance with Sections 5 and 6 of the KVK Law:</li>
              <li>Benefiting from the services offered on the site by persons associated with being a member of the site,</li>
              <li>If the person concerned makes a request through the communication portal, please make sure that the information is received, that the request/suggestion is taken into account and that a complaint can be made,</li>
              <li>According to the taste, usage habits and needs of the person concerned, planning and executing the services provided to the customized company, providing and promoting the activities required for these services to the relevant personnel, and in this case sending you commercial electronic information, if you expressly agree, our relevant business units for the realization of commercial activities carried out by the Company Carrying out the necessary studies and carrying out the related business processes,</li>
              <li>Planning and execution of the company's commercial and/or business strategies,</li>
              <li>Ensuring the legal, technical and commercial-occupational security of the Company and the persons who have a business relationship with the Company.</li>
            </ul>
            <h6>2. Places and Purpose of Transfer of Processed Personal Data</h6>
            <ul className='content_list-style'>
              <li>Your personal data obtained can be transferred for the purposes of processing your personal data with our business partners (such as outsourcing service providers, managed service providers, research companies, call centers), affiliates of our company and legally authorized public institutions and private individuals.</li>
            </ul>
            <h6>3. Collection Method of Personal Data and Legal Reason</h6>
            <ul className='content_list-style'>
              <li>PicGround automatically collects your personal data through your visits to our website, cookies with technical communication files and the forms you fill in for the purposes specified in this statement.</li>
              <li>Your personal data will be processed for the following legal reasons:</li>
              <ul>
                <li>KVKK meters. Pursuant to Article 5/2(f), data processing is mandatory for the legitimate interests of the company, without prejudice to your fundamental rights and freedoms,</li>
                <li>KVKK meters. Processing is necessary because it is directly related to the establishment or performance of a contract under Article 5/2 (c).</li>
              </ul>
            </ul>
            <h6>4. How to Apply to the Data Controller and Your Rights</h6>
            <ul className='content_list-style'>
              <li>Pursuant to Article 11 of the Law, by applying your personal data to our company; a) knowing whether it has been processed, b) requesting information if it has been processed, c) knowing the purpose of processing and whether it is used in accordance with its purpose. d) To know the countries/foreign countries to which it was transferred, e) To request correction in case of incomplete/wrong processing, f) To request deletion/destruction within the framework of the conditions specified in Article 7, g) Notification pursuant to subparagraph (e) and (f) above You have the right to demand compensation for the losses, if you have any damages arising from the jointing, to request a result, (e) and (f) have been transferred to a third party, h) to have been analyzed exclusively by automated systems, and to object to the emergence of a result against you.</li>
              <li>Regarding your rights above, you can make a request to the Data Controller in accordance with the Bulletin of Application Procedures and Principles. Our company will finalize your requests as soon as possible and within thirty days at the latest, with the first request free of charge, depending on the nature of the request. However, if the transaction requires a separate fee for subsequent requests on the same subject or for the first request, a fee may be charged. Our company can accept and process the requests in writing together with the reasons for rejection.</li>
              <li>If the application made in accordance with the above procedure is rejected, insufficiently answered or not answered in a timely manner, within thirty days from the date on which the answer is received, and in any case, sixty days from the date of application to lodge a complaint with the Personal Data Protection Commission (“Board”). However, a complaint cannot be made without exhausting the remedies.</li>
              <li>After the Board of Directors becomes aware of the suspected violations, upon complaint or ex officio, it conducts the necessary investigations on the matters within its scope. When a complaint is received, the Commission examines the request and responds to the parties concerned. If no response is received within sixty days from the date of the complaint, the request is deemed to have been rejected. In the event of a violation detected by a complaint or ex officio examination, the Board decides that the violation detected will be corrected by the data controller and notified to the relevant parties. The decision is implemented immediately upon notification and within thirty days at the latest. In case of irreparable or impossible damage and clear violations of law, the Commission may decide to stop the processing of the data or to transfer the data abroad.</li>
              <li>In order to be able to identify your identity and not to inform the wrong people, in writing, through a notary public, or by registered letter with a return receipt, You can send it by sending an e-mail to hello@Picground.co.uk by using secure electronic signature, mobile signature, or (if any) the e-mail address already notified to our Company and registered in our systems.</li>
            </ul>
          </div>
          <button
            type="submit"
            className="btn-log_reg me-0 mt-3"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>

      </div>
    </section>
  );
}
