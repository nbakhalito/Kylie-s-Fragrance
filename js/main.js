/* ============================================
   Kylie's Fragrance — Main JavaScript
   ============================================ */

// ========== CONFIG (edit these) ==========
const CONFIG = {
  whatsappCountryCode: '234', // Nigeria default — change if needed
  whatsappNumber: '9064578588',
  instagramUrl: 'https://www.instagram.com/kylies_fragrance?stkn=a2h0dzAwOWszZjg5',
  tiktokUrl: 'https://www.tiktok.com/@kylie_vicky?_r=1&_t=ZS-9AEZrkjhGcS',
  email: 'Kylievicky422@gmail.com',
  currency: '₦',
  freeShippingThreshold: 50000
};

// ========== PRODUCT DATA ==========
const PRODUCTS = [
  {
    id: 1,
    name: 'Signature Rose Perfume',
    description: 'A romantic blend of Bulgarian rose, peony and soft musk. Elegant and timeless.',
    price: 28500,
    originalPrice: 32000,
    category: 'perfumes',
    brand: "Kylie's",
    size: '50ml',
    fragranceType: 'Floral',
    availability: 'in-stock',
    rating: 4.9,
    reviews: 128,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz5c7GkHt9lqP_6tlwwX2wRecDBgMDDy-ui8Papctsw&s=10?w=600&q=80',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz5c7GkHt9lqP_6tlwwX2wRecDBgMDDy-ui8Papctsw&s=10?w=600&q=80',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCJsRbcZs442wE-p3aAyNgivKX14ewlZEaXCxRvbCDQ&s=10?w=600&q=80'
    ],
    badge: 'sale',
    isNew: false,
    bestSeller: true,
    notes: { top: 'Rose, Bergamot', heart: 'Peony, Jasmine', base: 'Musk, Amber' }
  },
  { 
    id: 2,
    name: 'Luxury Eau de Parfum',
    description: 'Sophisticated oriental fragrance with notes of vanilla, sandalwood and oud.',
    price: 42000,
    originalPrice: null,
    category: 'perfumes',
    brand: "Kylie's",
    size: '100ml',
    fragranceType: 'Oriental',
    availability: 'in-stock',
    rating: 4.8,
    reviews: 96,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rMDfKPDOabLvWFgUdXP8ghdeZ7PkiLfm2KvJErxOBQ&s=10?w=600&q=80',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rMDfKPDOabLvWFgUdXP8ghdeZ7PkiLfm2KvJErxOBQ&s=10?w=600&q=80',
    
    ],
    badge: null,
    isNew: false,
    bestSeller: true,
    notes: { top: 'Saffron, Bergamot', heart: 'Rose, Oud', base: 'Vanilla, Sandalwood' }
  },
  {
    id: 3,
    name: 'Oud Collection',
    description: 'Rich Arabian oud paired with dark woods and warm spices. Bold and luxurious.',
    price: 55000,
    originalPrice: 62000,
    category: 'perfumes',
    brand: "Kylie's",
    size: '75ml',
    fragranceType: 'Woody',
    availability: 'in-stock',
    rating: 4.9,
    reviews: 74,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgo7Gd741YI_yIdrYbAiOgAGloUiHcaciG-gO7lxdag&s=10?w=600&q=80',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgo7Gd741YI_yIdrYbAiOgAGloUiHcaciG-gO7lxdag&s=10?w=600&q=80',
    ],
    badge: 'sale',
    isNew: false,
    bestSeller: true,
    notes: { top: 'Cardamom, Saffron', heart: 'Oud, Rose', base: 'Agarwood, Amber' }
  },
  {
    id: 4,
    name: 'Velvet Musk',
    description: 'Soft, creamy musk with hints of white florals. Intimate and comforting.',
    price: 24500,
    originalPrice: null,
    category: 'perfumes',
    brand: "Kylie's",
    size: '50ml',
    fragranceType: 'Musky',
    availability: 'in-stock',
    rating: 4.7,
    reviews: 112,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJywWfaMksKq3AD6y4_gvdt1uXmpkZVo_DTNbmjW3xg&s=10?w=600&q=80',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJywWfaMksKq3AD6y4_gvdt1uXmpkZVo_DTNbmjW3xg&s=10?w=600&q=80'
    ],
    badge: null,
    isNew: true,
    bestSeller: true,
    notes: { top: 'White Peach', heart: 'Iris, Musk', base: 'Cashmere, Vanilla' }
  },
  {
    id: 5,
    name: 'Premium Body Mist',
    description: 'Light and refreshing body mist perfect for everyday wear. Soft citrus and florals.',
    price: 8500,
    originalPrice: 10000,
    category: 'body-sprays',
    brand: "Kylie's",
    size: '200ml',
    fragranceType: 'Fresh',
    availability: 'in-stock',
    rating: 4.6,
    reviews: 203,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsylPVQC8W4u8257iDOrefPHtPJpwIbEqSeQ6IjjaUQ&s=10?w=600&q=80',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsylPVQC8W4u8257iDOrefPHtPJpwIbEqSeQ6IjjaUQ&s=10?w=600&q=80'
    ],
    badge: 'sale',
    isNew: false,
    bestSeller: true,
    notes: { top: 'Lemon, Bergamot', heart: 'Orange Blossom', base: 'White Musk' }
  },
  {
    id: 6,
    name: 'Tropical Breeze Body Spray',
    description: 'Exotic tropical notes of coconut, mango and ocean air. Perfect for summer.',
    price: 7500,
    originalPrice: null,
    category: 'body-sprays',
    brand: "Kylie's",
    size: '150ml',
    fragranceType: 'Fresh',
    availability: 'in-stock',
    rating: 4.5,
    reviews: 89,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaNvbzGD7xiM7fkU7rNY4YOK94F-tfi1r5bzb9fXeBw&s=10?w=600&q=80',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaNvbzGD7xiM7fkU7rNY4YOK94F-tfi1r5bzb9fXeBw&s=10?w=600&q=80'
    ],
    badge: null,
    isNew: true,
    bestSeller: false,
    notes: { top: 'Mango, Coconut', heart: 'Frangipani', base: 'Sea Salt' }
  },
  {
    id: 7,
    name: 'Luxury Room Diffuser',
    description: 'Elegant glass diffuser with natural reeds. Long-lasting home fragrance.',
    price: 18500,
    originalPrice: null,
    category: 'diffusers',
    brand: "Kylie's",
    size: '200ml',
    fragranceType: 'Floral',
    availability: 'in-stock',
    rating: 4.8,
    reviews: 67,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBlmCSOmSlzB5Lro2jR2jkUYz_3nzhVQlDR0JezRF6g&s=10?w=600&q=80',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBlmCSOmSlzB5Lro2jR2jkUYz_3nzhVQlDR0JezRF6g&s=10?w=600&q=80'
    ],
    badge: null,
    isNew: false,
    bestSeller: true,
    notes: { top: 'Lavender', heart: 'Jasmine, Rose', base: 'Cedarwood' }
  },
  {
    id: 8,
    name: 'Car Fragrance Clip',
    description: 'Subtle and long-lasting car fragrance. Discreet design for any vehicle.',
    price: 4500,
    originalPrice: 5500,
    category: 'diffusers',
    brand: "Kylie's",
    size: 'One size',
    fragranceType: 'Fresh',
    availability: 'in-stock',
    rating: 4.4,
    reviews: 156,
    image: 'https://img-1.kwcdn.com/product/fancy/688263cf-5675-446b-9ce6-12a8eca1c606.jpg?imageView2/2/w/500/q/80/format/avif?w=600&q=80',
    images: [
      'https://img-1.kwcdn.com/product/fancy/688263cf-5675-446b-9ce6-12a8eca1c606.jpg?imageView2/2/w/500/q/80/format/avif?w=600&q=80'
    ],
    badge: 'sale',
    isNew: false,
    bestSeller: true,
    notes: null
  },
  {
    id: 9,
    name: "Men's Classic Shirt",
    description: 'Premium cotton shirt with a modern slim fit. Perfect for smart casual occasions.',
    price: 22000,
    originalPrice: null,
    category: 'mens-wear',
    brand: "Kylie's",
    size: 'M / L / XL',
    fragranceType: null,
    availability: 'in-stock',
    rating: 4.7,
    reviews: 45,
    image: 'https://img-1.kwcdn.com/thumbnail/s/fb1f3dbcc5509cf42c8cb64872b3444a_25bc86073949.jpeg?imageView2/2/w/500/q/80/format/avif?w=600&q=80',
    images: [
      'https://img-1.kwcdn.com/thumbnail/s/fb1f3dbcc5509cf42c8cb64872b3444a_25bc86073949.jpeg?imageView2/2/w/500/q/80/format/avif?w=600&q=80'
    ],
    badge: null,
    isNew: false,
    bestSeller: true,
    notes: null
  },
  {
    id: 10,
    name: "Men's Premium Polo",
    description: 'Soft piqué cotton polo in classic colours. Comfortable and refined.',
    price: 16500,
    originalPrice: 19000,
    category: 'mens-wear',
    brand: "Kylie's",
    size: 'S / M / L / XL',
    fragranceType: null,
    availability: 'in-stock',
    rating: 4.6,
    reviews: 38,
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80'
    ],
    badge: 'sale',
    isNew: false,
    bestSeller: true,
    notes: null
  },
  {
    id: 11,
    name: "Men's Casual Set",
    description: 'Matching shirt and short set in breathable linen blend. Effortless style.',
    price: 35000,
    originalPrice: null,
    category: 'mens-wear',
    brand: "Kylie's",
    size: 'M / L / XL',
    fragranceType: null,
    availability: 'in-stock',
    rating: 4.8,
    reviews: 29,
    image: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V09419s.jpg?im=Resize,width=480?w=600&q=80',
    images: [
      'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V09419s.jpg?im=Resize,width=480?w=600&q=80'
    ],
    badge: null,
    isNew: true,
    bestSeller: false,
    notes: null
  },
  {
    id: 12,
    name: 'Romance Gift Set',
    description: 'Beautiful gift set with perfume, body lotion and travel spray. Perfect for special occasions.',
    price: 48000,
    originalPrice: 55000,
    category: 'gift-sets',
    brand: "Kylie's",
    size: 'Gift Set',
    fragranceType: 'Floral',
    availability: 'in-stock',
    rating: 5.0,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80'
    ],
    badge: 'sale',
    isNew: false,
    bestSeller: true,
    notes: null
  },
  {
    id: 13,
    name: 'Noir Intense Perfume',
    description: 'Dark, mysterious fragrance with black pepper, leather and dark chocolate notes.',
    price: 38000,
    originalPrice: null,
    category: 'perfumes',
    brand: "Kylie's",
    size: '50ml',
    fragranceType: 'Oriental',
    availability: 'in-stock',
    rating: 4.8,
    reviews: 41,
    image: 'https://i.ebayimg.com/images/g/FdUAAOSw-IloPZ3B/s-l1600.webp?w=600&q=80',
    images: [
      'https://i.ebayimg.com/images/g/FdUAAOSw-IloPZ3B/s-l1600.webp?w=600&q=80'
    ],
    badge: null,
    isNew: true,
    bestSeller: false,
    notes: { top: 'Black Pepper', heart: 'Leather, Tobacco', base: 'Dark Chocolate, Vetiver' }
  },
  {
    id: 14,
    name: 'Citrus Bloom Body Spray',
    description: 'Zesty citrus with delicate white florals. Energising and uplifting.',
    price: 6500,
    originalPrice: null,
    category: 'body-sprays',
    brand: "Kylie's",
    size: '150ml',
    fragranceType: 'Citrus',
    availability: 'in-stock',
    rating: 4.5,
    reviews: 78,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXs0JRjY5PoCX9WWboI4csUTb63nV4hUeEW_YrOwWow&s=10?w=600&q=80',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXs0JRjY5PoCX9WWboI4csUTb63nV4hUeEW_YrOwWow&s=10?w=600&q=80'
    ],
    badge: null,
    isNew: true,
    bestSeller: false,
    notes: { top: 'Grapefruit, Lemon', heart: 'Neroli', base: 'Cedar' }
  },
  {
    id: 15,
    name: 'Amber Sanctuary Diffuser',
    description: 'Warm amber and vanilla home diffuser. Creates a cosy, inviting atmosphere.',
    price: 22000,
    originalPrice: null,
    category: 'diffusers',
    brand: "Kylie's",
    size: '250ml',
    fragranceType: 'Oriental',
    availability: 'in-stock',
    rating: 4.9,
    reviews: 33,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8JG_s0diUPbBdjqIbX_zSihHkOsgD--chrQBDnYGayZHMuq6_Bw2IA&s=10?w=600&q=80',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8JG_s0diUPbBdjqIbX_zSihHkOsgD--chrQBDnYGayZHMuq6_Bw2IA&s=10?w=600&q=80'
    ],
    badge: null,
    isNew: true,
    bestSeller: false,
    notes: { top: 'Bergamot', heart: 'Amber, Vanilla', base: 'Sandalwood' }
  },
  {
    id: 16,
    name: 'Luxury Fragrance Oil Set',
    description: 'Set of 3 pure fragrance oils for personal use or diffuser refills.',
    price: 12000,
    originalPrice: 15000,
    category: 'accessories',
    brand: "Kylie's",
    size: '3 x 10ml',
    fragranceType: 'Assorted',
    availability: 'in-stock',
    rating: 4.7,
    reviews: 61,
    image: 'https://images.pexels.com/photos/14890517/pexels-photo-14890517.jpeg?w=600&q=80',
    images: [
      'https://images.pexels.com/photos/14890517/pexels-photo-14890517.jpeg?w=600&q=80'
    ],
    badge: 'sale',
    isNew: false,
    bestSeller: false,
    notes: null
  }
];

// ========== STATE ==========
let cart = JSON.parse(localStorage.getItem('kylie_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('kylie_wishlist') || '[]');
let currentFilters = {
  category: 'all',
  price: 'all',
  brand: 'all',
  size: 'all',
  fragranceType: 'all',
  availability: 'all'
};
let currentSort = 'popular';
let currentSlide = 0;
let slideInterval = null;

// ========== UTILITIES ==========
function formatPrice(price) {
  return CONFIG.currency + price.toLocaleString();
}

function saveCart() {
  localStorage.setItem('kylie_cart', JSON.stringify(cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem('kylie_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '☆';
  for (let i = full + half; i < 5; i++) html += '☆';
  return html;
}

// ========== HERO SLIDER ==========
function initSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide]?.classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide]?.classList.add('active');
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  document.querySelector('.hero-next')?.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });
  document.querySelector('.hero-prev')?.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5500);
  }

  slideInterval = setInterval(nextSlide, 5500);
}

// ========== PRODUCT CARDS ==========
function createProductCard(product) {
  const inWishlist = wishlist.includes(product.id);
  const badgeHtml = product.badge === 'sale'
    ? '<span class="product-badge badge-sale">Sale</span>'
    : product.isNew
      ? '<span class="product-badge badge-new">New</span>'
      : '';

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${badgeHtml}
        <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="btn btn-outline btn-sm" onclick="openQuickView(${product.id})">Quick View</button>
        </div>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-rating">
          ${getStars(product.rating)}
          <span>(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
      </div>
    </article>
  `;
}

function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!products.length) {
    container.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--gray);padding:40px;">No products found matching your filters.</p>';
    return;
  }
  container.innerHTML = products.map(createProductCard).join('');
}

function filterAndSortProducts() {
  let filtered = [...PRODUCTS];

  if (currentFilters.category !== 'all') {
    filtered = filtered.filter(p => p.category === currentFilters.category);
  }
  if (currentFilters.brand !== 'all') {
    filtered = filtered.filter(p => p.brand === currentFilters.brand);
  }
  if (currentFilters.size !== 'all') {
    filtered = filtered.filter(p => p.size && p.size.includes(currentFilters.size));
  }
  if (currentFilters.fragranceType !== 'all') {
    filtered = filtered.filter(p => p.fragranceType === currentFilters.fragranceType);
  }
  if (currentFilters.availability !== 'all') {
    filtered = filtered.filter(p => p.availability === currentFilters.availability);
  }
  if (currentFilters.price !== 'all') {
    const [min, max] = currentFilters.price.split('-').map(Number);
    filtered = filtered.filter(p => {
      if (max) return p.price >= min && p.price <= max;
      return p.price >= min;
    });
  }

  switch (currentSort) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case 'best-selling':
      filtered.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0) || b.reviews - a.reviews);
      break;
    case 'popular':
    default:
      filtered.sort((a, b) => b.reviews - a.reviews);
  }

  return filtered;
}

function applyFilters() {
  const filtered = filterAndSortProducts();
  renderProducts('shopProducts', filtered);
  const countEl = document.getElementById('productCount');
  if (countEl) countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
}

// ========== CART ==========
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('Item removed from cart');
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  const cartBody = document.getElementById('cartBody');
  if (!cartBody) return;

  if (!cart.length) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p>Your cart is empty</p>
        <button class="btn btn-primary btn-sm" style="margin-top:16px" onclick="closeCart(); showPage('shop')">Continue Shopping</button>
      </div>
    `;
  } else {
    cartBody.innerHTML = cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return '';
      return `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" />
          <div class="cart-item-info">
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-price">${formatPrice(product.price)}</div>
            <div class="cart-item-qty">
              <button onclick="updateCartQty(${product.id}, -1)" aria-label="Decrease">−</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty(${product.id}, 1)" aria-label="Increase">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${product.id})" aria-label="Remove">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      `;
    }).join('');
  }

  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('active');
  document.getElementById('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('active');
  document.getElementById('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}

// ========== WISHLIST ==========
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(productId);
    showToast('Added to wishlist');
  }
  saveWishlist();
  // Re-render relevant grids
  const filtered = filterAndSortProducts();
  if (document.getElementById('shopProducts')) renderProducts('shopProducts', filtered);
  renderBestSellers();
  renderNewArrivals();
}

function updateWishlistUI() {
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = wishlist.length;
    el.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
}

// ========== QUICK VIEW ==========
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');

  const notesHtml = product.notes ? `
    <div class="fragrance-notes">
      <h4>Fragrance Notes</h4>
      <div class="notes-grid">
        <div><strong>Top</strong>${product.notes.top}</div>
        <div><strong>Heart</strong>${product.notes.heart}</div>
        <div><strong>Base</strong>${product.notes.base}</div>
      </div>
    </div>
  ` : '';

  content.innerHTML = `
    <button class="modal-close" onclick="closeQuickView()" aria-label="Close">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
    <div class="product-detail-grid">
      <div class="product-detail-images">
        <img class="product-detail-main-img" id="qvMainImg" src="${product.image}" alt="${product.name}" />
        <div class="product-thumbs">
          ${(product.images || [product.image]).map((img, i) =>
            `<img src="${img}" alt="" class="${i === 0 ? 'active' : ''}" onclick="document.getElementById('qvMainImg').src=this.src; this.parentElement.querySelectorAll('img').forEach(t=>t.classList.remove('active')); this.classList.add('active');" />`
          ).join('')}
        </div>
      </div>
      <div class="product-detail-info">
        <h2>${product.name}</h2>
        <div class="product-detail-rating">
          ${getStars(product.rating)} <span style="color:var(--gray)">(${product.reviews} reviews)</span>
        </div>
        <div class="product-detail-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <p class="product-detail-desc">${product.description}</p>
        ${notesHtml}
        <div class="size-options">
          <h4>Size: ${product.size}</h4>
        </div>
        <div class="qty-selector">
          <h4>Quantity</h4>
          <div class="qty-controls">
            <button onclick="changeQVQty(-1)">−</button>
            <span id="qvQty">1</span>
            <button onclick="changeQVQty(1)">+</button>
          </div>
        </div>
        <div class="detail-actions">
          <button class="btn btn-primary" onclick="addToCart(${product.id}, parseInt(document.getElementById('qvQty').textContent)); closeQuickView();">Add to Cart</button>
          <button class="btn btn-outline" onclick="addToCart(${product.id}, parseInt(document.getElementById('qvQty').textContent)); closeQuickView(); openCart();">Buy Now</button>
        </div>
        <div class="shipping-info">
          <p>✓ In stock — ships within 1–3 business days</p>
          <p>✓ Free shipping on orders over ${formatPrice(CONFIG.freeShippingThreshold)}</p>
          <p>✓ Easy returns within 14 days</p>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeQVQty(delta) {
  const el = document.getElementById('qvQty');
  let qty = parseInt(el.textContent) + delta;
  if (qty < 1) qty = 1;
  if (qty > 10) qty = 10;
  el.textContent = qty;
}

function closeQuickView() {
  document.getElementById('quickViewModal').classList.remove('active');
  document.body.style.overflow = '';
}

// ========== SEARCH ==========
function openSearch() {
  document.getElementById('searchOverlay').classList.add('active');
  document.getElementById('searchInput').focus();
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('active');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

function handleSearch(query) {
  const results = document.getElementById('searchResults');
  if (!query.trim()) {
    results.innerHTML = '';
    return;
  }
  const q = query.toLowerCase();
  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.includes(q) ||
    (p.fragranceType && p.fragranceType.toLowerCase().includes(q))
  ).slice(0, 6);

  if (!matches.length) {
    results.innerHTML = '<p style="padding:12px;color:var(--gray)">No products found</p>';
    return;
  }

  results.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="closeSearch(); openQuickView(${p.id})">
      <img src="${p.image}" alt="${p.name}" />
      <div>
        <strong>${p.name}</strong>
        <div style="color:var(--primary);font-size:0.9rem">${formatPrice(p.price)}</div>
      </div>
    </div>
  `).join('');
}

// ========== PAGE NAVIGATION ==========
function showPage(page) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const pageMap = {
    home: 'homePage',
    shop: 'shopPage',
    checkout: 'checkoutPage',
    confirmation: 'confirmationPage'
  };

  const el = document.getElementById(pageMap[page] || page + 'Page');
  if (el) el.classList.add('active');

  // Highlight nav
  document.querySelectorAll(`[data-page="${page}"]`).forEach(l => l.classList.add('active'));

  // Close mobile menu
  document.getElementById('mobileNav')?.classList.remove('open');
  document.body.style.overflow = '';

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Load page-specific content
  if (page === 'shop') applyFilters();
  if (page === 'checkout') renderCheckout();
}

function filterByCategory(category) {
  currentFilters.category = category;
  const select = document.getElementById('filterCategory');
  if (select) select.value = category;
  showPage('shop');
  applyFilters();
}

// ========== CHECKOUT ==========
function renderCheckout() {
  const summary = document.getElementById('orderSummaryItems');
  if (!summary) return;

  if (!cart.length) {
    showPage('shop');
    showToast('Your cart is empty');
    return;
  }

  summary.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    return `
      <div class="summary-item">
        <img src="${product.image}" alt="${product.name}" />
        <div class="summary-item-info">
          <div class="name">${product.name}</div>
          <div class="qty">Qty: ${item.qty}</div>
        </div>
        <div style="font-weight:600">${formatPrice(product.price * item.qty)}</div>
      </div>
    `;
  }).join('');

  const subtotal = getCartTotal();
  const shipping = subtotal >= CONFIG.freeShippingThreshold ? 0 : 2500;
  document.getElementById('summarySubtotal').textContent = formatPrice(subtotal);
  document.getElementById('summaryShipping').textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
  document.getElementById('summaryTotal').textContent = formatPrice(subtotal + shipping);
}

function placeOrder(e) {
  e.preventDefault();
  const form = e.target;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Simulate order
  const orderId = 'KF' + Date.now().toString().slice(-8);
  document.getElementById('orderIdDisplay').textContent = orderId;

  cart = [];
  saveCart();
  showPage('confirmation');
  showToast('Order placed successfully!');
}

function applyCoupon() {
  const code = document.getElementById('couponCode').value.trim().toUpperCase();
  if (code === 'KYLIE10') {
    showToast('Coupon applied! 10% off');
  } else if (code) {
    showToast('Invalid coupon code');
  }
}

// ========== BEST SELLERS & NEW ARRIVALS ==========
function renderBestSellers() {
  const best = PRODUCTS.filter(p => p.bestSeller).slice(0, 8);
  renderProducts('bestSellersGrid', best);
}

function renderNewArrivals() {
  const news = PRODUCTS.filter(p => p.isNew);
  renderProducts('newArrivalsGrid', news.length ? news : PRODUCTS.slice(0, 4));
}

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
}

// ========== CONTACT FORM ==========
function handleContactForm(e) {
  e.preventDefault();
  showToast('Message sent! We will get back to you soon.');
  e.target.reset();
}

function handleNewsletter(e) {
  e.preventDefault();
  showToast('Thank you for subscribing!');
  e.target.reset();
}

// ========== WHATSAPP ==========
function getWhatsAppLink() {
  const num = CONFIG.whatsappCountryCode + CONFIG.whatsappNumber;
  const msg = encodeURIComponent("Hello Kylie's Fragrance, I would like to make an enquiry about your products.");
  return `https://wa.me/${num}?text=${msg}`;
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  // WhatsApp links
  document.querySelectorAll('.whatsapp-link').forEach(el => {
    el.href = getWhatsAppLink();
  });

  // Header scroll
  window.addEventListener('scroll', () => {
    document.querySelector('.header')?.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Init components
  initSlider();
  renderBestSellers();
  renderNewArrivals();
  updateCartUI();
  updateWishlistUI();

  // Filter listeners
  document.getElementById('filterCategory')?.addEventListener('change', e => {
    currentFilters.category = e.target.value;
    applyFilters();
  });
  document.getElementById('filterPrice')?.addEventListener('change', e => {
    currentFilters.price = e.target.value;
    applyFilters();
  });
  document.getElementById('filterBrand')?.addEventListener('change', e => {
    currentFilters.brand = e.target.value;
    applyFilters();
  });
  document.getElementById('filterSize')?.addEventListener('change', e => {
    currentFilters.size = e.target.value;
    applyFilters();
  });
  document.getElementById('filterFragrance')?.addEventListener('change', e => {
    currentFilters.fragranceType = e.target.value;
    applyFilters();
  });
  document.getElementById('filterAvailability')?.addEventListener('change', e => {
    currentFilters.availability = e.target.value;
    applyFilters();
  });
  document.getElementById('sortSelect')?.addEventListener('change', e => {
    currentSort = e.target.value;
    applyFilters();
  });

  // Search
  document.getElementById('searchInput')?.addEventListener('input', e => handleSearch(e.target.value));

  // Close modals on overlay click
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.getElementById('quickViewModal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeQuickView();
  });
  document.getElementById('searchOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeSearch();
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCart();
      closeQuickView();
      closeSearch();
      document.getElementById('mobileNav')?.classList.remove('open');
    }
  });


 // Deep-link from other pages via sessionStorage
  const goto = sessionStorage.getItem('kylie_goto');
  if (goto) {
    sessionStorage.removeItem('kylie_goto');
    if (goto === 'shop' || goto === 'checkout') {
      showPage(goto);
    } else if (['perfumes','body-sprays','diffusers','mens-wear','gift-sets','accessories'].includes(goto)) {
      filterByCategory(goto);
    } else {
      showPage('home');
    }
  } else {
    // Show home by default when on index
    if (document.getElementById('homePage')) showPage('home');
  }

  // Hash navigation for about/contact from other pages
  if (location.hash === '#about' || location.hash === '#contact') {
    showPage('home');
    setTimeout(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }
});
