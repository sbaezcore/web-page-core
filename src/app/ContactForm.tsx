'use client';

import { useState } from 'react';
import { submitContact } from './actions';
import styles from './page.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleAction(formData: FormData) {
    setStatus('submitting');
    try {
      await submitContact(formData);
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.glassCard} style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#4ade80' }}>¡Gracias por contactarnos!</h3>
        <p style={{ color: '#e2e8f0' }}>Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
        <button 
          className={styles.submitBtn} 
          style={{ marginTop: '2rem' }}
          onClick={() => setStatus('idle')}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form action={handleAction} className={styles.glassCard}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Nombre completo</label>
        <input type="text" id="name" name="name" required className={styles.input} placeholder="Ej. Juan Pérez" />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Correo electrónico</label>
        <input type="email" id="email" name="email" required className={styles.input} placeholder="juan@ejemplo.com" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone" className={styles.label}>Teléfono (opcional)</label>
        <input type="tel" id="phone" name="phone" className={styles.input} placeholder="+52 555 123 4567" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="companyName" className={styles.label}>Empresa (opcional)</label>
        <input type="text" id="companyName" name="companyName" className={styles.input} placeholder="Nombre de tu empresa" />
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Mensaje (opcional)</label>
        <textarea id="message" name="message" className={styles.textarea} placeholder="¿En qué te podemos ayudar?"></textarea>
      </div>
      
      {status === 'error' && (
        <p style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.875rem' }}>
          Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo.
        </p>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
}
