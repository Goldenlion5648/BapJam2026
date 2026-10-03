import json
from pathlib import Path

colors = [
    "black",
    "red",
    "green",
    "brown",
    "blue",
    "purple",
    "cyan",
    "light_gray",
    "gray",
    "pink",
    "lime",
    "yellow",
    "light_blue",
    "magenta",
    "orange",
    "white",
]

output_dir = Path(".")

for color in colors:
    display_name = color.replace("_", " ").title()

    data = {
        "name": display_name,
        "category": "botania:petals",
        "icon": f"botania:{color}_petal",
        "extra_recipe_mappings" : {
            f"botania:{color}_petal" : 0,
            f"botania:{color}_petal_block" : 0,
            f"botania:{color}_mystical_flower" : 0,
        },
        "pages": [
            {
                "type": "text",
                "text": f"{display_name} was "
            }
        ]
    }
    data.pop("pages")
    item_mappings_key = "extra_recipe_mappings"
    with open(output_dir / f"{color}.json", "r") as f:
        existing = json.loads(f.read())
        # existing[item_mappings_key] = data[item_mappings_key]
        existing["pages"][1] = {
            "type": "patchouli:spotlight",
            "title": f"{color.title()}",
            "item": {
                "tag": f"botania_{color}_items"
            }
        }

    with open(output_dir / f"{color}.json", "w") as f:
        json.dump(existing, f, indent=4)