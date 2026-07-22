/* ============================================
   Buy Me Coffee — Application Logic v2
   ============================================ */

// ─── Configuration ───────────────────────────────────────────
const CONFIG = {
  paystackPublicKey: 'pk_live_a974a7744213c7c8d0fd95f4de362ced3f184c33',

  currencies: {
    USD: { code: 'USD', symbol: '$',   name: 'US Dollar',        flag: '🇺🇸', minorMultiplier: 100 },
    KES: { code: 'KES', symbol: 'KSh', name: 'Kenyan Shilling',  flag: '🇰🇪', minorMultiplier: 100 },
  },

  defaultCurrency: 'USD',
  presetAmounts: [1, 2, 3, 5, 10, 25],

  // Local storage keys
  storageKeys: {
    supporters: 'bmc_supporters',
  },

  googlePay: {
    environment: 'TEST',
    merchantId: 'BCR2DN4T______',
    merchantName: 'Buy Me Coffee',
    gateway: 'paystack',
    gatewayMerchantId: '',
    allowedCardNetworks: ['MASTERCARD', 'VISA'],
    allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
  }
};

// ─── State ───────────────────────────────────────────────────
const state = {
  currency: CONFIG.defaultCurrency,
  amount: 5,
  customMode: false,
};

// ─── Helpers ─────────────────────────────────────────────────
function getCurrency() { return CONFIG.currencies[state.currency]; }

function formatAmount(amount, currencyCode) {
  const code = currencyCode || state.currency;
  if (code === 'KES') return `KSh ${Number(amount).toLocaleString()}`;
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD',
    minimumFractionDigits: 0, maximumFractionDigits: 2,
  }).format(amount);
}

function amountInMinor() {
  return Math.round(state.amount * getCurrency().minorMultiplier);
}

function showToast(message, type = 'info', duration = 4000) {
  const existing = document.querySelector('.status-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = `status-toast status-toast--${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, duration);
}


// ═══════════════════════════════════════════════════════════
//  SUPPORTERS / REVIEWS STORAGE
// ═══════════════════════════════════════════════════════════

function getSupporters() {
  try {
    const data = localStorage.getItem(CONFIG.storageKeys.supporters);
    return data ? JSON.parse(data) : getDefaultSupporters();
  } catch { return getDefaultSupporters(); }
}

function addSupporter(supporter) {
  const list = getSupporters();
  list.unshift(supporter);
  // Keep last 50 max
  if (list.length > 50) list.length = 50;
  localStorage.setItem(CONFIG.storageKeys.supporters, JSON.stringify(list));
  renderSupporters();
}

function getDefaultSupporters() {
  return [
    { name: 'Alex M.', amount: '$5', message: 'Great work! Keep it up ☕', time: '2 hours ago', initials: 'AM' },
    { name: 'Sarah K.', amount: '$10', message: 'Love your service, you deserve a big coffee!', time: '5 hours ago', initials: 'SK' },
    { name: 'James O.', amount: '$3', message: 'Thanks for helping me out 🙏', time: '1 day ago', initials: 'JO' },
    { name: 'Mary W.', amount: 'KSh 500', message: 'Amazing service, bought you a Kenyan coffee!', time: '2 days ago', initials: 'MW' },
    { name: 'David L.', amount: '$25', message: 'You went above and beyond. Enjoy many coffees!', time: '3 days ago', initials: 'DL' },
    { name: 'Grace N.', amount: '$2', message: 'Small token of appreciation ❤️', time: '4 days ago', initials: 'GN' },
    { name: 'Peter T.', amount: '$5', message: 'Keep doing what you do best!', time: '5 days ago', initials: 'PT' },
    { name: 'Jane A.', amount: 'KSh 200', message: 'Asante sana! Great job 🇰🇪', time: '1 week ago', initials: 'JA' },
  ];
}

function renderSupporters() {
  const track = document.getElementById('supporters-track');
  if (!track) return;

  const supporters = getSupporters();
  if (supporters.length === 0) {
    track.innerHTML = '<div class="supporters-empty">Be the first to buy me a coffee! ☕</div>';
    return;
  }

  // Duplicate for infinite scroll effect
  const cards = supporters.map(s => createSupporterCard(s)).join('');
  track.innerHTML = cards + cards;
}

function createSupporterCard(s) {
  const newBadge = s.isNew
    ? `<span style="
        display:inline-block;
        background:linear-gradient(135deg,#f97316,#ea580c);
        color:#fff;
        font-size:0.6rem;
        font-weight:800;
        letter-spacing:0.08em;
        padding:2px 7px;
        border-radius:999px;
        margin-left:6px;
        vertical-align:middle;
        text-transform:uppercase;
        box-shadow:0 0 8px rgba(249,115,22,0.5);
      ">✨ NEW</span>`
    : '';

  return `
    <div class="supporter-card${s.isNew ? ' supporter-card--new' : ''}">
      <div class="supporter-card__header">
        <div class="supporter-card__avatar">${s.initials}</div>
        <div>
          <div class="supporter-card__name">${escapeHtml(s.name)}${newBadge}</div>
          <div class="supporter-card__amount">☕ ${escapeHtml(s.amount)}</div>
        </div>
      </div>
      <div class="supporter-card__message">"${escapeHtml(s.message)}"</div>
      <div class="supporter-card__time">${escapeHtml(s.time)}</div>
    </div>
  `;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}


// ═══════════════════════════════════════════════════════════
//  RECEIPT
// ═══════════════════════════════════════════════════════════

function showReceipt(transactionData) {
  const overlay = document.getElementById('receipt-overlay');
  const email = document.getElementById('customer-email').value.trim();
  const message = document.getElementById('tip-message').value.trim();
  const now = new Date();

  // Populate receipt
  document.getElementById('receipt-ref').textContent = transactionData.reference || transactionData.ref || 'N/A';
  document.getElementById('receipt-date').textContent = now.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  document.getElementById('receipt-email').textContent = email;
  document.getElementById('receipt-service').textContent = 'Buy Me Coffee ☕';
  document.getElementById('receipt-amount').textContent = formatAmount(state.amount);
  document.getElementById('receipt-currency').textContent = state.currency;
  document.getElementById('receipt-message').textContent = message || '—';

  // Store receipt data for download
  overlay.dataset.receipt = JSON.stringify({
    reference: transactionData.reference || transactionData.ref || 'N/A',
    date: now.toISOString(),
    dateFormatted: document.getElementById('receipt-date').textContent,
    email: email,
    service: 'Buy Me Coffee',
    amount: formatAmount(state.amount),
    currency: state.currency,
    message: message || '—',
  });

  overlay.classList.add('show');
}

function closeReceipt() {
  document.getElementById('receipt-overlay').classList.remove('show');
}

function downloadReceipt() {
  const overlay = document.getElementById('receipt-overlay');
  const data = JSON.parse(overlay.dataset.receipt || '{}');

  const receiptText = `
╔══════════════════════════════════════════╗
║           ☕ BUY ME COFFEE               ║
║              RECEIPT                     ║
╠══════════════════════════════════════════╣
║                                          ║
║  Reference:  ${data.reference.padEnd(28)}║
║  Date:       ${data.dateFormatted.padEnd(28)}║
║  Email:      ${data.email.padEnd(28)}║
║  Service:    ${data.service.padEnd(28)}║
║  Amount:     ${data.amount.padEnd(28)}║
║  Currency:   ${data.currency.padEnd(28)}║
║  Message:    ${data.message.substring(0,26).padEnd(28)}║
║                                          ║
╠══════════════════════════════════════════╣
║  Payment processed securely via Paystack ║
║  Thank you for your generous tip! 🙏     ║
╚══════════════════════════════════════════╝
`.trim();

  const blob = new Blob([receiptText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `receipt_${data.reference}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Receipt downloaded!', 'success', 3000);
}


// ═══════════════════════════════════════════════════════════
//  CURRENCY TOGGLE
// ═══════════════════════════════════════════════════════════

function initCurrencyToggle() {
  document.querySelectorAll('.currency-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newCurrency = btn.dataset.currency;
      if (newCurrency === state.currency) return;
      state.currency = newCurrency;
      document.querySelectorAll('.currency-toggle__btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAmountChips();
      updateTotal();
      updateCustomPlaceholder();
    });
  });
}


// ═══════════════════════════════════════════════════════════
//  AMOUNT SELECTION
// ═══════════════════════════════════════════════════════════

function renderAmountChips() {
  const grid = document.getElementById('amount-grid');
  const cur = getCurrency();
  grid.innerHTML = '';
  CONFIG.presetAmounts.forEach(amount => {
    const chip = document.createElement('button');
    chip.className = 'amount-chip' + (amount === state.amount && !state.customMode ? ' active' : '');
    chip.dataset.amount = amount;
    chip.innerHTML = `<span>${cur.symbol}${amount}</span>`;
    chip.addEventListener('click', () => selectPresetAmount(amount));
    grid.appendChild(chip);
  });
}

function selectPresetAmount(amount) {
  state.amount = amount;
  state.customMode = false;
  const customInput = document.getElementById('custom-amount');
  if (customInput) customInput.value = '';
  document.querySelectorAll('.amount-chip').forEach(chip => {
    chip.classList.toggle('active', Number(chip.dataset.amount) === amount);
  });
  updateTotal();
}

function initCustomAmount() {
  const input = document.getElementById('custom-amount');
  input.addEventListener('input', () => {
    const val = parseFloat(input.value);
    if (!isNaN(val) && val > 0) {
      state.amount = val;
      state.customMode = true;
      document.querySelectorAll('.amount-chip').forEach(c => c.classList.remove('active'));
    } else if (input.value === '') {
      state.customMode = false;
      selectPresetAmount(5);
    }
    updateTotal();
  });
}

function updateCustomPlaceholder() {
  const input = document.getElementById('custom-amount');
  const symbolEl = document.getElementById('custom-amount-symbol');
  const cur = getCurrency();
  input.placeholder = 'Enter custom amount';
  symbolEl.textContent = cur.symbol;
}

function updateTotal() {
  document.getElementById('total-amount').textContent = formatAmount(state.amount);
  const btn = document.getElementById('paystack-pay-btn');
  if (btn && !btn.classList.contains('btn--loading')) {
    btn.innerHTML = `<span>☕</span> Buy Coffee — ${formatAmount(state.amount)}`;
  }
}


// ═══════════════════════════════════════════════════════════
//  PAYSTACK INLINE CHECKOUT
// ═══════════════════════════════════════════════════════════

function initPaystackCheckout() {
  const btn = document.getElementById('paystack-pay-btn');
  const emailInput = document.getElementById('customer-email');

  btn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const message = document.getElementById('tip-message').value.trim();

    if (!email || !email.includes('@')) {
      showToast('Please enter your email address', 'warning');
      emailInput.focus();
      return;
    }
    if (state.amount <= 0) {
      showToast('Please select or enter an amount', 'warning');
      return;
    }
    if (typeof PaystackPop === 'undefined') {
      showToast('Paystack SDK not loaded — check your connection', 'error');
      return;
    }

    btn.classList.add('btn--loading');
    btn.textContent = 'Processing…';

    try {
      const popup = new PaystackPop();
      popup.checkout({
        key: CONFIG.paystackPublicKey,
        email: email,
        amount: amountInMinor(),
        currency: state.currency,
        ref: 'BMC_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8),
        metadata: {
          custom_fields: [
            { display_name: 'Service', variable_name: 'service', value: 'Buy Me Coffee' },
            { display_name: 'Tip Amount', variable_name: 'tip_amount', value: formatAmount(state.amount) },
            { display_name: 'Message', variable_name: 'message', value: message || '—' },
          ]
        },

        onSuccess: (transaction) => {
          btn.classList.remove('btn--loading');
          btn.innerHTML = '✓ Thank You!';
          btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

          // Show receipt modal
          showReceipt(transaction);

          // Add to supporters with a nicely formatted name
          const rawName = email.split('@')[0]          // e.g. "john.doe" or "johndoe99"
            .replace(/[._\-]/g, ' ')                   // "john doe"
            .replace(/\d+/g, '')                       // strip trailing numbers
            .trim();

          // Capitalise each word
          const parts = rawName.split(' ').filter(Boolean).map(w =>
            w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
          );

          // Build "FirstName L." display name (First + Last initial)
          let displayName;
          if (parts.length >= 2) {
            displayName = parts[0] + ' ' + parts[1].charAt(0) + '.';
          } else if (parts.length === 1 && parts[0].length > 0) {
            displayName = parts[0];
          } else {
            displayName = email.split('@')[0]; // last resort: raw username
          }

          // Two-letter initials
          const initials = parts.length >= 2
            ? (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase()
            : (parts[0] || 'U').substring(0, 2).toUpperCase();

          addSupporter({
            name: displayName,
            amount: formatAmount(state.amount),
            message: message || 'Bought a coffee ☕',
            time: 'Just now',
            initials: initials,
            isNew: true,
          });

          showToast(`☕ Thank you for the coffee!`, 'success', 6000);
          console.log('Paystack Success:', transaction);

          // Reset button after a delay
          setTimeout(() => {
            btn.style.background = '';
            btn.innerHTML = `<span>☕</span> Buy Coffee — ${formatAmount(state.amount)}`;
          }, 8000);
        },

        onCancel: () => {
          btn.classList.remove('btn--loading');
          btn.innerHTML = `<span>☕</span> Buy Coffee — ${formatAmount(state.amount)}`;
          showToast('Payment was cancelled', 'warning');
        },

        onClose: () => {
          btn.classList.remove('btn--loading');
          if (!btn.textContent.includes('Thank You')) {
            btn.innerHTML = `<span>☕</span> Buy Coffee — ${formatAmount(state.amount)}`;
          }
        }
      });
    } catch (err) {
      btn.classList.remove('btn--loading');
      btn.innerHTML = `<span>☕</span> Buy Coffee — ${formatAmount(state.amount)}`;
      showToast('Failed to open checkout: ' + err.message, 'error');
      console.error('Paystack error:', err);
    }
  });
}


// ═══════════════════════════════════════════════════════════
//  GOOGLE PAY
// ═══════════════════════════════════════════════════════════

let paymentsClient = null;

function getBaseCardPaymentMethod() {
  return {
    type: 'CARD',
    parameters: {
      allowedAuthMethods: CONFIG.googlePay.allowedCardAuthMethods,
      allowedCardNetworks: CONFIG.googlePay.allowedCardNetworks,
    }
  };
}

function getCardPaymentMethod() {
  return Object.assign({}, getBaseCardPaymentMethod(), {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      parameters: {
        gateway: CONFIG.googlePay.gateway,
        gatewayMerchantId: CONFIG.googlePay.gatewayMerchantId,
      }
    }
  });
}

function getGooglePaymentsClient() {
  if (!paymentsClient) {
    paymentsClient = new google.payments.api.PaymentsClient({
      environment: CONFIG.googlePay.environment,
    });
  }
  return paymentsClient;
}

function onGooglePayLoaded() {
  const client = getGooglePaymentsClient();
  client.isReadyToPay({
    apiVersion: 2, apiVersionMinor: 0,
    allowedPaymentMethods: [getBaseCardPaymentMethod()],
  })
    .then(r => r.result ? addGooglePayButton() : showGPayUnavailable())
    .catch(err => { console.error('GPay:', err); showGPayUnavailable(); });
}

function showGPayUnavailable() {
  document.getElementById('gpay-button-container').innerHTML = `
    <div style="text-align:center;padding:12px;font-size:0.78rem;color:var(--text-muted);
    border:1px dashed var(--glass-border);border-radius:var(--radius-sm);width:100%;">
      Google Pay not available on this device/browser.<br>
      <span style="font-size:0.7rem;">Use the button above — it supports all payment methods.</span>
    </div>`;
}

function addGooglePayButton() {
  const client = getGooglePaymentsClient();
  const button = client.createButton({
    onClick: onGooglePayButtonClicked,
    buttonColor: 'black', buttonType: 'pay', buttonSizeMode: 'fill',
  });
  const container = document.getElementById('gpay-button-container');
  container.innerHTML = '';
  container.appendChild(button);
}

function onGooglePayButtonClicked() {
  if (state.amount <= 0) { showToast('Please select an amount first', 'warning'); return; }
  const countryCode = state.currency === 'KES' ? 'KE' : 'US';
  const client = getGooglePaymentsClient();
  client.loadPaymentData({
    apiVersion: 2, apiVersionMinor: 0,
    allowedPaymentMethods: [getCardPaymentMethod()],
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPrice: state.amount.toFixed(2),
      currencyCode: state.currency,
      countryCode: countryCode,
    },
    merchantInfo: {
      merchantId: CONFIG.googlePay.merchantId,
      merchantName: CONFIG.googlePay.merchantName,
    }
  })
    .then(paymentData => {
      const token = paymentData.paymentMethodData.tokenizationData.token;
      showReceipt({ reference: 'GPAY_' + Date.now() });
      const message = document.getElementById('tip-message').value.trim();
      const email = document.getElementById('customer-email').value.trim();
      addSupporter({
        name: email ? email.split('@')[0] : 'Coffee Lover',
        amount: formatAmount(state.amount),
        message: message || 'Bought a coffee via Google Pay ☕',
        time: 'Just now',
        initials: email ? email.substring(0,2).toUpperCase() : 'CL',
      });
      showToast('☕ Google Pay payment received!', 'success', 6000);
      console.log('GPay token:', token);
    })
    .catch(err => {
      if (err.statusCode === 'CANCELED') showToast('Cancelled', 'warning');
      else { showToast('Google Pay error', 'error'); console.error(err); }
    });
}


// ═══════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initCurrencyToggle();
  renderAmountChips();
  initCustomAmount();
  updateTotal();
  updateCustomPlaceholder();
  initPaystackCheckout();
  renderSupporters();

  // Receipt buttons (null-safe in case of caching issues)
  const closeBtn = document.getElementById('receipt-close-btn');
  const downloadBtn = document.getElementById('receipt-download-btn');
  const receiptOverlay = document.getElementById('receipt-overlay');

  if (closeBtn) closeBtn.addEventListener('click', closeReceipt);
  if (downloadBtn) downloadBtn.addEventListener('click', downloadReceipt);
  if (receiptOverlay) {
    receiptOverlay.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeReceipt();
    });
  }

  if (window.location.search.includes('show_receipt')) {
    setTimeout(() => {
      showReceipt({ reference: 'BMC_LIVE_882391' });
    }, 200);
  }
});

window.onGooglePayLoaded = onGooglePayLoaded;
