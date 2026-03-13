---
slug: selfhost
---

## In a nutshell 
The key points on selfhosting : 
- a fixed IP accessible via internet with open ports (ask the ISP)
- redirect the open ports to the local IP of the machine (port mapping in the router settings)
- If you have a [domain](About%20domains.md), you need to setup a DNS record to point to your machines's public IP 
- a good practice is having a webserver running a reverse proxy on the machine to route traffic to the correct service (services accessible through only one port)

## On android
Some test to repurpose an old android phone as a server. 
From my research the setup consits of :
- termux for emulating the linux env
- caddy or nginx running on it, providing the web server
- port mapping
- (optional) a way to create a tunnel to the IP of the phone (multiple ways to [do it](Tunnel%20a%20connexion.md))
[[Specifically on the Doro]]
[[To connect via ssh]]
[[Run darkhttpd]]

## Security
About HTTPS and the SSL (TLS) protocol in here [[SSL protocol]]
[[Reverse proxy]]

## Current setup
[[Rasp Pi]]
[[Docker]]
[[Open ports]]
