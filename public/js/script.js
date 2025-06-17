const membres_container = document.querySelector('#membres-container');

fetch('http://localhost:8000/api/membres')
  .then(response => response.json())
  .then(data => {
    const membres = data["member"];
    membres.forEach(membre => {
      let membre_box = document.createElement('div');
      membre_box.className = "bg-white shadow rounded-lg p-4 flex items-center gap-4";

      membre_box.innerHTML = `
        <img src="${membre.picture}" alt="${membre.first}" class="w-16 h-16 rounded-full border">
        <div>
          <h2 class="text-lg font-bold">${membre.title} ${membre.last.toUpperCase()} ${membre.first}</h2>
          <p class="text-sm text-gray-600">${membre.email}</p>
          <p class="text-sm">${membre.phone}</p>
          <p class="text-sm italic">${membre.streetnumber} ${membre.streetname}, ${membre.city} (${membre.country})</p>
        </div>
      `;

      membres_container.appendChild(membre_box);
    });
  });
