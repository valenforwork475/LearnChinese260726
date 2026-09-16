import re
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')
ST_FILE = os.path.join(os.path.dirname(__file__), '../src/data/selfTalkData.js')

with open(ST_FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
seen_en = False

for line in lines:
    if 'englishMeaning:' in line:
        if seen_en:
            continue
        # Check if line contains Thai text
        val = line.split(':', 1)[1] if ':' in line else ""
        if re.search(r'[\u0E00-\u0E7F]', val):
            continue
        seen_en = True
    else:
        seen_en = False
    new_lines.append(line)

with open(ST_FILE, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("selfTalkData.js deduplicated successfully!")
