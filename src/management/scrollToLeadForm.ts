const LEAD_FORM_ID = 'apply-lead-form';
const STICKY_HEADER_OFFSET = 80;

export function scrollToLeadForm() {
  const element = document.getElementById(LEAD_FORM_ID);
  if (!element) return;

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;

  window.scrollTo({
    top: elementPosition - STICKY_HEADER_OFFSET,
    behavior: 'smooth',
  });
}
