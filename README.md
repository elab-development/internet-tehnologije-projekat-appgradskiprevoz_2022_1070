1. Napraviti novi folder u okviru xampp/htdocs foldera.

2. Otvoriti GIT Bash.

3. U okviru GIT Bash-a upisati ovu komandu: git clone https://github.com/elab-development/internet-tehnologije-projekat-appgradskiprevoz_2022_1070

4. Otvoriti VisualStudio Code, i zatim i ovaj folder u okviru njega.

5. Pokrenuti novi terminal.

6. Upisati sledeće komande:
    1) cd backend
    2) composer install
    3) cp. .env.example .env
    4) php artisan serve
    5) php artisan migrate:fresh --seed

7. Pokrenuti novi terminal i upisati sledeće komande:
    1) cd frontend
    2) npm install
    3) npm start

8. Otvoriti početnu stranicu localhost:3000/lines

Aplikacija omogućava korisnicima da se informišu o linijama gradskog prevoza u Beogradu. Pored osnovnih informacija moguće je videti i rutu linije na mapi. Pravljenjem naloga se omogućava kupovina karte za odredjenu liniju. Nakog kupovine karte, korisnik može da pregleda svoje karte na /mytickets stranici. Admini i moderatori aplikacije imaju pristup dodatnoj stranici gde mogu da menjaju/dodaju i brišu korisnike i linije iz aplikacije, kao i da pregledaju sve korisnike i obrišu njihove kupljene karte.