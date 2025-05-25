import json

def normalize_admit_year(admit_year):
    return admit_year.lower().replace("/", "-")[0:7]

def get_major_prefix(major):
    return major[:3].upper()

def clean_major_description(major):
    parts = major.split("- ", 1)
    return parts[1] if len(parts) > 1 else major

def find_existing_major_key(main_data, admit_year_key, major_prefix):
    """Return the existing major key that matches the prefix, or None"""
    majors = main_data.get(admit_year_key, {})
    for existing_key in majors:
        if existing_key.upper() == major_prefix:
            return existing_key
    return None

def merge_json(main_data, new_data):
    for student_id, student_info in new_data.items():
        admit_year_key = normalize_admit_year(student_info['admit_year'])
        major_prefix = get_major_prefix(student_info['major'])
        major_clean = clean_major_description(student_info['major'])

        # Update student's major field to cleaned version
        student_info['major'] = major_clean

        # Ensure admit year exists
        if admit_year_key not in main_data:
            main_data[admit_year_key] = {}

        # Find matching major key if it exists
        existing_major_key = find_existing_major_key(main_data, admit_year_key, major_prefix)
        major_key = existing_major_key if existing_major_key else major_prefix

        # Ensure the major section exists
        if major_key not in main_data[admit_year_key]:
            main_data[admit_year_key][major_key] = {}

        # Insert the student info
        main_data[admit_year_key][major_key][student_id] = student_info

    return main_data

# === Load JSON files ===
with open('./src/data/database.json', 'r') as f:
    main_data = json.load(f)

with open('./src/data/database_add.json', 'r') as f:
    new_data = json.load(f)

# === Merge data ===
merged_data = merge_json(main_data, new_data)

# === Save to main_data.json ===
with open('./src/data/database.json', 'w') as f:
    json.dump(merged_data, f, indent=4)
