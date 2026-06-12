const LEAD_FORM_ID = 'apply-lead-form';
const STICKY_HEADER_OFFSET = 100;

function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;

  window.scrollTo({
    top: elementPosition - STICKY_HEADER_OFFSET,
    behavior: 'smooth',
  });
}

export function scrollToLeadForm() {
  scrollToElement(LEAD_FORM_ID);
}

export function scrollToProgramsOffered() {
  scrollToElement('programs-offered');
}
