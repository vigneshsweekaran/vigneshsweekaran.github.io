## How to configure Free Let’s Encrypt SSL/TLS Certificates with NGINX for subdomains and autorenew certificates

### Reference:
* https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/

### Prerequisites
* Have NGINX or NGINX Plus installed.
* Own or control the registered domain name for the certificate.
* Create a DNS record that associates your domain name and your server’s public IP address.


```
apt-get update
sudo apt-get install certbot
apt-get install python3-certbot-nginx
```

```
server {
    listen 80;
    server_name gcp-devops.devopspilot.com;

    location / {
        proxy_pass http://localhost:8081;
    }
}

server {
    listen 80;
    server_name gcp-devops1.devopspilot.com;

    location / {
        proxy_pass http://localhost:8082;
    }
}

server {
    listen 80;
    server_name gcp-devops1.devopspilot.com;

    location / {
        proxy_pass http://localhost:8083;
    }
}
```

sudo certbot certonly \
  --agree-tos \
  --email vigneshsweekaran@gmail.com \
  --manual \
  --preferred-challenges=dns \
  -d *.devopspilot.com \
  --server https://acme-v02.api.letsencrypt.org/directory

```
nginx -t && nginx -s reload
```

```
sudo certbot --nginx -d site1.example.com -d site2.example.com -d site3.example.com
```
sudo certbot --nginx -d gcp-devops.devopspilot.com -d gcp-devops1.devopspilot.com -d gcp-devops2.devopspilot.com

server {
    server_name gcp-devops.devopspilot.com;

    location / {
        proxy_pass http://localhost:8081;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/gcp-devops.devopspilot.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/gcp-devops.devopspilot.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    server_name gcp-devops1.devopspilot.com;

    location / {
        proxy_pass http://localhost:8082;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/gcp-devops.devopspilot.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/gcp-devops.devopspilot.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    server_name gcp-devops2.devopspilot.com;

    location / {
        proxy_pass http://localhost:8083;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/gcp-devops.devopspilot.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/gcp-devops.devopspilot.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = gcp-devops.devopspilot.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name gcp-devops.devopspilot.com;
    return 404; # managed by Certbot


}

server {
    if ($host = gcp-devops1.devopspilot.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    server_name gcp-devops1.devopspilot.com;
    return 404; # managed by Certbot


}

server {
    if ($host = gcp-devops2.devopspilot.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name gcp-devops2.devopspilot.com;
    return 404; # managed by Certbot


}

certbot certonly \
  --dns-route53 \
  -d "*.prop.ly"
 
server {
    server_name www.prop.ly;

    location / {
        proxy_pass http://localhost:9001;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/prop.ly/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/prop.ly/privkey.pem;

}

server {
    server_name staging.prop.ly;

    location / {
        proxy_pass http://staging.prop.ly:9002;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/prop.ly/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/prop.ly/privkey.pem;

}
server {
    server_name dev.prop.ly;

    location / {
        proxy_pass http://dev.prop.ly:9003;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/gcp-devops.devopspilot.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/prop.ly/privkey.pem;

}
server {
    if ($host = www.prop.ly) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name www.prop.ly;
    return 404;

}

server {
    if ($host = staging.prop.ly) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name staging.prop.ly;
    return 404;

}

server {
    if ($host = dev.prop.ly) {
        return 301 https://$host$request_uri;
    }

    listen 80;
    server_name dev.prop.ly;
    return 404;

}


