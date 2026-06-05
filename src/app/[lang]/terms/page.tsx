import React from 'react';
import type { Metadata } from 'next';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' ? 'Términos y Condiciones | Core Resources' : 'Terms and Conditions | Core Resources',
    description: lang === 'es' ? 'Términos y condiciones para el uso de Thecoreresources.com.' : 'Terms and conditions for using Thecoreresources.com.',
  };
}

const TermsEs = () => (
  <div className="space-y-10 text-gray-800 text-lg leading-relaxed">
    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">1. Introducción</h2>
      <p>
        Esta página establece los "términos y condiciones" bajo los cuales puede usar Thecoreresources.com. Lea esta página cuidadosamente. Si no acepta los términos y condiciones establecidos aquí, no use este sitio web ni el servicio.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">2. Aceptación de los términos</h2>
      <p>
        Al utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones. Los términos y condiciones pueden ser actualizados por CINCO NOVENTA Y TRES CONSULTORES SA DE CV en cualquier momento sin previo aviso, por lo que debe visitar esta página periódicamente para revisar la versión más reciente de los mismos. Los términos "usted" y "usuario" tal como se usan aquí se refieren a todas las personas y/o entidades que acceden a este sitio web por cualquier motivo.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">3. Acuerdo Obligatorio</h2>
      <p>
        Estos términos (que pueden ser modificados de vez en cuando por Thecoreresources.com) forman un acuerdo vinculante entre usted y Thecoreresources.com. El acceso y uso de Thecoreresources.com indica su aceptación de estos términos. Además, usted acepta usar Thecoreresources.com bajo su propio riesgo. En el caso de la contratación electrónica de servicios, se perfeccionará desde la aceptación de la propuesta o las condiciones con las que fue modificada.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">4. Descripción del Servicio</h2>
      <p>
        Usted comprende y acepta que el servicio puede incluir ciertas comunicaciones de CINCO NOVENTA Y TRES CONSULTORES SA DE CV, tales como mensajes administrativos y anuncios de servicio. Estas comunicaciones se consideran parte del servicio de CINCO NOVENTA Y TRES CONSULTORES SA DE CV y no puede optar por no recibirlas. El uso de la herramienta en línea denominada "www.Thecoreresources.com" de la empresa CINCO NOVENTA Y TRES CONSULTORES SA DE CV es parte del servicio y su uso se regirá por los términos de este documento. El lanzamiento de nuevos productos y propiedades está sujeto a estos términos. Usted comprende y acepta que los servicios anteriores se proporcionan "tal cual" y que CINCO NOVENTA Y TRES CONSULTORES SA DE CV no asume ninguna responsabilidad por la eliminación, la falta de entrega o el almacenamiento de cualquier comunicación o funciones de personalización.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">5. Otras Reglas Particulares de Uso del Sitio Web</h2>
      <p>
        Usted declara, garantiza y se compromete a que no utilizará (ni planeará, alentará ni ayudará a otros a utilizar) el sitio web para ningún otro propósito ni de ninguna manera prohibida por los términos aquí establecidos o la ley aplicable. Es su responsabilidad asegurarse de utilizar el sitio web de acuerdo con los términos especificados en este documento.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">7. Reglas de Publicación, Conducta y Seguridad</h2>
      <p className="mb-4">
        Usted acepta cumplir con las reglas de conducta y seguridad de CINCO NOVENTA Y TRES CONSULTORES SA DE CV en este sitio web. Los usuarios que violen esas reglas tendrán su uso y acceso al sitio suspendido o terminado a discreción exclusiva de CINCO NOVENTA Y TRES CONSULTORES SA DE CV. CINCO NOVENTA Y TRES CONSULTORES SA DE CV se reserva el derecho de cambiar estas reglas. Las Reglas de Conducta, Publicación y Seguridad se describen a continuación:
      </p>

      <div className="space-y-6 ml-4 md:ml-8 border-l-4 border-[#560FF3] pl-6">
        <div>
          <h3 className="font-bold text-black mb-2">7.1 Reglas de Publicación. Conducta y Seguridad</h3>
          <p>
            Usted acepta cumplir con las reglas de conducta y seguridad en este sitio web. Los usuarios que violen esas reglas tendrán su uso y acceso al sitio suspendido o terminado a discreción exclusiva.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-black mb-2">7.2 General</h3>
          <p>
            La información de contacto de CINCO NOVENTA Y TRES CONSULTORES SA DE CV se encuentra en el sitio web. CINCO NOVENTA Y TRES CONSULTORES SA DE CV y sus agentes asociados no asumen responsabilidad por la idoneidad o capacidad de descarga de contenido fuera de México. El acceso al contenido puede no ser legal para ciertas personas o en ciertos países. Si accede al contenido desde fuera de México, lo hace bajo su propio riesgo y es responsable del cumplimiento de las leyes dentro de su jurisdicción.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-black mb-2">7.3 Reglas de Conducta</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>No puede responder a publicaciones en nombre de otros usuarios de ninguna manera y para ningún propósito distinto al previsto.</li>
            <li>No puede enviar correos electrónicos comerciales a los usuarios.</li>
            <li>Reporte publicaciones o comportamientos inapropiados a: <a href="mailto:contact@thecoreresources.com" className="text-[#560FF3] underline">contact@thecoreresources.com</a></li>
            <li>No puede eliminar ni revisar ningún material publicado por ninguna otra persona o entidad.</li>
          </ul>
          <p className="mb-2">
            Si en algún momento CINCO NOVENTA Y TRES CONSULTORES SA DE CV determina que lo ha engañado respecto a su práctica comercial, nos reservamos el derecho de rescindir este acuerdo.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-black mb-2">7.4 Reglas de Seguridad</h3>
          <p className="mb-2">A. Se prohíbe a los usuarios violar o intentar violar la seguridad del sitio web, que incluye, entre otros:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Ingresar datos no destinados a ese usuario o ingresar a un servidor o cuenta a la que no está autorizado.</li>
            <li>Atacar, escanear o probar la vulnerabilidad del sistema o red.</li>
            <li>Atacar e interferir con el servicio enviando un virus, sobrecargando, inundando, etc.</li>
            <li>Enviar correos electrónicos no solicitados, incluidas promociones o publicidad.</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">8. Exclusión de Garantías y Responsabilidad</h2>
      <p>
        CINCO NOVENTA Y TRES CONSULTORES SA DE CV no es una agencia de empleo ni una empresa de reclutamiento, y no ofrece ninguna representación o garantía sobre la efectividad u oportunidad de obtener empleo para los usuarios. No garantizamos la veracidad, exactitud, actualidad o confiabilidad de los materiales publicados.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3 uppercase">10. Exclusión de Garantías</h2>
      <p className="uppercase">
        EL SITIO Y TODO EL CONTENIDO SE PROPORCIONAN "TAL CUAL" SIN GARANTÍA DE NINGÚN TIPO. LA EMPRESA LIMITA LA RESPONSABILIDAD DE TODAS LAS GARANTÍAS EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">11. Terminación</h2>
      <p>
        CINCO NOVENTA Y TRES CONSULTORES SA DE CV se reserva el derecho, a su entera discreción, de buscar todos los recursos legales, incluida la eliminación de sus publicaciones y la cancelación inmediata del acceso a los servicios en caso de cualquier incumplimiento.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">14. Indemnización</h2>
      <p>
        Usted acepta defender, indemnizar y eximir de responsabilidad a la Compañía y sus agentes asociados de cualquier reclamación o demanda que surja de su uso del Sitio Web.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">15. Información del usuario</h2>
      <p>
        El Aviso de Privacidad de CINCO NOVENTA Y TRES CONSULTORES SA DE CV incorpora este acuerdo.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">16. Notificaciones y preguntas</h2>
      <p>
        Las preguntas sobre el uso de este sitio web deben dirigirse a <a href="mailto:contact@thecoreresources.com" className="text-[#560FF3] font-semibold underline">contact@thecoreresources.com</a>. Las notificaciones deben enviarse a la dirección que se muestra en el sitio web.
      </p>
    </section>
  </div>
);

const TermsEn = () => (
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
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">7. Publication Rules. Conduct and Security</h2>
      <p className="mb-4">
        You agree to comply with CINCO NOVENTA Y TRES CONSULTORES SA DE CV &apos;s rules of conduct and security on this website. Users who violate those rules will have their use and access of the site suspended or terminated at the sole discretion of CINCO NOVENTA Y TRES CONSULTORES SA DE CV.CINCO NOVENTA Y TRES CONSULTORES SA DE CV. reserves the right to change these rules. The Rules of Conduct, Publication and Security are as described below:
      </p>

      <div className="space-y-6 ml-4 md:ml-8 border-l-4 border-[#560FF3] pl-6">
        <div>
          <h3 className="font-bold text-black mb-2">7.1 Publication Rules. Conduct and Security</h3>
          <p>
            You agree to comply with CINCO NOVENTA Y TRES CONSULTORES SA DE CV’s rules of conduct and safety on this Web site. Users who violate those rules will have their use and access of the site suspended or terminated at the sole discretion of CINCO NOVENTA Y TRES CONSULTORES SA DE CV.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-black mb-2">7.2 General</h3>
          <p>
            CINCO NOVENTA Y TRES CONSULTORES SA DE CV.‘s contact information is listed on the Website. CINCO NOVENTA Y TRES CONSULTORES SA DE CV and its associated agents do not assume responsibility for the appropriateness or downloadability of content outside of Mexico. Access to the content of the website may not be legal for certain persons or in certain countries. If you access the content of this website from outside of Mexico, you do so at your own risk and are responsible for compliance with the laws within your jurisdiction.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-black mb-2">7.3 Rules of Conduct</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>You may not respond to postings on behalf of other users in any way and for any purpose other than that intended (e.g., to apply to the work or to initiate a discussion regarding the work).Communications soliciting the employer’s business are prohibited.</li>
            <li>You may not send commercial emails to users.</li>
            <li>Report inappropriate publications or behavior to: <a href="mailto:contact@thecoreresources.com" className="text-[#560FF3] underline">contact@thecoreresources.com</a></li>
            <li>You may not delete or revise any material posted by any other person or entity.</li>
          </ul>
          <p className="mb-2">
            If at any time during the term of this agreement CINCO NOVENTA Y TRES CONSULTORES SA DE CV. learns that you have misled it regarding its business practice and/or services, and/or have purchased services that do not accurately represent its business, CINCO NOVENTA Y TRES CONSULTORES SA DE CV.. reserves the right to terminate this agreement and your use of privileges immediately without notice.
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
        </div>
      </div>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">8. Exclusion of Guarantees and Liability</h2>
      <p>
        CINCO NOVENTA Y TRES CONSULTORES SA DE CV. is not an employment agency or a recruiting firm, and makes no representation or warranty as to the effectiveness or timeliness of obtaining employment for users. CINCO NOVENTA Y TRES CONSULTORES SA DE CV. does not warrant the materials posted on this site by users who are recruited candidates or for positions to be filled and is not responsible for any decisions regarding employment, for any reason made by any user.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3 uppercase">10. Exclusion of Guarantees</h2>
      <p className="uppercase">
        THE SITE AND ALL CONTENT IS PROVIDED «AS IS» WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. THE COMPANY AND ITS ASSOCIATED AGENTS (CINCO NOVENTA Y TRES CONSULTORES SA DE CV.) TO THE FULLEST EXTENT PERMITTED BY LAW, LIMITS LIABILITY FOR ALL WARRANTIES.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">11. Core Resources Completion Termination</h2>
      <p>
        CINCO NOVENTA Y TRES CONSULTORES SA DE CV. and its associated agents reserve the right, in their sole discretion, to pursue all legal remedies, including without limitation, removal of your postings to this Web Site, immediate termination of passwords to this Web Site and/or any other services provided to you by the Company and its associated agents.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">14. Compensation from CINCO NOVENTA Y TRES CONSULTORES SA DE CV.</h2>
      <p>
        You agree to defend, indemnify and hold harmless the Company and its associated agents, its officers, directors, employees and agents, from and against any claim, action or demand, including without limitation, damages, legal and accounting fees, arising out of or resulting from any allegation resulting from or in connection with your use of the Website.
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
        Questions regarding the use of this Website should be directed to <a href="mailto:contact@thecoreresources.com" className="text-[#560FF3] font-semibold underline">contact@thecoreresources.com</a>. Notices should be sent to the address shown on the Website.
      </p>
    </section>
  </div>
);

export default async function TermsPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  return (
    <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto">
      <h1 className="font-raleway font-bold text-[36px] md:text-[48px] leading-none text-black mb-12">
        {lang === 'es' ? 'Términos y Condiciones' : 'Terms and Conditions'}
      </h1>
      {lang === 'es' ? <TermsEs /> : <TermsEn />}
    </main>
  );
}
