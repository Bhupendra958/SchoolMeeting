import { format } from 'date-fns';

export const asArray = (value) => (Array.isArray(value) ? value : []);

export const withFallbackArray = (value, fallback = []) => {
  const normalized = asArray(value);
  return normalized.length > 0 ? normalized : fallback;
};

export const safeDateFormat = (value, pattern, fallback = '-') => {
  if (!value) {
    return fallback;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  return format(date, pattern);
};

export const getDisplayName = (person, fallback = 'Unknown') => {
  if (!person) {
    return fallback;
  }

  if (typeof person === 'string') {
    return fallback;
  }

  const fullName = [person.firstName, person.lastName].filter(Boolean).join(' ').trim();
  return fullName || fallback;
};
