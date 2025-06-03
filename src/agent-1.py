# Import necessary modules
import os

# HTML content
html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Hello, World!</h1>
    </div>
</body>
</html>
"""

# CSS content
css_content = """
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1 {
    color: #333;
    font-size: 48px;
    text-align: center;
}
"""

# Create HTML file
with open("index.html", "w") as html_file:
    html_file.write(html_content)

# Create CSS file
with open("styles.css", "w") as css_file:
    css_file.write(css_content)

print("HTML and CSS files have been created successfully.")
