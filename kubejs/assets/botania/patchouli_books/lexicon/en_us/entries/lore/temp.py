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
        "category": "botania:lore",
        "icon": f"botania:{color}_petal",
        "pages": [
            {
                "type": "text",
                "text": f"{display_name} was "
            }
        ]
    }

    with open(output_dir / f"{color}.json", "w") as f:
        json.dump(data, f, indent=4)