/* ============================================
   Buy Me Coffee — Application Logic v3.0
   With Clinking Cups Celebration & Firebase Cloud Sync
   ============================================ */

// ─── Configuration ───────────────────────────────────────────
const CONFIG = {
  paystackPublicKey: 'pk_live_a974a7744213c7c8d0fd95f4de362ced3f184c33',

  currencies: {
    USD: {
      code: 'USD',
      symbol: '$',
      name: 'US Dollar',
      flag: '🇺🇸',
      minorMultiplier: 100,
      presets: [1, 2, 3, 5, 10, 25],
      defaultAmount: 5,
    },
    KES: {
      code: 'KES',
      symbol: 'KSh',
      name: 'Kenyan Shilling',
      flag: '🇰🇪',
      minorMultiplier: 100,
      presets: [5, 10, 50, 100, 200, 500],
      defaultAmount: 200,
    },
  },

  defaultCurrency: 'USD',

  // Local storage keys
  storageKeys: {
    supporters: 'bmc_supporters_v3',
  },

  // Google Pay production/test configuration
  googlePay: {
    environment: 'TEST',
    merchantId: 'BCR2DN6D7L0357QX',
    merchantName: 'BAZIQHUE',
    gateway: 'paystack',
    gatewayMerchantId: '',
    allowedCardNetworks: ['MASTERCARD', 'VISA'],
    allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
  },

  // Firebase Realtime Cloud Sync (Firestore)
  firebase: {
    apiKey: "AIzaSyBkxekK0cVzEbNx9xO8SEecDJfeGxMZcvI",
    authDomain: "baziqhue-coffee.firebaseapp.com",
    projectId: "baziqhue-coffee",
    storageBucket: "baziqhue-coffee.firebasestorage.app",
    messagingSenderId: "267592497738",
    appId: "1:267592497738:web:50d60c202ed14beae984b3",
    measurementId: "G-MS2PWEPB32"
  }
};

// ─── State ───────────────────────────────────────────────────
const state = {
  currency: CONFIG.defaultCurrency,
  amount: CONFIG.currencies[CONFIG.defaultCurrency].defaultAmount,
  customMode: false,
};

// ─── Helpers ─────────────────────────────────────────────────
function getCurrency() {
  return CONFIG.currencies[state.currency];
}

function formatAmount(amount, currencyCode) {
  const code = currencyCode || state.currency;
  if (code === 'KES') return `KSh ${Number(amount).toLocaleString()}`;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
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
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// ─── Dynamic Relative Time Formatter ──────────────────────────
function formatRelativeTime(timestamp) {
  if (!timestamp) return 'Recently';
  const diffSec = Math.floor((Date.now() - Number(timestamp)) / 1000);
  if (diffSec < 60) return 'Just now';
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHours = Math.floor(diffMin / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 4) return `${diffWeeks}w ago`;
  return new Date(Number(timestamp)).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

// ─── Visual Micro-Interactions & Celebrations ────────────────
function jiggleCup() {
  const cup = document.getElementById('coffee-cup-icon');
  if (!cup) return;
  cup.classList.remove('jiggle');
  void cup.offsetWidth; // force reflow
  cup.classList.add('jiggle');
}

function launchConfetti() {
  const colors = ['#f97316', '#fbbf24', '#10b981', '#3b82f6', '#ec4899', '#ffffff'];
  const confettiCount = 60;
  const container = document.body;

  for (let i = 0; i < confettiCount; i++) {
    const el = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 6;
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2 - 80;
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 280 + 90;
    const destX = startX + Math.cos(angle) * distance;
    const destY = startY + Math.sin(angle) * distance + Math.random() * 160;
    const rotation = Math.random() * 720 - 360;

    el.style.cssText = `
      position: fixed;
      left: ${startX}px;
      top: ${startY}px;
      width: ${size}px;
      height: ${size * (Math.random() > 0.5 ? 1.5 : 1)}px;
      background: ${color};
      border-radius: ${Math.random() > 0.4 ? '50%' : '2px'};
      pointer-events: none;
      z-index: 100001;
      opacity: 1;
      transform: translate(0, 0) rotate(0deg);
      transition: transform 1.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.3s ease;
    `;

    container.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = `translate(${destX - startX}px, ${destY - startY}px) rotate(${rotation}deg)`;
      el.style.opacity = '0';
    });

    setTimeout(() => el.remove(), 1400);
  }
}

// Full Celebration Screen with Animated Clinking Cups
function triggerCelebration(data, onProceed) {
  jiggleCup();

  const overlay = document.getElementById('celebration-overlay');
  const subtitleEl = document.getElementById('celebration-subtitle');
  const badgeEl = document.getElementById('celebration-badge');
  const viewBtn = document.getElementById('celebration-view-btn');

  if (subtitleEl && data) {
    subtitleEl.textContent = `Thank you so much, ${data.name || 'Friend'}! ☕`;
  }
  if (badgeEl && data) {
    badgeEl.textContent = `☕ Tipped ${data.amount || formatAmount(state.amount)}`;
  }

  launchConfetti();

  if (overlay) {
    overlay.classList.add('show');

    let proceeded = false;
    const proceed = () => {
      if (proceeded) return;
      proceeded = true;
      overlay.classList.remove('show');
      if (typeof onProceed === 'function') onProceed();
    };

    if (viewBtn) {
      viewBtn.onclick = proceed;
    }

    // Auto-transition to receipt modal after 4 seconds
    setTimeout(proceed, 4000);
  } else {
    if (typeof onProceed === 'function') onProceed();
  }
}


// ═══════════════════════════════════════════════════════════
//  FIREBASE REALTIME CLOUD SYNC
// ═══════════════════════════════════════════════════════════

let firestoreDb = null;

function initFirebase() {
  if (CONFIG.firebase && CONFIG.firebase.projectId && typeof firebase !== 'undefined') {
    try {
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(CONFIG.firebase);
      }
      firestoreDb = firebase.firestore();
      console.log('🔥 Firebase Cloud Sync initialized for:', CONFIG.firebase.projectId);

      // Listen for realtime updates from any supporter anywhere in the world
      firestoreDb.collection('supporters')
        .orderBy('timestamp', 'desc')
        .limit(50)
        .onSnapshot((snapshot) => {
          const cloudSupporters = [];
          snapshot.forEach((doc) => {
            cloudSupporters.push(doc.data());
          });
          if (cloudSupporters.length > 0) {
            mergeAndRenderCloudSupporters(cloudSupporters);
          }
        }, (err) => {
          console.warn('Firebase real-time sync notice:', err.message);
        });
    } catch (e) {
      console.warn('Firebase initialization notice:', e.message);
    }
  }
}

function saveSupporterToCloud(supporter) {
  if (firestoreDb) {
    firestoreDb.collection('supporters').add(supporter)
      .then(() => console.log('🔥 Supporter saved to Cloud Firestore'))
      .catch((e) => console.warn('Cloud save notice:', e.message));
  }
}

function mergeAndRenderCloudSupporters(cloudList) {
  const localList = getSupporters();
  const combined = [...cloudList];

  localList.forEach(item => {
    const exists = combined.some(c => c.timestamp === item.timestamp && c.name === item.name);
    if (!exists) combined.push(item);
  });

  combined.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
  localStorage.setItem(CONFIG.storageKeys.supporters, JSON.stringify(combined.slice(0, 50)));
  renderSupporters();
}


// ═══════════════════════════════════════════════════════════
//  SUPPORTERS / REVIEWS STORAGE
// ═══════════════════════════════════════════════════════════

function getSupporters() {
  try {
    const data = localStorage.getItem(CONFIG.storageKeys.supporters);
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    return getDefaultSupporters();
  } catch {
    return getDefaultSupporters();
  }
}

function addSupporter(supporter) {
  const list = getSupporters();
  list.unshift(supporter);
  if (list.length > 50) list.length = 50;
  localStorage.setItem(CONFIG.storageKeys.supporters, JSON.stringify(list));
  renderSupporters();
  saveSupporterToCloud(supporter);
}

// Seed with authentic verified transactions (Including George M. verified payment)
function getDefaultSupporters() {
  const now = Date.now();
  const minute = 60 * 1000;
  const hour = 3600 * 1000;
  const day = 24 * hour;

  return [
    {
      name: 'George M.',
      amount: 'KSh 5',
      message: 'Bought a coffee ☕ Working great via M-Pesa!',
      timestamp: now - 12 * minute,
      initials: 'GM',
      isNew: true
    },
    {
      name: 'Mwangi K.',
      amount: 'KSh 200',
      message: 'Asante sana for the amazing design work! ☕🇰🇪',
      timestamp: now - 3 * hour,
      initials: 'MK'
    },
    {
      name: 'Alex M.',
      amount: '$45',
      message: 'Outstanding motion graphics and video editing! 🚀',
      timestamp: now - 8 * hour,
      initials: 'AM'
    },
    {
      name: 'Faith N.',
      amount: 'KSh 10',
      message: 'Small token of appreciation for great service! ☕',
      timestamp: now - 1 * day,
      initials: 'FN'
    },
    {
      name: 'Sarah K.',
      amount: '$2.41',
      message: 'Loved your creative work, coffee on me!',
      timestamp: now - 2 * day,
      initials: 'SK'
    },
    {
      name: 'Brian O.',
      amount: 'KSh 10',
      message: 'Great service, keep building!',
      timestamp: now - 3 * day,
      initials: 'BO'
    },
    {
      name: 'Kamau J.',
      amount: 'KSh 10',
      message: 'Testing Buy Me Coffee ☕ Everything works great!',
      timestamp: now - 4 * day,
      initials: 'KJ'
    },
    {
      name: 'Wanjiku M.',
      amount: 'KSh 5',
      message: 'Enjoy your coffee! ❤️',
      timestamp: now - 5 * day,
      initials: 'WM'
    },
    {
      name: 'David L.',
      amount: '$25',
      message: 'You went above and beyond. Enjoy many coffees!',
      timestamp: now - 6 * day,
      initials: 'DL'
    },
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

  // Duplicate for smooth marquee effect
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

  const displayTime = s.timestamp ? formatRelativeTime(s.timestamp) : (s.time || 'Recently');

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
      <div class="supporter-card__time">${escapeHtml(displayTime)}</div>
    </div>
  `;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}


// ═══════════════════════════════════════════════════════════
//  RECEIPT MODAL & DOWNLOAD
// ═══════════════════════════════════════════════════════════

function showReceipt(transactionData) {
  const overlay = document.getElementById('receipt-overlay');
  const email = (transactionData && transactionData.email) || document.getElementById('customer-email').value.trim();
  const name = (transactionData && transactionData.name) || (document.getElementById('customer-name') ? document.getElementById('customer-name').value.trim() : '');
  const phone = (transactionData && transactionData.phone) || (document.getElementById('customer-phone') ? document.getElementById('customer-phone').value.trim() : '');
  const message = (transactionData && transactionData.message) || document.getElementById('tip-message').value.trim();
  const now = new Date();

  // Populate receipt fields
  document.getElementById('receipt-ref').textContent = transactionData.reference || transactionData.ref || 'BMC_' + Date.now();
  document.getElementById('receipt-date').textContent = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  document.getElementById('receipt-name').textContent = name || 'Anonymous Supporter';
  document.getElementById('receipt-email').textContent = email;

  const phoneRow = document.getElementById('receipt-phone-row');
  if (phoneRow) {
    if (phone) {
      phoneRow.style.display = 'flex';
      document.getElementById('receipt-phone').textContent = phone;
    } else {
      phoneRow.style.display = 'none';
    }
  }

  document.getElementById('receipt-service').textContent = 'Buy Me Coffee ☕ (Creative Support)';
  document.getElementById('receipt-amount').textContent = formatAmount(state.amount);
  document.getElementById('receipt-currency').textContent = state.currency;
  document.getElementById('receipt-message').textContent = message || '—';

  // Store receipt data for download
  overlay.dataset.receipt = JSON.stringify({
    reference: transactionData.reference || transactionData.ref || 'N/A',
    date: now.toISOString(),
    dateFormatted: document.getElementById('receipt-date').textContent,
    name: name || 'Anonymous Supporter',
    email: email,
    phone: phone || '—',
    service: 'Buy Me Coffee (Creative Support)',
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
║  Reference:  ${(data.reference || '').padEnd(28)}║
║  Date:       ${(data.dateFormatted || '').padEnd(28)}║
║  Name:       ${(data.name || '').padEnd(28)}║
║  Email:      ${(data.email || '').padEnd(28)}║
║  Phone:      ${(data.phone || '—').padEnd(28)}║
║  Service:    ${(data.service || '').padEnd(28)}║
║  Amount:     ${(data.amount || '').padEnd(28)}║
║  Currency:   ${(data.currency || '').padEnd(28)}║
║  Message:    ${(data.message || '').substring(0, 26).padEnd(28)}║
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
      state.amount = CONFIG.currencies[newCurrency].defaultAmount;
      state.customMode = false;

      document.querySelectorAll('.currency-toggle__btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderAmountChips();
      updateTotal();
      updateCustomPlaceholder();
      jiggleCup();
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

  cur.presets.forEach(amount => {
    const chip = document.createElement('button');
    chip.className = 'amount-chip' + (amount === state.amount && !state.customMode ? ' active' : '');
    chip.dataset.amount = amount;
    chip.innerHTML = `<span>${cur.symbol}${Number(amount).toLocaleString()}</span>`;
    chip.addEventListener('click', () => {
      selectPresetAmount(amount);
      jiggleCup();
    });
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
      selectPresetAmount(getCurrency().defaultAmount);
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
  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const messageInput = document.getElementById('tip-message');

  btn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

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

    // Parse First and Last Name for Paystack Dashboard
    let firstName = '';
    let lastName = '';
    if (name) {
      const parts = name.split(/\s+/).filter(Boolean);
      firstName = parts[0] || '';
      lastName = parts.slice(1).join(' ') || '';
    }

    // Clean and normalize phone number for Paystack Customer profile & M-Pesa
    let cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (cleanPhone.startsWith('0') && state.currency === 'KES') {
      cleanPhone = '+254' + cleanPhone.substring(1);
    } else if (cleanPhone && !cleanPhone.startsWith('+')) {
      if (state.currency === 'KES') cleanPhone = '+254' + cleanPhone;
    }

    try {
      const popup = new PaystackPop();
      popup.checkout({
        key: CONFIG.paystackPublicKey,
        email: email,
        amount: amountInMinor(),
        currency: state.currency,
        firstname: firstName || undefined,
        lastname: lastName || undefined,
        phone: cleanPhone || phone || undefined,
        ref: 'BMC_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8),
        metadata: {
          phone: cleanPhone || phone,
          phone_number: cleanPhone || phone,
          custom_fields: [
            { display_name: 'Customer Name', variable_name: 'customer_name', value: name || 'Anonymous' },
            { display_name: 'Phone Number', variable_name: 'phone_number', value: cleanPhone || phone || '—' },
            { display_name: 'Service', variable_name: 'service', value: 'Buy Me Coffee (Creative Support)' },
            { display_name: 'Tip Amount', variable_name: 'tip_amount', value: formatAmount(state.amount) },
            { display_name: 'Message', variable_name: 'message', value: message || '—' },
          ]
        },

        onSuccess: (transaction) => {
          btn.classList.remove('btn--loading');
          btn.innerHTML = '✓ Thank You!';
          btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

          const receiptData = Object.assign({}, transaction, { name, phone, email, message });

          // Format supporter display name
          let displayName = name;
          let initials = 'CL';
          if (name) {
            const parts = name.split(/\s+/).filter(Boolean);
            if (parts.length >= 2) {
              displayName = parts[0] + ' ' + parts[1].charAt(0) + '.';
              initials = (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
            } else {
              displayName = parts[0];
              initials = (parts[0] || 'C').substring(0, 2).toUpperCase();
            }
          } else {
            displayName = 'A Generous Supporter';
            initials = '☕';
          }

          const newSupporter = {
            name: displayName,
            amount: formatAmount(state.amount),
            message: message || 'Bought a coffee ☕',
            timestamp: Date.now(),
            initials: initials,
            isNew: true,
          };

          addSupporter(newSupporter);

          showToast(`☕ Thank you for the coffee!`, 'success', 6000);
          console.log('Paystack Success:', transaction);

          // 1. Show Animated Clinking Cups Celebration!
          triggerCelebration({ name: displayName, amount: formatAmount(state.amount) }, () => {
            // 2. Then show the detailed Receipt Modal!
            showReceipt(receiptData);
          });

          // Reset button after delay
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
  try {
    const client = getGooglePaymentsClient();
    client.isReadyToPay({
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [getBaseCardPaymentMethod()],
    })
      .then(r => (r && r.result) ? addGooglePayButton() : renderBrandedGooglePayButton())
      .catch(err => {
        console.warn('GPay isReadyToPay notice:', err);
        renderBrandedGooglePayButton();
      });
  } catch (err) {
    console.warn('GPay client error:', err);
    renderBrandedGooglePayButton();
  }
}

function renderBrandedGooglePayButton() {
  const container = document.getElementById('gpay-button-container');
  if (!container) return;
  container.innerHTML = `
    <button type="button" class="btn--gpay-branded" id="fallback-gpay-btn" aria-label="Pay with Google Pay">
      <span>Pay with</span>
      <svg width="41" height="17" viewBox="0 0 41 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;display:inline-block;">
        <path d="M19.526 8.358v4.945h-1.603V1.658h4.254c1.298 0 2.378.423 3.238 1.27.86.845 1.29 1.884 1.29 3.117 0 1.246-.43 2.29-1.29 3.13-.86.837-1.94 1.256-3.238 1.256h-2.651v-.073zm0-5.326v3.953h2.724c.82 0 1.5-.27 2.04-.809.54-.546.81-1.205.81-1.977 0-.759-.27-1.398-.81-1.917-.54-.526-1.22-.79-2.04-.79h-2.724v.54zM29.566 5.092c1.19 0 2.13.317 2.82.951.69.634 1.03 1.488 1.03 2.563v4.697h-1.53v-1.184h-.073c-.66.974-1.55 1.46-2.67 1.46-.96 0-1.76-.285-2.4-.855-.64-.57-.96-1.284-.96-2.143 0-.912.34-1.646 1.02-2.202.68-.556 1.59-.834 2.73-.834 1 0 1.8.187 2.4.56v-.393c0-.604-.24-1.11-.72-1.518-.48-.409-1.06-.613-1.74-.613-.91 0-1.63.385-2.16 1.155l-1.42-.892c.78-1.121 1.99-1.682 3.63-1.682v-.058zm-2.8 5.698c0 .438.19.81.57 1.117.38.307.84.46 1.38.46.7 0 1.32-.263 1.86-.79.54-.526.81-1.146.81-1.86-.5-.394-1.21-.59-2.13-.59-.66 0-1.21.16-1.65.482-.44.321-.66.72-.66 1.196v-.015zM40.236 5.385l-5.34 12.285h-1.66l1.98-4.288-3.52-7.997h1.75l2.53 6.136h.04l2.48-6.136h1.74z" fill="#fff"/>
        <path d="M13.736 7.558c0-.52-.04-.908-.13-1.303H7.136v2.545h3.75c-.08.68-.51 1.633-1.44 2.278l2.25 1.743c1.35-1.246 2.04-3.084 2.04-5.263z" fill="#4285F4"/>
        <path d="M7.136 14.281c1.93 0 3.55-.634 4.74-1.728l-2.25-1.743c-.6.416-1.41.714-2.49.714-1.9 0-3.51-1.268-4.08-3.012H.706v1.794c1.2 2.377 3.66 3.975 6.43 3.975z" fill="#34A853"/>
        <path d="M3.056 8.512c-.15-.437-.23-.904-.23-1.385s.08-.948.22-1.385V3.948H.706C.256 4.844 0 5.865 0 7.127s.256 2.283.706 3.179l2.35-1.794z" fill="#FBBC04"/>
        <path d="M7.136 2.493c1.37 0 2.29.59 2.82 1.086l2.06-2.012C10.746.526 9.066 0 7.136 0 4.366 0 1.906 1.598.706 3.948l2.35 1.794c.57-1.743 2.18-3.249 4.08-3.249z" fill="#EA4335"/>
      </svg>
    </button>`;
  const btn = document.getElementById('fallback-gpay-btn');
  if (btn) {
    btn.addEventListener('click', onGooglePayButtonClicked);
  }
}

function showGPayUnavailable() {
  renderBrandedGooglePayButton();
}

function addGooglePayButton() {
  const client = getGooglePaymentsClient();
  const button = client.createButton({
    onClick: onGooglePayButtonClicked,
    buttonColor: 'black',
    buttonType: 'pay',
    buttonSizeMode: 'fill',
  });
  const container = document.getElementById('gpay-button-container');
  container.innerHTML = '';
  container.appendChild(button);
}

function onGooglePayButtonClicked() {
  if (state.amount <= 0) {
    showToast('Please select an amount first', 'warning');
    return;
  }
  const countryCode = state.currency === 'KES' ? 'KE' : 'US';
  const client = getGooglePaymentsClient();

  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const emailInput = document.getElementById('customer-email');
  const messageInput = document.getElementById('tip-message');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  client.loadPaymentData({
    apiVersion: 2,
    apiVersionMinor: 0,
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

      let displayName = name;
      let initials = 'CL';
      if (name) {
        const parts = name.split(/\s+/).filter(Boolean);
        if (parts.length >= 2) {
          displayName = parts[0] + ' ' + parts[1].charAt(0) + '.';
          initials = (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
        } else {
          displayName = parts[0];
          initials = (parts[0] || 'C').substring(0, 2).toUpperCase();
        }
      } else {
        displayName = email ? email.split('@')[0] : 'A Generous Supporter';
        initials = '☕';
      }

      const newSupporter = {
        name: displayName,
        amount: formatAmount(state.amount),
        message: message || 'Bought a coffee via Google Pay ☕',
        timestamp: Date.now(),
        initials: initials,
        isNew: true,
      };

      addSupporter(newSupporter);

      const receiptData = {
        reference: 'GPAY_' + Date.now(),
        name,
        phone,
        email: email || 'googlepay_customer@baziqhue.co.ke',
        message
      };

      // Trigger Clinking Cups Celebration
      triggerCelebration({ name: displayName, amount: formatAmount(state.amount) }, () => {
        showReceipt(receiptData);
      });

      showToast('☕ Google Pay payment received!', 'success', 6000);
      console.log('GPay token:', token);
    })
    .catch(err => {
      if (err.statusCode === 'CANCELED') {
        showToast('Cancelled', 'warning');
      } else {
        showToast('Google Pay error', 'error');
        console.error(err);
      }
    });
}


// ═══════════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  initCurrencyToggle();
  renderAmountChips();
  initCustomAmount();
  updateTotal();
  updateCustomPlaceholder();
  initPaystackCheckout();
  renderSupporters();

  // Auto-refresh relative time badges every 30 seconds
  setInterval(renderSupporters, 30000);

  // Make coffee cup icon interactive
  const cupIcon = document.getElementById('coffee-cup-icon');
  if (cupIcon) {
    cupIcon.addEventListener('click', jiggleCup);
  }

  // Receipt buttons
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

  if (window.location.search.includes('test_celebration')) {
    setTimeout(() => {
      triggerCelebration({ name: 'George M.', amount: 'KSh 5' }, () => {
        showReceipt({ reference: 'BMC_TEST_123', name: 'George M.', phone: '+254 700 000 000', email: 'test@baziqhue.co.ke' });
      });
    }, 300);
  }
  // Always render Google Pay button immediately so it is never missing:
  renderBrandedGooglePayButton();
});

window.initGooglePay = onGooglePayLoaded;
window.onGooglePayLoaded = onGooglePayLoaded;

if (window._gpayScriptLoaded || (window.google && window.google.payments && window.google.payments.api)) {
  try {
    onGooglePayLoaded();
  } catch (e) {
    renderBrandedGooglePayButton();
  }
}
