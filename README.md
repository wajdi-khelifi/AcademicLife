# AcademicLife
AcademicLife is an e-learning platform designed to offer a wide range of courses across various disciplines. The platform supports user authentication, course browsing, enrollment, and interactive learning experiences.

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Python, Django
- **Database:** SQLite (Development), PostgreSQL (Production)
- **Payment Processing:** Stripe

## Getting Started
### Prerequisites

- Python 3.8+
- pip and virtualenv

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/AcademicLife.git
cd AcademicLife
```
2. Set up a Python virtual environment and activate it:
```bash
python -m virtualenv venv
source venv/bin/activate # On Windows use venv\Scripts\activate
```
3. Install the dependencies:
```bash
pip install -r requirements.txt
```
4. Migrate the database:
```bash
python manage.py migrate
```
5. Run the development server:
```bash
python manage.py runserver
```

