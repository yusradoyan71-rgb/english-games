/**
 * SORT IT! — Unified Drag & Drop + Click-to-Sort Interaction Engine
 */

export class DragEngine {
  constructor({ cardContainer, getCategories, onDropAttempt, onCardSelect }) {
    this.cardContainer = cardContainer;
    this.getCategories = getCategories;
    this.onDropAttempt = onDropAttempt;
    this.onCardSelect = onCardSelect;

    this.activeCard = null;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.cardOriginX = 0;
    this.cardOriginY = 0;
    this.hoveredCategory = null;
    this.selectedCard = null;

    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("pointermove", (e) => this.handlePointerMove(e), { passive: false });
    window.addEventListener("pointerup", (e) => this.handlePointerUp(e));
    window.addEventListener("pointercancel", (e) => this.handlePointerUp(e));
  }

  attachCard(cardEl) {
    if (!cardEl) return;
    this.activeCard = cardEl;
    cardEl.style.touchAction = "none";

    cardEl.addEventListener("pointerdown", (e) => this.handlePointerDown(e));
  }

  handlePointerDown(e) {
    if (!this.activeCard || this.activeCard.classList.contains("animating")) return;
    if (e.button !== 0 && e.pointerType === "mouse") return;

    this.isDragging = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.currentX = e.clientX;
    this.currentY = e.clientY;

    const rect = this.activeCard.getBoundingClientRect();
    this.cardOriginX = rect.left;
    this.cardOriginY = rect.top;

    this.activeCard.setPointerCapture(e.pointerId);
    this.activeCard.classList.add("dragging");
    this.activeCard.style.zIndex = "1000";

    if (this.onCardSelect) {
      this.onCardSelect(this.activeCard);
    }
  }

  handlePointerMove(e) {
    if (!this.isDragging || !this.activeCard) return;
    e.preventDefault();

    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    const tilt = Math.max(-12, Math.min(12, dx * 0.08));

    this.activeCard.style.transform = `translate(${dx}px, ${dy}px) scale(1.06) rotate(${tilt}deg)`;

    this.checkCategoryHover(e.clientX, e.clientY);
  }

  checkCategoryHover(pointerX, pointerY) {
    const categories = this.getCategories();
    let found = null;

    for (const catEl of categories) {
      const rect = catEl.getBoundingClientRect();
      const isInside =
        pointerX >= rect.left &&
        pointerX <= rect.right &&
        pointerY >= rect.top &&
        pointerY <= rect.bottom;

      if (isInside) {
        found = catEl;
        catEl.classList.add("hovered");
      } else {
        catEl.classList.remove("hovered");
      }
    }

    this.hoveredCategory = found;
  }

  handlePointerUp(e) {
    if (!this.isDragging || !this.activeCard) return;
    this.isDragging = false;

    const categories = this.getCategories();
    categories.forEach(cat => cat.classList.remove("hovered"));

    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    const dragDistance = Math.hypot(dx, dy);

    if (dragDistance < 8) {
      this.resetCardTransform(this.activeCard);
      this.toggleSelectCard(this.activeCard);
      return;
    }

    if (this.hoveredCategory) {
      const targetCatId = this.hoveredCategory.dataset.categoryId;
      const targetRect = this.hoveredCategory.getBoundingClientRect();
      const cardRect = this.activeCard.getBoundingClientRect();

      if (this.onDropAttempt) {
        this.onDropAttempt({
          cardEl: this.activeCard,
          categoryId: targetCatId,
          categoryEl: this.hoveredCategory,
          targetRect,
          cardRect
        });
      }
    } else {
      this.snapBackToCenter(this.activeCard);
    }
  }

  toggleSelectCard(cardEl) {
    if (this.selectedCard === cardEl) {
      cardEl.classList.remove("selected-tap");
      this.selectedCard = null;
    } else {
      if (this.selectedCard) this.selectedCard.classList.remove("selected-tap");
      this.selectedCard = cardEl;
      cardEl.classList.add("selected-tap");
    }
  }

  handleCategoryClick(catEl) {
    if (!this.activeCard || this.activeCard.classList.contains("animating")) return;
    const targetCatId = catEl.dataset.categoryId;
    const targetRect = catEl.getBoundingClientRect();
    const cardRect = this.activeCard.getBoundingClientRect();

    if (this.onDropAttempt) {
      this.onDropAttempt({
        cardEl: this.activeCard,
        categoryId: targetCatId,
        categoryEl: catEl,
        targetRect,
        cardRect
      });
    }
  }

  snapBackToCenter(cardEl) {
    cardEl.classList.add("animating", "snap-back");
    cardEl.style.transform = "translate(0px, 0px) scale(1) rotate(0deg)";

    setTimeout(() => {
      cardEl.classList.remove("dragging", "animating", "snap-back");
      cardEl.style.transform = "";
      cardEl.style.zIndex = "";
    }, 280);
  }

  resetCardTransform(cardEl) {
    cardEl.classList.remove("dragging");
    cardEl.style.transform = "";
    cardEl.style.zIndex = "";
  }

  animateFlyIntoCategory(cardEl, categoryEl, callback) {
    cardEl.classList.add("animating");
    const cardRect = cardEl.getBoundingClientRect();
    const catRect = categoryEl.getBoundingClientRect();

    const targetCenterX = catRect.left + catRect.width / 2;
    const targetCenterY = catRect.top + catRect.height / 2;
    const currentCenterX = cardRect.left + cardRect.width / 2;
    const currentCenterY = cardRect.top + cardRect.height / 2;

    const deltaX = targetCenterX - currentCenterX;
    const deltaY = targetCenterY - currentCenterY;

    cardEl.style.transition = "transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s ease";
    cardEl.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.25) rotate(10deg)`;
    cardEl.style.opacity = "0";

    setTimeout(() => {
      if (callback) callback();
    }, 320);
  }

  animateShakeWrong(cardEl, callback) {
    cardEl.classList.add("animating", "shake-wrong");
    setTimeout(() => {
      cardEl.classList.remove("shake-wrong", "dragging", "animating");
      cardEl.style.transform = "";
      cardEl.style.zIndex = "";
      if (callback) callback();
    }, 450);
  }
}
