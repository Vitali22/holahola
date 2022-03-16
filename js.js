  function JSONRequest(){
    const options = {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    'x-apikey': '167a543753285376fa59206b24a4ee524b39926295db48458478364d017bd9dd'
  }
};

    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let request = new XMLHttpRequest();
    request.open('https://www.virustotal.com/api/v3/ip_addresses/4.2.2.2', options)
    request.send();
    request.onload = () => {
    let JSONFile = JSON.parse(request.responseText);
    let downloads = JSON.parse(JSONFile.stats.downloads);
    document.getElementById("output").innerHTML = downloads;
    }
}

JSONRequest();