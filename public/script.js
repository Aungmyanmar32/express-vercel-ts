const fetchData = async () => {
  const urlFromLs = localStorage.getItem("apiUrl");
  console.log(urlFromLs);
  if (urlFromLs) {
    const response = await fetch(`${urlFromLs}/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};
fetchData();
