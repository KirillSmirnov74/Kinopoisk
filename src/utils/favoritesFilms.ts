const FAVORITES_KEY = 'favoriteIds';

export function getFavoriteIds(): number[] {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addFavoriteId(id: number): void {
  const ids = getFavoriteIds();
  if (!ids.includes(id)) { 
    ids.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  }
}

export function removeFavoriteId(id: number): void {
  const ids = getFavoriteIds();
  const updatedIds = ids.filter(existingId => existingId !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedIds));
}
