//For FAQ
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const content = faqItem.querySelector('.faq-content');
    const icon = faqItem.querySelector('.faq-icon');
  
    // Toggle open/closed state
    faqItem.classList.toggle('open');
    
    // Update the icon between "+" and "-"
    icon.textContent = faqItem.classList.contains('open') ? '-' : '+';
  
    // Animation for slide down/up
    if (faqItem.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand content
    } else {
      content.style.maxHeight = 0; // Collapse content
    }
  }