document.addEventListener("DOMContentLoaded", () => {
  const vendors = [
    { name: "Ramu Chaat Bhandar", location: "MG Road" },
    { name: "Sai Sandwiches", location: "Indira Nagar" },
    { name: "Mumbai Vada Pav", location: "Brigade Road" }
  ];

  const vendorList = document.getElementById("vendors");
  vendors.forEach(vendor => {
    const li = document.createElement("li");
    li.textContent = `${vendor.name} – ${vendor.location}`;
    vendorList.appendChild(li);
  });
});
