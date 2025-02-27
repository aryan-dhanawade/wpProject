from flask import Flask, redirect, request, jsonify
from werkzeug.middleware.proxy_fix import ProxyFix

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app)

@app.route('/redirect', methods=['POST'])
def redir():
    
    username = request.form.get('username')
    password = request.form.get('password')
    print(username, password)

    return redirect('http://localhost:5500/index.html')

@app.route('/signupRedirect', methods=['POST'])
def redirSignup():
    print(request.form)
    return redirect('http://localhost:5500/login.html')

if __name__ == '__main__':
    app.run(debug=True)

