
const regex = /^(Mr\.?|Mrs\.?|Ms\.?|Miss)?\s?([A-Za-z]+)\s(.+)$/;

// Convert a full name to proper format
export const formatName = (name: string): string => {
  const found = name.match(regex);
  if (!found) {
    return name;
  }
  const title = found[1];
  const firstName = found[2];
  const lastName = found[3];
  if (title) {
    return `${lastName}, ${firstName} (${title})`;
  }
  return `${lastName}, ${firstName}`;
};

