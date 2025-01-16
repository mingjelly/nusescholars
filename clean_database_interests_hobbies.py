import json
import re

def clean_text(text):
    """
    Cleans the input text by removing leading numbers, dashes, or periods from each line.
    """
    lines = text.splitlines()  # Split the text into lines
    cleaned_lines = [re.sub(r'^[\d\.\-\s]+', '', line.strip()) for line in lines]  # Clean each line
    cleaned_text = '\n'.join(cleaned_lines).strip()  # Join the cleaned lines back

    # Replace with None if the cleaned text is empty
    return cleaned_text if cleaned_text else None

def clean_json(data):
    """
    Recursively cleans the JSON data, modifying 'interests_hobbies' fields and replacing empty strings with null.
    """
    if isinstance(data, dict):
        for key, value in data.items():
            if isinstance(value, str):
                cleaned_value = clean_text(value)  # Clean the string
                data[key] = cleaned_value if cleaned_value is not None else None  # Replace empty with None
            else:
                clean_json(value)  # Recursively clean nested dictionaries or lists
    elif isinstance(data, list):
        for index, item in enumerate(data):
            if isinstance(item, str):
                cleaned_item = clean_text(item)  # Clean the string
                data[index] = cleaned_item if cleaned_item is not None else None  # Replace empty with None
            else:
                clean_json(item)

# Load JSON data
input_file = 'src/data/database.json'  # Replace with your JSON file path
output_file = 'src/data/database.json'

with open(input_file, 'r') as file:
    data = json.load(file)

# Clean the JSON data
clean_json(data)

# Save the cleaned JSON data
with open(output_file, 'w') as file:
    json.dump(data, file, indent=4)

print("JSON data cleaned and saved to", output_file)
