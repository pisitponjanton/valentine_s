export const extractGDriveId = (url) => {
  if (!url) return "";

  let match = url.match(/\/d\/([^/]+)/);
  if (match) return match[1];

  match = url.match(/[?&]id=([^&]+)/);
  if (match) return match[1];

  return "";
};

export const getGDriveViewUrl = (fileId) => {
  if (!fileId) return null;
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
};
