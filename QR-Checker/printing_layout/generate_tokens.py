import qrcode

def number_to_letters(n):
    """Convert a number to Excel-style two-letter code (e.g., 1 → AA, 224 → IP)."""
    n -= 1  # Convert to zero-based index
    first = n // 26
    second = n % 26
    return chr(65 + first) + chr(65 + second)

# Base URL (replace with your actual Google Apps Script URL)
BASE_URL = "https://script.google.com/macros/s/..../exec?token="

# Generate QR codes for tokens 1AA to 224IP
for number in range(1, 225):  # 1-224 inclusive
    letters = number_to_letters(number)
    token = f"{number}{letters}"
    
    # Generate QR code
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(f"{BASE_URL}{token}")
    qr.make(fit=True)
    
    # Save QR code with token in filename
    img = qr.make_image(fill="black", back_color="white")
    img.save(f"qr_{token}.png")

print("All QR codes generated!")