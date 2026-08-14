"""Render 'PMI Certification.pdf' to the web asset pmp-certificate.jpg.

    python render-certificate.py

Re-run this after replacing the PDF (e.g. on renewal in 2029) to regenerate
the image used on career.html. Requires: pip install pymupdf pillow
"""
import pathlib
import pymupdf
from PIL import Image
import io

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "PMI Certification.pdf"
OUT = ROOT / "pmp-certificate.jpg"
TARGET_WIDTH = 1800

doc = pymupdf.open(SRC)
page = doc[0]
pix = page.get_pixmap(matrix=pymupdf.Matrix(3, 3))
img = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")

scale = TARGET_WIDTH / img.width
img = img.resize((TARGET_WIDTH, round(img.height * scale)), Image.LANCZOS)
img.save(OUT, "JPEG", quality=90, optimize=True, progressive=True)

print(f"{OUT.name}: {OUT.stat().st_size / 1024:.0f} KB, {img.width}x{img.height}")
print("Update the width/height attributes on the <img> in career.html if the size changed.")
