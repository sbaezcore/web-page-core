'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function submitContact(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const companyName = formData.get('companyName') as string;
  const message = formData.get('message') as string;

  if (!name || !email) {
    throw new Error('Missing required fields');
  }

  await prisma.clientLead.create({
    data: {
      name,
      email,
      phone: phone || null,
      companyName: companyName || null,
      message: message || null,
    },
  });

  return { success: true };
}
