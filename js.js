const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'x-apikey': '167a543753285376fa59206b24a4ee524b39926295db48458478364d017bd9dd'
  }
};

fetch('https://www.virustotal.com/api/v3/ip_addresses/4.2.2.2', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));