Here's a Python code for creating a contact page:

```python
from flask import Flask, render_template, request, flash
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.example.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your_email@example.com'
app.config['MAIL_PASSWORD'] = 'your_email_password'
app.config['MAIL_DEFAULT_SENDER'] = 'your_email@example.com'

mail = Mail(app)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        
        # Send email
        msg = Message('New Contact Form Submission',
                      recipients=['admin@example.com'])
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        mail.send(msg)
        
        flash('Your message has been sent successfully!', 'success')
        return render_template('contact.html')
    
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
```

This code assumes you have a `contact.html` template in your `templates` folder. The template should include a form with fields for name, email, and message.