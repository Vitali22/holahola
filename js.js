const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'x-apikey': '167a543753285376fa59206b24a4ee524b39926295db48458478364d017bd9dd'
  }
};

fetch('https://www.virustotal.com/api/v3/domains/programdiag.com', options)
  .then(response => response.json())
console.log(response)