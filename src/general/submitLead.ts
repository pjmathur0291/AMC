export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  state: string;
  city: string;
  courseId: string;
}

const WEBHOOK_API_KEY =
  import.meta.env.VITE_EDMISSION_API_KEY ??
  'pi_e1b07fb70c2a68e6ded72022ed9e984afc79b60cc01d57cce24d8f005ac37033';

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { first_name: '', last_name: '' };
  }
  if (parts.length === 1) {
    return { first_name: parts[0], last_name: '' };
  }

  return {
    first_name: parts[0],
    last_name: parts.slice(1).join(' '),
  };
}

function normalizePhone(phone: string) {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits.slice(2);
  }
  if (digits.length === 10) {
    return digits;
  }
  return '';
}

function getTrackingParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    medium: params.get('medium') ?? params.get('utm_medium') ?? 'Mediagarh',
    campaign: params.get('campaign') ?? params.get('utm_campaign') ?? '',
  };
}

export async function submitLead(formData: LeadFormData) {
  const phoneNumber = normalizePhone(formData.phone);
  if (!phoneNumber) {
    throw new Error('Please enter a valid 10-digit mobile number.');
  }

  const { first_name, last_name } = splitName(formData.name);
  const { medium, campaign } = getTrackingParams();

  const url = new URL('https://api.edmissioncrm.com/leads/webhook');
  url.searchParams.set('api_key', WEBHOOK_API_KEY);
  url.searchParams.set('medium', medium);
  if (campaign) {
    url.searchParams.set('campaign', campaign);
  }

  const payload = {
    medium,
    data: [
      {
        first_name,
        last_name,
        email: formData.email.trim(),
        Course: formData.courseId,
        state: formData.state.trim(),
        city: formData.city.trim(),
        phone: {
          country_code: '+91',
          number: phoneNumber,
        },
      },
    ],
  };

  const response = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Unable to submit your application. Please try again.');
  }
}

export function redirectToThankYou() {
  window.location.href = '/thank-you/';
}
