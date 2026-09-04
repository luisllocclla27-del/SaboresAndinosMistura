/**
 * Sabores Andinos Mistura - Universal Navigation & Interactivity System
 * Manages:
 * - Active sede selection with localStorage persistence
 * - Interactive Reservation Modal on every page
 * - Club Sabores Andinos (User Profile & Points) Modal
 * - Mobile responsive drawer menu
 * - Delivery mode routing & activation
 * - Toast notifications
 */

(function() {
  // Sedes Data
  const SEDES_INFO = {
    'Andahuaylas Matriz': {
      address: 'Jr. Los Nogales s/n, Mollepata, Andahuaylas',
      phone: '+51 983 456 789',
      hours: 'Lunes a Domingo 09:30 AM - 06:30 PM',
      deliveryTime: '30 - 45 min'
    },
    'Pacucha Laguna': {
      address: 'Ribera de la Laguna de Pacucha, Apurímac',
      phone: '+51 983 123 456',
      hours: 'Miércoles a Domingo 10:00 AM - 06:00 PM',
      deliveryTime: 'Zona Campestre y Alrededores'
    },
    'Abancay Campestre': {
      address: 'Valle de Pachachaca Km 8, Abancay',
      phone: '+51 983 789 012',
      hours: 'Viernes a Domingo 10:00 AM - 06:00 PM',
      deliveryTime: '40 - 55 min'
    },
    'Chincheros': {
      address: 'Mirador Campestre Valle Sagrado, Chincheros',
      phone: '+51 983 345 678',
      hours: 'Jueves a Domingo 10:00 AM - 05:30 PM',
      deliveryTime: 'Reparto local'
    },
    'Ayacucho Valle': {
      address: 'Barrio Gastronómico de Conchopata, Huamanga, Ayacucho',
      phone: '+51 983 901 234',
      hours: 'Lunes a Domingo 10:00 AM - 07:00 PM',
      deliveryTime: '25 - 40 min'
    }
  };

  // 1. Toast Notification Helper
  window.showMisturaToast = function(message, icon = 'check_circle') {
    let toast = document.getElementById('mistura-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'mistura-toast';
      toast.className = 'fixed bottom-5 right-5 z-[9999] bg-on-surface text-surface px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 transition-all duration-300 transform translate-y-20 opacity-0 pointer-events-none font-label-md text-label-md max-w-md';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="material-symbols-outlined text-secondary-container text-[22px]">${icon}</span><span>${message}</span>`;
    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4000);
  };

  // 2. Sede Management
  window.getActiveSede = function() {
    return localStorage.getItem('sabores_active_sede') || 'Andahuaylas Matriz';
  };

  window.setActiveSede = function(sedeName, showNotification = true) {
    if (!SEDES_INFO[sedeName]) return;
    localStorage.setItem('sabores_active_sede', sedeName);

    // Update all select elements
    document.querySelectorAll('.navbar-sede-select').forEach(sel => {
      sel.value = sedeName;
    });

    // Update top bar text if present
    const topBarSede = document.getElementById('topbar-active-sede');
    if (topBarSede) {
      topBarSede.textContent = sedeName;
    }

    if (showNotification) {
      window.showMisturaToast(`Sede cambiada a <strong>${sedeName}</strong>. Disponibilidad y pedidos actualizados.`, 'pin_drop');
    }
  };

  // 3. Modal Management
  window.openReservationModal = function(preferredDate = '') {
    const modal = document.getElementById('reservation-modal');
    if (!modal) return;
    const activeSede = window.getActiveSede();
    const sedeSelect = modal.querySelector('#res-sede-select');
    if (sedeSelect) sedeSelect.value = activeSede;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeReservationModal = function() {
    const modal = document.getElementById('reservation-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  window.openProfileModal = function() {
    const modal = document.getElementById('profile-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeProfileModal = function() {
    const modal = document.getElementById('profile-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  // 4. Mobile Drawer Management
  window.toggleMobileMenu = function() {
    const drawer = document.getElementById('mobile-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('hidden')) {
      drawer.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  // 5. Send Reservation to WhatsApp
  window.submitReservationForm = function(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('reservation-modal');
    if (!modal) return;

    const nombre = modal.querySelector('#res-name')?.value.trim() || 'Cliente';
    const telefono = modal.querySelector('#res-phone')?.value.trim() || 'No especificado';
    const sede = modal.querySelector('#res-sede-select')?.value || window.getActiveSede();
    const fecha = modal.querySelector('#res-date')?.value || 'Próximo fin de semana';
    const hora = modal.querySelector('#res-time')?.value || '1:00 PM';
    const comensales = modal.querySelector('#res-guests')?.value || '4 personas';
    const zona = modal.querySelector('#res-zone')?.value || 'Cerca al fogón tradicional';
    const notas = modal.querySelector('#res-notes')?.value.trim() || 'Ninguna';

    const mensaje = `🔥 *RESERVA DE MESA - SABORES ANDINOS MISTURA* 🔥%0A%0A` +
      `👤 *Nombre:* ${encodeURIComponent(nombre)}%0A` +
      `📱 *Teléfono:* ${encodeURIComponent(telefono)}%0A` +
      `📍 *Sede:* ${encodeURIComponent(sede)}%0A` +
      `📅 *Fecha:* ${encodeURIComponent(fecha)} a las ${encodeURIComponent(hora)}%0A` +
      `👥 *N° de Personas:* ${encodeURIComponent(comensales)}%0A` +
      `🌿 *Zona preferida:* ${encodeURIComponent(zona)}%0A` +
      `📝 *Notas / Ocasión:* ${encodeURIComponent(notas)}%0A%0A` +
      `_Por favor confirmar disponibilidad de mesa y turno de fogón._`;

    const sedeData = SEDES_INFO[sede] || SEDES_INFO['Andahuaylas Matriz'];
    const phoneClean = (sedeData.phone || '+51983456789').replace(/[^0-9]/g, '');

    window.open(`https://api.whatsapp.com/send?phone=${phoneClean}&text=${mensaje}`, '_blank');
    window.closeReservationModal();
    window.showMisturaToast('¡Solicitud enviada a WhatsApp! Nuestro anfitrión te responderá en breve.', 'check_circle');
  };

  // 6. Init on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    // Sync initial sede
    const activeSede = window.getActiveSede();
    document.querySelectorAll('.navbar-sede-select').forEach(sel => {
      sel.value = activeSede;
      sel.addEventListener('change', (e) => {
        window.setActiveSede(e.target.value, true);
      });
    });

    // Check URL params for delivery mode on carta.html
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'delivery' || urlParams.get('delivery') === 'true') {
      const deliveryBtn = document.getElementById('btn-mode-delivery');
      if (deliveryBtn) {
        setTimeout(() => {
          deliveryBtn.click();
          window.showMisturaToast('Modalidad <strong>Delivery Express</strong> activada.', 'moped');
        }, 300);
      }
    }

    // Connect Reservar Mesa triggers
    document.querySelectorAll('[data-action="reservar-mesa"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openReservationModal();
      });
    });

    // Connect Perfil / Avatar triggers
    document.querySelectorAll('[data-action="open-profile"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openProfileModal();
      });
    });

    // Connect Mobile Menu button
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleMobileMenu();
      });
    }

    // Keyboard escape to close modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        window.closeReservationModal();
        window.closeProfileModal();
        const drawer = document.getElementById('mobile-drawer');
        if (drawer && !drawer.classList.contains('hidden')) {
          window.toggleMobileMenu();
        }
      }
    });
  });
})();
