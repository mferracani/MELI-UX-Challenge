/* ============================================
   MELI UX Challenge — Lightbox
   Click en screen-gallery__item para ampliar
   ============================================ */

(function () {
  const modal     = document.getElementById('lightbox');
  const modalImg  = document.getElementById('lightbox__img');
  const modalLabel = document.getElementById('lightbox__label');
  const closeBtn  = document.getElementById('lightbox__close');

  if (!modal) return;

  // Abre el lightbox
  function openLightbox(src, alt, label) {
    modalImg.src = src;
    modalImg.alt = alt;
    modalLabel.textContent = label || '';
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modalImg.style.opacity = '0';
    modalImg.style.transform = 'scale(0.92)';
    // Fade in una vez cargada
    modalImg.onload = () => {
      modalImg.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      modalImg.style.opacity = '1';
      modalImg.style.transform = 'scale(1)';
    };
    // Si ya está en caché
    if (modalImg.complete) {
      modalImg.style.opacity = '1';
      modalImg.style.transform = 'scale(1)';
    }
  }

  // Cierra el lightbox
  function closeLightbox() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { modalImg.src = ''; }, 300);
  }

  // Click en cualquier screen-gallery__item
  document.addEventListener('click', function (e) {
    const item = e.target.closest('.screen-gallery__item');
    if (!item) return;
    const img   = item.querySelector('img');
    const label = item.querySelector('.screen-gallery__label');
    if (!img) return;
    openLightbox(img.src, img.alt, label ? label.textContent : '');
  });

  // Cierra con botón ×
  closeBtn.addEventListener('click', closeLightbox);

  // Cierra con click en backdrop
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeLightbox();
  });

  // Cierra con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeLightbox();
  });
})();
