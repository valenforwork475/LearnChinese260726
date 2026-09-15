/**
 * Utility to copy text to clipboard with automatic toast notification.
 */
export function copyToClipboard(text, customMessage) {
  if (!text) return;

  const msg = customMessage || `คัดลอก "${text}" เรียบร้อยแล้ว! 📋`;

  // Modern Clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      triggerToast(msg);
    }).catch(() => {
      fallbackCopyTextToClipboard(text, msg);
    });
  } else {
    fallbackCopyTextToClipboard(text, msg);
  }
}

function fallbackCopyTextToClipboard(text, message) {
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    if (successful) {
      triggerToast(message);
    }
  } catch (err) {
    console.error('Copy fallback failed:', err);
  }
}

function triggerToast(message) {
  window.dispatchEvent(new CustomEvent('sinostep_toast', { detail: { message } }));
}
