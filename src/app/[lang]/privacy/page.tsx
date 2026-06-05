import React from 'react';
import type { Metadata } from 'next';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang || 'en';
  return {
    title: lang === 'es' ? 'Aviso de Privacidad | Core Resources' : 'Privacy Policy | Core Resources',
    description: lang === 'es' ? 'Aviso de Privacidad de Thecoreresources.com' : 'Privacy Policy for Thecoreresources.com',
  };
}

const PrivacyEs = () => (
  <div className="space-y-10 text-gray-800 text-lg leading-relaxed">
    <section>
      <p className="mb-4">
        Este documento constituye el Aviso de Privacidad para los fines de las disposiciones de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la "LFPDP") y las disposiciones que emanan de ella o están relacionadas con ella. Este Aviso de Privacidad (denominado "Aviso") se aplica a la información personal recopilada sobre el Titular de los Datos por CINCO NOVENTA Y TRES CONSULTORES SA DE CV, en su calidad de Responsable del Tratamiento. El propósito de este Aviso es proteger sus datos personales, a través de su tratamiento legítimo, controlado e informado, a fin de garantizar su privacidad, así como su derecho a la autodeterminación informativa.
      </p>
      <p>
        De acuerdo con el artículo 3, fracción V, de la Ley, se entiende por Datos Personales: Cualquier información concerniente a una persona física identificada o identificable según lo dispuesto en la fracción I del artículo 16 de la Ley, será el Responsable de su información personal (Datos Personales).
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">¿Qué información recopilamos?</h2>
      <p>
        El Responsable recopila información que puede identificarlo razonablemente, por ejemplo, pero sin limitarse a: su nombre y apellido; fecha de nacimiento; dirección de correo electrónico, información general de su perfil.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">¿Cómo utilizamos o compartimos la información que recopilamos?</h2>
      <p className="mb-4">
        Al enviar por correo electrónico su información personal a los diferentes representantes de CINCO NOVENTA Y TRES CONSULTORES SA DE CV y/o al completar el formulario de solicitud en línea que aparece en la página, usted acepta y autoriza a CINCO NOVENTA Y TRES CONSULTORES SA DE CV a utilizar y tratar de manera automatizada sus datos personales e información proporcionada, los cuales formarán parte de nuestra base de datos con el propósito de utilizarlos de manera enunciativa, pero no limitativa para: identificarlo, comunicarse con usted, contactarlo, enviarle información, actualizar nuestra base de datos y promover todo el contenido artístico generado por CINCO NOVENTA Y TRES CONSULTORES SA DE CV.
      </p>
      <p className="mb-4">
        CINCO NOVENTA Y TRES CONSULTORES SA DE CV, como responsable del tratamiento de sus datos personales, está obligado a cumplir con los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad tutelados por la Ley; por lo tanto, con base en los artículos 13 y 14 de la Ley, CINCO NOVENTA Y TRES CONSULTORES SA DE CV se compromete a mantener sus datos personales estrictamente confidenciales, así como a mantener las medidas de seguridad administrativas, técnicas y físicas para protegerlos contra cualquier daño, pérdida, alteración, acceso o tratamiento no autorizado.
      </p>
      <p>
        <strong>¿Cómo contactar a nuestro Departamento de Datos Personales?</strong><br />
        Para cualquier comunicación sobre nuestro Aviso de Privacidad, comuníquese con nuestro Departamento de Datos Personales: <a href="mailto:contact@thecoreresources.com" className="text-[#560FF3] font-semibold underline">contact@thecoreresources.com</a>
      </p>
    </section>
  </div>
);

const PrivacyEn = () => (
  <div className="space-y-10 text-gray-800 text-lg leading-relaxed">
    <section>
      <p className="mb-4">
        This document is composed by the Privacy Notice for the purposes of the provisions of the Federal Law for the Protection of Personal Data in Possession of Private Parties (the «LFPDP») and the provisions that emanate from it or are related to it. This Privacy Notice (referred to as «Notice») applies to the personal information collected about the Data Subject by CINCO NOVENTA Y TRES CONSULTORES SA DE CV, in it&apos;s capacity as Data Controller. The purpose of this Notice is to protect your personal data, through it&apos;s legitimate, controlled and informed treatment, in order to guarantee your privacy, as well as your right to informational self-determination.
      </p>
      <p>
        According to article 3, section V, of the Law, Personal Data is understood as: Any information concerning an identified or identifiable natural person according to the provisions of section I of article 16 of the Law, will be the Responsible for your personal information (Personal Data).
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">What information do we collect?</h2>
      <p>
        The Responsible collects information that can reasonably identify you, for example, but not limited to: your first and last name; date of birth; e-mail address, general information of your profile.
      </p>
    </section>

    <section>
      <h2 className="font-raleway font-bold text-2xl text-black mb-3">How do we use or share the information we collect?</h2>
      <p className="mb-4">
        By sending via email your personal information to the different representatives of CINCO NOVENTA Y TRES CONSULTORES SA DE CV. and/or completing the online application form that appears on the page, you accept and authorize CINCO NOVENTA Y TRES CONSULTORES SA DE CV. to use and treat in an automated way your personal data and information provided, which will be part of our database with the purpose of using them in an enunciative, but not limited way to: identify you, communicate with you, contact you, send you information, update our database, and promote all the artistic content generated by CINCO NOVENTA Y TRES CONSULTORES SA DE CV..
      </p>
      <p className="mb-4">
        CINCO NOVENTA Y TRES CONSULTORES SA DE CV. as responsible for the treatment of your personal data, is obliged to comply with the principles of legality, consent, information, quality, purpose, loyalty, proportionality and responsibility protected by the Law; therefore, based on articles 13 and 14 of the Law, CINCO NOVENTA Y TRES CONSULTORES SA DE CV. is committed to keep your personal data strictly confidential, as well as to maintain the administrative, technical and physical security measures to protect them against any damage, loss, alteration, access or unauthorized treatment.
      </p>
      <p>
        <strong>How to contact our Personal Data Department?</strong><br />
        For any communication about our Privacy Notice, please contact our Personal Data Department: <a href="mailto:contact@thecoreresources.com" className="text-[#560FF3] font-semibold underline">contact@thecoreresources.com</a>
      </p>
    </section>
  </div>
);

export default async function PrivacyPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  return (
    <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto">
      <h1 className="font-raleway font-bold text-[36px] md:text-[48px] leading-none text-black mb-12">
        {lang === 'es' ? 'Aviso de Privacidad' : 'Privacy Notice'}
      </h1>
      {lang === 'es' ? <PrivacyEs /> : <PrivacyEn />}
    </main>
  );
}
