from bs4 import BeautifulSoup
import cloudscraper
import requests
import json

url = 'https://ac.cnstrc.com/browse/collection_id/just-dropped?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=ac9683ff-0a93-49ca-bfe2-9c99733bbc4d&s=4&page=1&num_results_per_page=24&sort_by=relevance&sort_order=descending&_dt=1706382670483'
html = requests.get(url=url)
output = json.loads(html.text)

slug = output['response']['results'][0]['data']['slug']
web_url = 'https://www.goat.com/sneakers/' + slug

scraper = cloudscraper.create_scraper()
data = scraper.get(web_url).text

soup = BeautifulSoup(data, 'html.parser')

script_tag = soup.find('script', id='__NEXT_DATA__')

script_code = json.loads(script_tag.text)

yashka = script_code['props']['pageProps']['productTemplate']['productTemplateExternalPictures']

# Modify each URL in yashka
modified_urls = []
for item in yashka:
    main_url = item["mainPictureUrl"]
    modified_url = main_url.replace('/image.goat.com/', '/image.goat.com/transform/v1/')
    modified_url = modified_url.replace('?{timestamp}', '?action=crop&width=600')
    modified_urls.append(modified_url)

# Write the modified URLs to a JSON file
with open('data.json', 'w') as file:
    json.dump(modified_urls, file, indent=2)
