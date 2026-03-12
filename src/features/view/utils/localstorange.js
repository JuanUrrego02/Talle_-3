const CART_KEY = "manchester-cart";
const CART_EVENT = "cart-updated";

const normalizeCartItem = (item) => {
  if (!item || typeof item !== "object") return null;

  const normalizedId =
    typeof item.id === "string"
      ? item.id
      : typeof item.id?.title === "string"
        ? item.id.title
        : null;

  if (!normalizedId) return null;

  const normalizedQty =
    typeof item.qty === "number" && Number.isFinite(item.qty) && item.qty > 0
      ? item.qty
      : 1;

  return {
    id: normalizedId,
    qty: normalizedQty,
  };
};

const mergeCartItems = (items) =>
  items.reduce((acc, item) => {
    const existing = acc.find((entry) => entry.id === item.id);

    if (existing) {
      existing.qty += item.qty;
    } else {
      acc.push({ ...item });
    }

    return acc;
  }, []);

const parseCart = (value) => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed)
      ? mergeCartItems(parsed.map(normalizeCartItem).filter(Boolean))
      : [];
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

  window.localStorage.setItem(
    CART_KEY,
    JSON.stringify(mergeCartItems(items.map(normalizeCartItem).filter(Boolean)))
  );
  window.dispatchEvent(new CustomEvent(CART_EVENT));
};

export const addToCart = (productOrId) => {
  const id =
    typeof productOrId === "string" ? productOrId : productOrId?.title;

  if (!id) return getCartItems();

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