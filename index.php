import requests

url = "https://www.virustotal.com/api/v3/domains/programdiag.com"

headers = {
    "Accept": "application/json",
    "x-apikey": "167a543753285376fa59206b24a4ee524b39926295db48458478364d017bd9dd"
}

response = requests.request("GET", url, headers=headers)

print(response.text)