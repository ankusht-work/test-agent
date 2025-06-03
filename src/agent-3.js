Here's a clean, well-commented Python code for creating an "About Us" page using Flask:

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/about')
def about():
    # Define team members
    team_members = [
        {
            'name': 'John Doe',
            'position': 'CEO',
            'bio': 'John has over 20 years of experience in the industry.'
        },
        {
            'name': 'Jane Smith',
            'position': 'CTO',
            'bio': 'Jane is an expert in AI and machine learning.'
        },
        {
            'name': 'Mike Johnson',
            'position': 'Lead Developer',
            'bio': 'Mike has been coding for over a decade.'
        }
    ]

    # Company information
    company_info = {
        'name': 'TechCorp',
        'mission': 'To innovate and inspire through technology.',
        'founded': 2010
    }

    # Render the about page template
    return render_template('about.html', team=team_members, company=company_info)

if __name__ == '__main__':
    app.run(debug=True)
```

This code assumes you have a corresponding HTML template named 'about.html' in your templates folder.