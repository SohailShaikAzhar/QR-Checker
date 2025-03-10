from PIL import Image, ImageOps
import os

# Paths
main_image_path = r"PATH"  # Main image
qr_folder = r"PATH"  # Folder containing QR codes
output_folder = r"PATH"  # Output folder

# Load the main image
main_image = Image.open(main_image_path)

# Define position and size for the QR code
qr_size = (200, 200)  # Resize QR codes
position = (main_image.width - 250, main_image.height - 250)  # Adjust coordinates

# Process each QR code in the folder
for filename in os.listdir(qr_folder):
    if filename.endswith(".png"):  # Ensure processing only PNG files
        qr_path = os.path.join(qr_folder, filename)
        
        # Load and resize QR code
        qr_code = Image.open(qr_path).resize(qr_size)
        
        # Convert to black (grayscale)
        qr_code = ImageOps.grayscale(qr_code)

        # Create a copy of the main image to modify
        modified_image = main_image.copy()
        
        # Paste QR code onto the main image
        modified_image.paste(qr_code, position)

        # Save the modified image
        output_path = os.path.join(output_folder, f"MainFrame_with_{filename}")
        modified_image.save(output_path)

print("Processing complete. All images saved in:", output_folder)
