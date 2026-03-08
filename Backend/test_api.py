import requests, json

URL = "http://127.0.0.1:8000/analyze-text"

tests = [
    {"label": "FAKE NEWS", "text": "5G towers cause COVID-19 and governments are covering it up"},
    {"label": "REAL NEWS", "text": "The World Health Organization declared COVID-19 a pandemic on March 11, 2020, based on the rapid global spread of the SARS-CoV-2 virus"},
    {"label": "FAKE NEWS", "text": "Eating garlic daily makes you immune to all diseases, confirmed by Harvard scientists"},
]

for t in tests:
    print(f"\n{'='*50}")
    print(f"TEST: {t['label']}")
    print(f"Claim: {t['text']}")
    print("-" * 50)
    r = requests.post(URL, json={"text": t["text"]})
    d = r.json()
    print(f"Credibility Score : {d['credibility_score']}/100")
    print(f"Risk Level        : {d['risk_level']}")
    print(f"Explanation       : {d['explanation']}")
    print(f"Warning Signs     : {', '.join(d['warning_signs'])}")
