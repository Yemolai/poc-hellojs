const rawSavedJSON = localStorage.getItem('auth') || '{}';
const savedJSON = JSON.parse(rawSavedJSON);

export default function () {
  return {
    facebook: null,
    ...savedJSON,
  };
}
