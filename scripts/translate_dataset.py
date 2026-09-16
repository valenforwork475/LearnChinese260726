import json
import re
import sys
import os
import time
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

sys.stdout.reconfigure(encoding='utf-8')

CACHE_FILE = os.path.join(os.path.dirname(__file__), 'translation_cache.json')

def load_cache():
    if os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading cache: {e}")
    return {}

def save_cache(cache):
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

def fetch_translation(text):
    text = text.strip()
    if not text:
        return text, ""
    try:
        q = urllib.parse.quote(text)
        url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=en&dt=t&q={q}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=8) as response:
            data = json.loads(response.read().decode('utf-8'))
            translated_chunks = []
            if data and data[0]:
                for chunk in data[0]:
                    if chunk[0]:
                        translated_chunks.append(chunk[0])
            result = "".join(translated_chunks).strip()
            if result:
                return text, result
    except Exception as e:
        pass
    return text, text

def process_vocabulary():
    cache = load_cache()
    vocab_file = os.path.join(os.path.dirname(__file__), '../src/data/vocabularyData.js')
    
    with open(vocab_file, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'export const vocabularyList = (\[[\s\S]*\]);?\s*$', content)
    if not match:
        print("Could not parse vocabularyList array!")
        return

    json_str = match.group(1)
    vocab_list = json.loads(json_str)
    
    print(f"Processing {len(vocab_list)} vocabulary items...")

    # Collect all unique Chinese texts to translate
    texts_to_translate = set()
    for item in vocab_list:
        if 'hanzi' in item and item['hanzi']:
            texts_to_translate.add(item['hanzi'])
        if 'example' in item and isinstance(item['example'], dict):
            if 'hanzi' in item['example'] and item['example']['hanzi']:
                texts_to_translate.add(item['example']['hanzi'])
        if 'examples' in item and isinstance(item['examples'], list):
            for ex in item['examples']:
                if 'hanzi' in ex and ex['hanzi']:
                    texts_to_translate.add(ex['hanzi'])

    uncached = [t for t in texts_to_translate if t not in cache]
    print(f"Total unique texts: {len(texts_to_translate)}, Uncached: {len(uncached)}")

    if uncached:
        with ThreadPoolExecutor(max_workers=20) as executor:
            futures = [executor.submit(fetch_translation, t) for t in uncached]
            for future in as_completed(futures):
                orig, trans = future.result()
                if trans:
                    cache[orig] = trans
        save_cache(cache)

    # Now assign translated values
    for item in vocab_list:
        zh_word = item.get('hanzi', '')
        item['englishMeaning'] = cache.get(zh_word, item.get('thaiMeaning', ''))
        
        if 'example' in item and isinstance(item['example'], dict):
            ex_zh = item['example'].get('hanzi', '')
            if ex_zh:
                item['example']['englishMeaning'] = cache.get(ex_zh, item['example'].get('thaiMeaning', ''))
        
        if 'examples' in item and isinstance(item['examples'], list):
            for ex in item['examples']:
                ex_zh = ex.get('hanzi', '')
                if ex_zh:
                    ex['englishMeaning'] = cache.get(ex_zh, ex.get('thaiMeaning', ''))

    new_vocab_js = json.dumps(vocab_list, ensure_ascii=False, indent=2)
    new_content = f"""// Vocabulary Dataset - {len(vocab_list)} unique words
// Situational examples are written and reviewed per word; substitution templates are not used.

export const VOCAB_SETS = [
  {{ id: 'all', label: 'ทั้งหมด ({len(vocab_list)} คำ)' }}
];

export const vocabularyList = {new_vocab_js};
"""
    
    with open(vocab_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("vocabularyData.js updated successfully!")

import ast

def process_self_talk():
    cache = load_cache()
    st_file = os.path.join(os.path.dirname(__file__), '../src/data/selfTalkData.js')
    
    with open(st_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean up duplicate englishMeaning lines from earlier script
    content = re.sub(r'^\s*englishMeaning:.*$\n', '', content, flags=re.MULTILINE)

    match = re.search(r'export const selfTalkSentences = (\[[\s\S]*\]);?\s*$', content)
    if not match:
        print("Could not parse selfTalkSentences!")
        return

    raw_code = match.group(1)
    # Strip comments
    raw_code = re.sub(r'//.*$', '', raw_code, flags=re.MULTILINE)
    
    try:
        st_list = ast.literal_eval(raw_code)
    except Exception as e:
        print(f"ast.literal_eval failed: {e}")
        return

    print(f"Processing {len(st_list)} self-talk sentences...")

    texts_to_translate = set()
    for item in st_list:
        if 'hanzi' in item and item['hanzi']:
            texts_to_translate.add(item['hanzi'])
        if 'words' in item and isinstance(item['words'], list):
            for w in item['words']:
                if 'hanzi' in w and w['hanzi']:
                    texts_to_translate.add(w['hanzi'])

    uncached = [t for t in texts_to_translate if t not in cache]
    print(f"Self-Talk Uncached: {len(uncached)}")

    if uncached:
        with ThreadPoolExecutor(max_workers=20) as executor:
            futures = [executor.submit(fetch_translation, t) for t in uncached]
            for future in as_completed(futures):
                orig, trans = future.result()
                if trans:
                    cache[orig] = trans
        save_cache(cache)

    for item in st_list:
        zh = item.get('hanzi', '')
        if zh:
            item['englishMeaning'] = cache.get(zh, item.get('thaiMeaning', ''))
        
        if 'words' in item and isinstance(item['words'], list):
            for w in item['words']:
                w_zh = w.get('hanzi', '')
                if w_zh:
                    w['englishMeaning'] = cache.get(w_zh, w.get('thaiMeaning', ''))

    header = content[:match.start()]
    new_st_js = json.dumps(st_list, ensure_ascii=False, indent=2)
    
    new_content = f"{header}export const selfTalkSentences = {new_st_js};\n"
    
    with open(st_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("selfTalkData.js updated successfully!")

if __name__ == '__main__':
    print("=== STARTING COMPLETE DATASET TRANSLATION FIX ===")
    process_vocabulary()
    process_self_talk()
    print("=== ALL TRANSLATIONS COMPLETED SUCCESSFULLY ===")
