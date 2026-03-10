const CART_KEY = "manchester-cart";
const CART_EVENT = "cart-updated";

const parseCart = (value) => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const getCartItems = () => {
  if (typeof window === "undefined") return [];
  return parseCart(window.localStorage.getItem(CART_KEY));
};

export const saveCartItems = (items) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(CART_EVENT));
};

export const addToCart = (id) => {
  const items = [...getCartItems()];
  const existing = items.find((item) => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    items.push({ id, qty: 1 });
  }

  saveCartItems(items);
  return items;
};

export const removeFromCart = (id) => {
  const updated = getCartItems().filter((item) => item.id !== id);
  saveCartItems(updated);
  return updated;
};

export const updateCartQty = (id, nextQty) => {
  const updated = getCartItems()
    .map((item) => (item.id === id ? { ...item, qty: nextQty } : item))
    .filter((item) => item.qty > 0);

  saveCartItems(updated);
  return updated;
};

export const getCartCount = () =>
  getCartItems().reduce((acc, item) => acc + item.qty, 0);

export const CART_STORAGE_EVENT = CART_EVENT;