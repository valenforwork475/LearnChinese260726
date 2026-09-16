import json
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

CACHE_FILE = os.path.join(os.path.dirname(__file__), 'translation_cache.json')
ST_FILE = os.path.join(os.path.dirname(__file__), '../src/data/selfTalkData.js')

with open(CACHE_FILE, 'r', encoding='utf-8') as f:
    cache = json.load(f)

with open(ST_FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    new_lines.append(line)
    # Match thaiMeaning line
    match = re.search(r'(\s*)thaiMeaning:\s*[\'"]([^\'"]+)[\'"]([,\n])', line)
    if match:
        indent = match.group(1)
        # Look back for hanzi in preceding lines
        hanzi = ""
        for prev in reversed(new_lines[:-1]):
            hz_match = re.search(r'hanzi:\s*[\'"]([^\'"]+)[\'"]', prev)
            if hz_match:
                hanzi = hz_match.group(1)
                break
        
        if hanzi and hanzi in cache:
            en = cache[hanzi]
            # Avoid single quote break
            en_clean = en.replace("'", "\\'")
            new_lines.append(f"{indent}englishMeaning: '{en_clean}',\n")

with open(ST_FILE, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("selfTalkData.js successfully updated with accurate English translations from cache!")
