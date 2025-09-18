import sys
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.chunks = []
    def handle_data(self, data):
        data = data.strip()
        if data:
            self.chunks.append(data)

with open('figma_help.html', 'r', encoding='utf-8') as f:
    html = f.read()

parser = TextExtractor()
parser.feed(html)
text = '\n'.join(parser.chunks)

with open('figma_help.txt', 'w', encoding='utf-8') as out:
    out.write(text)
