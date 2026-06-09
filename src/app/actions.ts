'use server';

import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_SEND,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function submitContact(formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const jobTitle = formData.get('jobTitle') as string;
  const companyName = formData.get('companyName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  if (!firstName || !lastName || !email || !jobTitle || !companyName || !service) {
    throw new Error('Missing required fields');
  }

  await prisma.contactForm.create({
    data: {
      firstName,
      lastName,
      jobTitle,
      companyName,
      email,
      phone: phone || null,
      service,
      message: message || null,
    },
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
      <h2 style="color: #6225E6; border-bottom: 2px solid #6225E6; padding-bottom: 10px;">Nuevo Registro de Formulario</h2>
      <p style="color: #333; font-size: 16px;">Hola Equipo de Marketing,</p>
      <p style="color: #333; font-size: 16px;">Un nuevo prospecto ha llenado el formulario de contacto desde la página web. Aquí están los detalles:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; width: 35%;"><strong>Nombre:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Puesto (Job Title):</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${jobTitle}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Empresa:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${companyName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Teléfono:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || 'No especificado'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Servicio de Interés:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; color: #00c29a; font-weight: bold;">${service}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Mensaje:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${message || 'Sin mensaje adicional'}</td>
        </tr>
      </table>
      
      <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">Mensaje automático enviado desde thecoreresources.com</p>
    </div>
  `;

  const mailOptions = {
    from: `"The Core Resources Web" <${process.env.EMAIL_SEND}>`,
    to: "contact@thecoreresources.com, florencia.figueroa@thecoreresources.com, mariana.palavecino@thecoreresources.com",
    subject: `Nuevo Lead Registrado: ${firstName} ${lastName} - ${service}`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }

  return { success: true };
}
