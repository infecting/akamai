import requests
import sys

def test_high_sec(sensor_data):
  json = {"sensor_data":sensor_data}
  abck = "B4E617FD6350956428E73B362416C7A0~-1~YAAQ3PjaF2F1cEZ9AQAAllWSbAYXvPNBRYTn20N8uIGvLCSzLKCGHsvzq0n/1G+L043lGHUfcTgxbj18AdShXcPy/VRZ5sF3cjqjcYYN/euciFDwB6Khzu3WYh+MTSEIf5yJcDQkOtggzO/5PNExNHLDt/vOu0fKggj+xaYUvvZ4NmMJB8X/ZXX6NjxkrrPy15Ux4ZTdF8vpeJJTjDQGJPb2Ii8svgv/rwFkZ6hBFxgFzH9SklBDLgltE8EIi/XFPabKogVVFQl7/RGI6ZBDzBMwdi2v1lks6OJz1jcpg74fgsbu+Z97cjHBxuC1kSCQfvqPzLoZXtKGAxvxYKjeDMXhu5d5AKNfkgO6LIANkpE9tqXzJ76bdgoOpYP040uYii3G0MCbjvvR/zKItslHx60z3YClY+ydQdFPdCQeffrMkPYo5hpCVrwoAogpBR6U+5286ItIfuCWBxnHvqif/IhEjACWWKpQ0ExJ0Es5zMIBwDmaAJrzpNvKmbxYnQY=~-1~-1~-1" # response2.cookies["_abck"]
  bm_sz = "9F7D28A5790EC0CA075D7272195F3273~YAAQ0/jaF8a//Vh9AQAALY1tbA3zMGYq9kIrM6n0ONk1D0y+VHuLEnXj/DXAv1JEUl3mu0Mj8gVI/B/uPfBazbp4PiupXSObLjUfn1LnWa4+SEhYqNANpCamOG/E88unWgIRu/urqBgP9NBVG5dxwb05ZcaI341L8wa1DzFvxhHgDdeAdPj1YKThR3GbG/1LVZy1GDLFb33Q2SEGxU1zUsVN4ewdV2dmljnivgbG+Ds/KueaA18yo7P++CJaaursta53otofteTs5Mmzc68+JZIzHmgWPKfQD81fcmvDL0+TcykKTE8ZoR/RBMzJxHx7HKxSahUfS1VouEjlavYOuUFk0n/uHLAzROw03tAORJK36MtIy1G986Zvjzwtlfmm7bKK+KiKLpgC0/TEdv1Zlw==~3425328~4343108" 
  headers2 = {
    'authority': 'www.nike.com',
      'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'x-newrelic-id': 'UwcDVlVUGwIHUVZXAQMHUA==',
      'content-type': 'text/plain;charset=UTF-8',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
      'sec-ch-ua-platform': '"macOS"',
      'accept': '*/*',
      'cookie': f"AnalysisUserId=23.218.248.220.150371637695398642; NIKE_COMMERCE_COUNTRY=US; NIKE_COMMERCE_LANG_LOCALE=en_US; anonymousId=2C78C3A89B3DE7E174C4030779ED7FB0; feature_tests=as_opt_x_web_test:variation_2; feature_enabled__as_opt_x_web=true; feature_enabled__as_nav_rollout=true; audience_segmentation_performed=true; AKA_A2=A; geoloc=cc=US,rc=IA,tp=vhigh,tz=CST,la=41.5221,lo=-90.5751; bm_sz={bm_sz}; nike_locale=us/en_us; ak_bmsc=B810D5A3C3D662C9998D9C72CCAA2D3C~000000000000000000000000000000~YAAQ0/jaF96//Vh9AQAAIJBtbA0CePVWA7LewCKycTmavNZ60aTY96RbY2sUetdqGheWxo3zYXnaW7Accdzdx2BsRRFqthQDRFYBzqYxkbhtxQQuWaSEfWGPoKZ7vuwqc/8KIDPqKtt1yHHCk75gcoY/soFC9plNX/MySsw3SjVCruCGKeRTCyQp+l2fW6E91X+tNLWf6wPD1lsegF80te02Ma4+Ck5gBdFPUJ19fzdzGzpsD3o9AtPoPQED/E8jIhHy457uekTKE2EdDL7kW/H7ducgEMmdn650PtK2GgyjTIncKCsAaEGjLRWXtvgNiyOp6nfD1UexzCFRgOmLvr88qHf6xZIfCDeT6UHjE2YQIq6kVMG7jQBOzOe2z7X3K5Cd7VI=; ppd=homepage|nikecom>homepage; guidS=fb04b57d-b598-4a4a-bc91-ee725cb63eee; guidU=3aa0566d-4d6e-4b26-9b62-72856e2ce757; ku1-sid=NDtgiwK3XAK4SX2rsYQQ2; ku1-vid=aa42609e-7b86-0737-e2c0-95c89fab2c0a; bm_mi=0D3560C59E3E8B7B91FA2028BFC45FA4~bYLdYMoct+zV/BswxJvA6UC+igcU5hfryEQN+n1dA8msc/SbIZoGYMaocmOg1TLYjSM+Daau4j6W/Rg8B0MxeLKOzI5avf8VNB+v1X9mgApva2Wulz4IgfeqIvIkU4/6a50+QaEWpgss+PhTiMtsm5qLbD9JIQXXeccII7ghwEFqTWKZCVG0dUnKTYGbedzJNuI8ITvYnNq0WSb3lkXPMawEloqDhPErugmHmEJgiew=; forterToken=c52447e0342c4caa9ce5d590f76a2ba6_1638202374160_683_UAL9_11ck; ak_bmsc_nke-2.3-ssn=0rcmts0qMkM2hwWXbJMp7mFptS4iea9QH9EyXkZgzS3QYKCgvZGjt9ktbgEgWUHOFuTjMLwWiI9ucYo1ncE2grbWMLOMbZFA925b7flB1Nw1sjOefN0bknXdlTXkSgf7DB8NQX4UwZMENOIul4BwR; ak_bmsc_nke-2.3=0rcmts0qMkM2hwWXbJMp7mFptS4iea9QH9EyXkZgzS3QYKCgvZGjt9ktbgEgWUHOFuTjMLwWiI9ucYo1ncE2grbWMLOMbZFA925b7flB1Nw1sjOefN0bknXdlTXkSgf7DB8NQX4UwZMENOIul4BwR; bm_sv={bm_sz}; _abck={abck}",
      'origin': 'https://www.nike.com',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      'referer': 'https://www.nike.com/',
      'accept-language': 'en-US,en;q=0.9'
  }
  
  response2 = requests.post('https://www.nike.com/J2nQrm/v/6/VUTqQDOQx31E/QiL5zh4kOcaY/MzF7RW8hCA/fDk7VD/ZBJ2kB', headers=headers2, json=json)
  abck = response2.cookies["_abck"]
  print(response2.text)
  #response2.cookies["bm_sz"]
  headers = {
     'authority': 'api.nike.com',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
    'x-b3-spanname': 'undefined',
    'x-kpsdk-cd': '{"workTime":1638202776032,"id":"596046409c7685ce12a9fd15e0cb0180","answers":[1,4]}',
    'x-kpsdk-ct': '0rg55fyzEkZ5ab0jJ2f4gsCe23d8NHCiyR2HaLN5tUgHabq12ZYmaGyGoK4j1I2ldjpPSQb84WaFmWZMbYUhERW9ju3dAcLnmEU0JswuSqn8tKZGkDFqgpRMqJEjVPMUJdEgw6EAh3uufUpcyEm92',
    'x-b3-traceid': '9654a82c1514f54b',
    'sec-ch-ua-mobile': '?0',
    'x-nike-visitorid': 'c9dddf8b-90b6-4035-badf-5282099966bf',
    'content-type': 'application/json; charset=UTF-8',
    'accept': 'application/json',
    'x-b3-spanid': '9654a82c1514f54b',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36',
    'x-b3-sampled': '1',
    'appid': 'com.nike.commerce.nikedotcom.web',
    'x-nike-visitid': '3',
    'sec-ch-ua-platform': '"macOS"',
    'origin': 'https://www.nike.com',
    'sec-fetch-site': 'same-site',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://www.nike.com/',
    'accept-language': 'en-US,en;q=0.9',
    'cookies': f"AnalysisUserId=23.218.248.220.150371637695398642; NIKE_COMMERCE_COUNTRY=US; NIKE_COMMERCE_LANG_LOCALE=en_US; anonymousId=2C78C3A89B3DE7E174C4030779ED7FB0; feature_tests=as_opt_x_web_test:variation_2; feature_enabled__as_opt_x_web=true; feature_enabled__as_nav_rollout=true; audience_segmentation_performed=true; AKA_A2=A; geoloc=cc=US,rc=IA,tp=vhigh,tz=CST,la=41.5221,lo=-90.5751; bm_sz={bm_sz}; nike_locale=us/en_us; ak_bmsc=B810D5A3C3D662C9998D9C72CCAA2D3C~000000000000000000000000000000~YAAQ0/jaF96//Vh9AQAAIJBtbA0CePVWA7LewCKycTmavNZ60aTY96RbY2sUetdqGheWxo3zYXnaW7Accdzdx2BsRRFqthQDRFYBzqYxkbhtxQQuWaSEfWGPoKZ7vuwqc/8KIDPqKtt1yHHCk75gcoY/soFC9plNX/MySsw3SjVCruCGKeRTCyQp+l2fW6E91X+tNLWf6wPD1lsegF80te02Ma4+Ck5gBdFPUJ19fzdzGzpsD3o9AtPoPQED/E8jIhHy457uekTKE2EdDL7kW/H7ducgEMmdn650PtK2GgyjTIncKCsAaEGjLRWXtvgNiyOp6nfD1UexzCFRgOmLvr88qHf6xZIfCDeT6UHjE2YQIq6kVMG7jQBOzOe2z7X3K5Cd7VI=; ppd=homepage|nikecom>homepage; guidS=fb04b57d-b598-4a4a-bc91-ee725cb63eee; guidU=3aa0566d-4d6e-4b26-9b62-72856e2ce757; ku1-sid=NDtgiwK3XAK4SX2rsYQQ2; ku1-vid=aa42609e-7b86-0737-e2c0-95c89fab2c0a; bm_mi=0D3560C59E3E8B7B91FA2028BFC45FA4~bYLdYMoct+zV/BswxJvA6UC+igcU5hfryEQN+n1dA8msc/SbIZoGYMaocmOg1TLYjSM+Daau4j6W/Rg8B0MxeLKOzI5avf8VNB+v1X9mgApva2Wulz4IgfeqIvIkU4/6a50+QaEWpgss+PhTiMtsm5qLbD9JIQXXeccII7ghwEFqTWKZCVG0dUnKTYGbedzJNuI8ITvYnNq0WSb3lkXPMawEloqDhPErugmHmEJgiew=; forterToken=c52447e0342c4caa9ce5d590f76a2ba6_1638202374160_683_UAL9_11ck; ak_bmsc_nke-2.3-ssn=0rcmts0qMkM2hwWXbJMp7mFptS4iea9QH9EyXkZgzS3QYKCgvZGjt9ktbgEgWUHOFuTjMLwWiI9ucYo1ncE2grbWMLOMbZFA925b7flB1Nw1sjOefN0bknXdlTXkSgf7DB8NQX4UwZMENOIul4BwR; ak_bmsc_nke-2.3=0rcmts0qMkM2hwWXbJMp7mFptS4iea9QH9EyXkZgzS3QYKCgvZGjt9ktbgEgWUHOFuTjMLwWiI9ucYo1ncE2grbWMLOMbZFA925b7flB1Nw1sjOefN0bknXdlTXkSgf7DB8NQX4UwZMENOIul4BwR; bm_sv=15F215B1F4AEEAC4DD77E2289B88F7C1~5BlCgwxvYyEAX6rRgjNo6eKUusqTntpSvMwXTVZHpkuTtvtcSrAFJtCVMziJ4YH0Tj5FIYf/2uMtQOR8AyzDqBafREkiJ4AZA97MGV32lHGvHNJ9g5dZs8ghPcpUtNmPsjxeSY6ioJF01aDmNrKYxg==; _abck={abck}"
  }

  json2 = [{"op":"add","path":"/items","value":{"itemData":{"url":"https://www.nike.com/t/blazer-mid-77-vintage-mens-shoes-nw30B2/BQ6806-100"},"skuId":"9b31e533-9143-5e29-bf44-a232d026de25","quantity":1}}]

  response = requests.patch('https://api.nike.com/buy/carts/v2/US/NIKE/NIKECOM?modifiers=VALIDATELIMITS,VALIDATEAVAILABILITY', headers=headers, json=json2)
  print(response)

test_high_sec(sys.argv[0])
