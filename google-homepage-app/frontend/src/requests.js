export const createShortcut = async (newShortcut) => {
  const res = await fetch("http://localhost:3300/shortcut", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newShortcut),
  });
  return await res.json();
};
