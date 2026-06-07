cara jalanin projek

1. aktifkan env
   python3 -m venv venv
    source venv/bin/activate
3. instal library
     pip install -r requirements.txt
4. set up .env
   buat file .env yang sejajak dengan file .envcontoh
   lalu isi
    SECRET_KEY=
    DEBUG=T
    
    DB_ENGINE=
    DB_NAME=
    DB_USER=
    DB_PASSWORD=
    DB_HOST=
    DB_PORT=

     LALU BUAT SCRET_KET
       jalanin ini di cmd
       python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
       lalu hasilnya di taruh di scretkey di .env
5. MIGRASI DB
   python manage.py migrate
6. runserver
   python manage.py runserver
7. install
   npm install axios
   npm install react-router-dom
   npm install @tanstack/react-query
   npm install zustand
   npm install react-icons
   npm install recharts
   npm install framer-motion
