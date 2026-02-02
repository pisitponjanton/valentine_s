export const toBase64 = (obj) => {
  const json = JSON.stringify(obj);
  return btoa(
    encodeURIComponent(json).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode("0x" + p1),
    ),
  );
};

export const fromBase64 = (base64) => {
  const json = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join(""),
  );

  return JSON.parse(json);
};
