const FAVORITES_KEY = "manchester-favorites";
const FAVORITES_EVENT = "favorites-updated";

const parseFavorites = (value) => {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const getFavoriteIds = () => {
  if (typeof window === "undefined") return [];
  return parseFavorites(window.localStorage.getItem(FAVORITES_KEY));
};

export const saveFavoriteIds = (ids) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  window.dispatchEvent(new CustomEvent(FAVORITES_EVENT));
};

export const toggleFavoriteId = (id) => {
  const favorites = new Set(getFavoriteIds());

  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }

  const updated = Array.from(favorites);
  saveFavoriteIds(updated);
  return updated;
};

export const FAVORITES_STORAGE_EVENT = FAVORITES_EVENT;