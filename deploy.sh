#!/usr/bin/expect -f
set timeout -1
spawn scp -o StrictHostKeyChecking=no -pr dist docker-compose.yml administrator@196.189.50.57:/home/administrator/girar-landing-page
expect "password: "
send "Girar@2025\r"
expect eof
spawn ssh -o StrictHostKeyChecking=no administrator@196.189.50.57 "cd /home/administrator/girar-landing-page && chmod -R 755 dist && (docker compose up -d || docker-compose up -d)"
expect "password: "
send "Girar@2025\r"
expect eof
