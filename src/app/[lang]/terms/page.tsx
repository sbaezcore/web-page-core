import React from 'react';

import type { Metadata } from 'next';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' ? 'Términos y Condiciones | Core Resources' : 'Terms and Conditions | Core Resources',
    description: 'Terms and conditions for using Thecoreresources.com.',
  };
}

export default async function TermsPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  return (
    <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto">
      <h1 className="font-raleway font-bold text-[36px] md:text-[48px] leading-none text-black mb-12">
        Terms and Conditions
      </h1>

      <div className="space-y-10 text-gray-800 text-lg leading-relaxed">
        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">1. Introduction</h2>
          <p>
            This page sets out the «terms and conditions» under which you can use Thecoreresources.com Please read this page carefully. If you do not agree to the terms and conditions set forth here, do not use this website or service.
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">2. Acceptance of terms</h2>
          <p>
            By using this website, you agree to be bound by these terms and conditions. The terms and conditions may be updated by CINCO NOVENTA Y TRES CONSULTORES SA DE CV at any time without notice so you should visit this page periodically to review the most recent version of the terms and conditions. The terms «you» and «user» as used herein refer to all persons and/or entities accessing this web site for any reason.
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">3. Mandatory Agreement</h2>
          <p>
            These terms (as may be changed from time to time by Thecoreresources.com form a binding agreement between you and Thecoreresources.com Access to and use of Thecoreresources.com indicates your acceptance of these terms. Also, you agree to use Thecoreresources.com at your own risk. In the case of electronic contracting of services, it will be perfected since the acceptance of the proposal or the conditions with which it was modified).
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">4. Description of the Service</h2>
          <p>
            You understand and agree that the service may include certain communications from CINCO NOVENTA Y TRES CONSULTORES SA DE CV such as administrative messages and service announcements. These communications are considered part of the CINCO NOVENTA Y TRES CONSULTORES SA DE CV service and you may not opt-out of receiving such communications. The use of the online tool called «www. Thecoreresources.com » of the company CINCO NOVENTA Y TRES CONSULTORES SA DE CV is part of the service provided by CINCO NOVENTA Y TRES CONSULTORES SA DE CV and its use will be governed by the terms of this document. The release of new products and properties is subject to these terms. You understand and agree that the above services are provided «as is» and that CINCO NOVENTA Y TRES CONSULTORES SA DE CV assumes no responsibility for the deletion, failure to deliver or storage of any communication or customization features. If a user of CINCO NOVENTA Y TRES CONSULTORES SA DE CV wishes to stop receiving these communications, the user may click on the removal request form, which is added at the end of each email piece sent. Subscribe
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">5. Other Particular Rules of Use of the Website</h2>
          <p>
            You represent, warrant and covenant that you will not use (or plan, encourage or assist others to use) the Website for any other purpose or in any manner prohibited by the terms herein or applicable law. It is your responsibility to ensure that you use the Website in accordance with the terms specified herein.
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">6. Other Particular Rules of Use of the Website</h2>
          <p>
            You represent, warrant and covenant that you will not use (or plan, encourage or assist others to use) the Website for any other purpose or in any manner prohibited by the terms herein or applicable law. It is your responsibility to ensure that you use the Website in accordance with the terms specified herein.
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">7. Publication Rules. Conduct and Security</h2>
          <p className="mb-4">
            You agree to comply with CINCO NOVENTA Y TRES CONSULTORES SA DE CV &apos;s rules of conduct and security on this website. Users who violate those rules will have their use and access of the site suspended or terminated at the sole discretion of CINCO NOVENTA Y TRES CONSULTORES SA DE CV.CINCO NOVENTA Y TRES CONSULTORES SA DE CV. reserves the right to change these rules. The Rules of Conduct, Publication and Security are as described below:
          </p>

          <div className="space-y-6 ml-4 md:ml-8 border-l-4 border-core-purple pl-6">
            <div>
              <h3 className="font-bold text-black mb-2">7.1 Publication Rules. Conduct and Security</h3>
              <p>
                You agree to comply with CINCO NOVENTA Y TRES CONSULTORES SA DE CV’s rules of conduct and safety on this Web site. Users who violate those rules will have their use and access of the site suspended or terminated at the sole discretion of CINCO NOVENTA Y TRES CONSULTORES SA DE CV.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-2">7.2 General</h3>
              <p>
                CINCO NOVENTA Y TRES CONSULTORES SA DE CV.‘s contact information is listed on the Website. CINCO NOVENTA Y TRES CONSULTORES SA DE CV and its associated agents do not assume responsibility for the appropriateness or downloadability of content outside of Mexico. Access to the content of the website may not be legal for certain persons or in certain countries. If you access the content of this website from outside of Mexico, you do so at your own risk and are responsible for compliance with the laws within your jurisdiction. The User agrees to use the Website and the Services in accordance with the law, these General Conditions, the applicable Special Conditions, as well as generally accepted morals and good customs and public order. CINCO NOVENTA Y TRES CONSULTORES SA DE CV. excludes any liability for damages of any kind that may be due to the services provided by third parties through the Website, and in particular, but not exclusively for damages that may be due to a breach of the law, morality and generally accepted principles of morality or public order as a result of the provision of services by third parties through the Website; the infringement of intellectual and industrial property rights, of business secrets, of contractual commitments of any kind, of the rights to honour, personal and family privacy and the image of persons, of property rights and of any other nature belonging to a third party as a result of the provision of services by third parties through the portal; the performance of acts of unfair competition and illegal advertising as a result of the provision of services by third parties through the portal, the lack of truthfulness, accuracy, completeness, relevance and / or timeliness of the content transmitted, disseminated, stored, received, obtained, made available or accessible through the services provided by third parties through the portal; The non-fulfilment, delay in fulfilment, defective fulfilment or termination for any reason of the obligations contracted by third parties and contracts made with third parties in relation to or in connection with the provision of services through the portal; the vices and defects of all kinds of the services provided through the portal. You must not assign or transfer your obligations under these terms, these conditions constitute the entire contract between you and the company with respect to the use of the Internet site. CINCO NOVENTA Y TRES CONSULTORES SA DE CV. reserves the right to deny or withdraw access to the Portal and/or the Services, at any time and without notice, to those users who do not comply with these General Conditions or the Special Conditions resulting from:
              </p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-2">7.3 Rules of Conduct</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>You may not respond to postings on behalf of other users in any way and for any purpose other than that intended (e.g., to apply to the work or to initiate a discussion regarding the work).Communications soliciting the employer’s business are prohibited.</li>
                <li>You may not send commercial emails to users.</li>
                <li>Report inappropriate publications or behavior to: <a href="mailto:d.murguia@toilconsulting.com" className="text-[#560FF3] underline">d.murguia@toilconsulting.com</a></li>
                <li>You may not delete or revise any material posted by any other person or entity.</li>
              </ul>
              <p className="mb-2">
                If at any time during the term of this agreement CINCO NOVENTA Y TRES CONSULTORES SA DE CV. learns that you have misled it regarding its business practice and/or services, and/or have purchased services that do not accurately represent its business, CINCO NOVENTA Y TRES CONSULTORES SA DE CV.. reserves the right to terminate this agreement and your use of privileges immediately without notice.
              </p>
              <p>
                CINCO NOVENTA Y TRES CONSULTORES SA DE CV. has no obligation to monitor the conduct of its users, but undertakes to investigate and respond when violations of the terms herein are reported.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-black mb-2">7.4 Safety Rules</h3>
              <p className="mb-2">A. Users are prohibited from violating or attempting to violate the security of the Website, including, without limitation:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Enter data not intended for that user or enter a server or account that the user is not authorized to access. If you have a password that allows access to a non-public area of this Internet site, you may not disclose or share your password with others or use your password for any unauthorized purpose.</li>
                <li>Attacking, scanning or testing the vulnerability of the system or network or attempting to bypass security or authentication measures without prior authorization;</li>
                <li>Attacking and interfering with the service of any user, server or network, (host, network) by sending a virus to the Website, or other acts such as overloading, flooding;</li>
                <li>Sending unsolicited e-mails, including promotions and/or advertising of products or services.</li>
              </ul>
              <p>
                B. Violation of these Safety Rules may result in civil or criminal liability. CINCO NOVENTA Y TRES CONSULTORES SA DE CV. will investigate cases that may present such violations and will involve, and cooperate with, the respective authorities in the legal process of users who are involved in such violations.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">8. Exclusion of Guarantees and Liability</h2>
          <p>
            CINCO NOVENTA Y TRES CONSULTORES SA DE CV. is not an employment agency or a recruiting firm, and makes no representation or warranty as to the effectiveness or timeliness of obtaining employment for users. CINCO NOVENTA Y TRES CONSULTORES SA DE CV. does not warrant the materials posted on this site by users who are recruited candidates or for positions to be filled and is not responsible for any decisions regarding employment, for any reason made by any user.CINCO NOVENTA Y TRES CONSULTORES SA DE CV. does not guarantee the truthfulness, accuracy, currency or reliability of any of the materials posted by users, or any other form of communication that is compromised by users. The materials may contain inaccuracies or typographical errors. You agree that any reliance on materials posted by users, or on any other form of communication with users, will be at your own risk. Additionally, CINCO NOVENTA Y TRES CONSULTORES SA DE CV.. does not warrant the content of the Web Site including limited liability for non-functional links, inaccuracies or typographical errors. The same terms are applicable to CINCO NOVENTA Y TRES CONSULTORES SA DE CV.
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3 uppercase">10. Exclusion of Guarantees</h2>
          <p className="uppercase">
            THE SITE AND ALL CONTENT IS PROVIDED «AS IS» WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. THE COMPANY AND ITS ASSOCIATED AGENTS (CINCO NOVENTA Y TRES CONSULTORES SA DE CV.) TO THE FULLEST EXTENT PERMITTED BY LAW, LIMITS LIABILITY FOR ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO THE WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. THE COMPANY AND ITS ASSOCIATED AGENTS (CINCO NOVENTA Y TRES CONSULTORES SA DE CV.) MAKE NO WARRANTIES ABOUT THE ACCURACY, RELIABILITY, COMPLETENESS OR TIMELINESS OF THE WEBSITE CONTENT, SERVICES, SOFTWARE, TEXT, GRAPHICS AND LINKS. CINCO NOVENTA Y TRES CONSULTORES SA DE CV. AND ITS ASSOCIATED AGENTS (CINCO NOVENTA Y TRES CONSULTORES SA DE CV.) DO NOT WARRANT THAT THE SITE WILL OPERATE ERROR-FREE OR THAT THE SITE AND ITS SERVERS ARE FREE OF COMPUTER VIRUSES OR OTHER HARMFUL MECHANISMS. IF YOUR USE OF THE SITE RESULTS DIRECTLY OR INDIRECTLY IN THE NEED FOR SERVICING OR REPLACING EQUIPMENT OR DATA, CINCO NOVENTA Y TRES CONSULTORES SA DE CV. AND ITS ASSOCIATED AGENTS (CINCO NOVENTA Y TRES CONSULTORES SA DE CV.) ARE NOT RESPONSIBLE FOR THE COSTS ASSOCIATED WITH ANY SUCH SERVICING OR REPLACEMENT.
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">11. Core Resources Completion Termination</h2>
          <p>
            CINCO NOVENTA Y TRES CONSULTORES SA DE CV. and its associated agents reserve the right, in their sole discretion, to pursue all legal remedies, including without limitation, removal of your postings to this Web Site, immediate termination of passwords to this Web Site and/or any other services provided to you by the Company and its associated agents, due to any breach by you of these terms and conditions of use or if the Company is unable to verify or authenticate any information you submit to the Web Site or other records; In the event of cancellation of service for these reasons CINCO NOVENTA Y TRES CONSULTORES SA DE CV. or its associated agents will not make any refunds of amounts paid for termination of service. Links to other sites: CINCO NOVENTA Y TRES CONSULTORES SA DE CV. and its associated agents contain links or hyperlinks to third party sites. These links are provided as a convenience to you and the contents are not endorsed by CINCO NOVENTA Y TRES CONSULTORES SA DE CV. is not responsible for the content of those sites or the accuracy of their materials. If you decide to access those sites it is your responsibility. Amendments to this Agreement and Changes to the Thecoreresources.com Website You may review these terms at any time and update their content. Any use of the Website shall be deemed to be acceptance by you of the terms herein. If at any time you find the terms unacceptable, you should not use this Website. Any new or different terms provided by you will be specifically rejected by CINCO NOVENTA Y TRES CONSULTORES SA DE CV. CINCO NOVENTA Y TRES CONSULTORES SA DE CV. may make changes to these terms without notice.
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">14. Compensation from CINCO NOVENTA Y TRES CONSULTORES SA DE CV.</h2>
          <p>
            You agree to defend, indemnify and hold harmless the Company and its associated agents, its officers, directors, employees and agents, from and against any claim, action or demand, including without limitation, damages, legal and accounting fees, arising out of or resulting from any allegation resulting from or in connection with your use of the Website, any materials posted by you or any breach of these terms. CINCO NOVENTA Y TRES CONSULTORES SA DE CV. will inform you of the existence of any such claims, suits or proceedings and will assist you, at your expense, in defending any such claims, suits or proceedings.
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">15. User information</h2>
          <p>
            The CINCO NOVENTA Y TRES CONSULTORES SA DE CV Privacy Notice incorporates this agreement.
          </p>
        </section>

        <section>
          <h2 className="font-raleway font-bold text-2xl text-black mb-3">16. Notifications and questions</h2>
          <p>
            Questions regarding the use of this Website should be directed to <a href="mailto:d.murguia@toilconsulting.com" className="text-[#560FF3] font-semibold underline">d.murguia@toilconsulting.com</a>. Notices should be sent to the address shown on the Website.
          </p>
        </section>
      </div>
    </main>
  );
}
