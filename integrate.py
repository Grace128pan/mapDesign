import json

# Additional information for each province
additional_info = [
    # Provinces
    {
        "name": "Anhui",
        "capital": "Hefei",
        "population": 61000000,
        "localSpecialities": ["Huangshan Maofeng Tea", "Wuhu Rice Dumplings"],
        "salaryRange": "4000-8000 RMB"
    },
    {
        "name": "Fujian",
        "capital": "Fuzhou",
        "population": 39000000,
        "localSpecialities": ["Buddha Jumps Over the Wall", "Fuzhou Fish Balls"],
        "salaryRange": "4000-10000 RMB"
    },
    {
        "name": "Gansu",
        "capital": "Lanzhou",
        "population": 26000000,
        "localSpecialities": ["Lanzhou Beef Noodles", "Dunhuang Melons"],
        "salaryRange": "3000-7000 RMB"
    },
    # Add the rest of the provinces, autonomous regions, municipalities, and special administrative regions here...
]

# Load the original JSON data from the file
with open('C:\\Users\\grace\\Desktop\\1.txt', 'r') as file:
    original_data = json.load(file)

# Add additional information to the original data
for province_info in additional_info:
    original_data.append(province_info)

# Write the updated data back to the file
with open('C:\\Users\\grace\\Desktop\\1.txt', 'w') as file:
    json.dump(original_data, file, indent=4)
