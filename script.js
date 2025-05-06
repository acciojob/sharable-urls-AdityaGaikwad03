
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    button.addEventListener('click', function () {
      const baseUrl = 'https://localhost:8080/';
      const name = document.getElementById('name').value.trim();
      const year = document.getElementById('year').value.trim();

      const params = new URLSearchParams();
      if (name) params.append('name', name);
      if (year) params.append('year', year);

      const queryString = params.toString();
      const fullUrl = queryString ? baseUrl + '?' + queryString : baseUrl;

      document.getElementById('url').textContent = fullUrl;
    });
  });
