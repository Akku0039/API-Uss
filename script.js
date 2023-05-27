// Fetch data from the API using .then
function fetchDataUsingThen() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => renderData(data))
      .catch(error => console.log(error));
  }
  
  // Fetch data from the API using async/await
  async function fetchDataUsingAsyncAwait() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const data = await response.json();
      renderData(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Render the data in the table
  function renderData(data) {
    const tableBody = document.getElementById('cryptoTableBody');
    tableBody.innerHTML = '';
  
    data.forEach((crypto, index) => {
      const row = tableBody.insertRow();
      row.insertCell().textContent = index + 1;
      row.insertCell().innerHTML = `<img src="${crypto.image}" alt="${crypto.name}" width="30">`;
      row.insertCell().textContent = crypto.name;
      row.insertCell().textContent = crypto.symbol;
      row.insertCell().textContent = crypto.current_price;
      row.insertCell().textContent = crypto.total_volume;
      row.insertCell().textContent = crypto.market_cap;
      row.insertCell().textContent = crypto.price_change_percentage_24h;
    });
  }
  
  // Search function to filter the data
  function search() {
    const searchInput = document.getElementById('searchInput');
    const searchText = searchInput.value.toLowerCase();
    const tableRows = document.querySelectorAll('#cryptoTableBody tr');
  
    tableRows.forEach(row => {
      const name = row.cells[2].textContent.toLowerCase();
      const symbol = row.cells[3].
    });
}
  