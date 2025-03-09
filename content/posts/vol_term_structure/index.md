+++
title = 'Forward Implied Volatility Term Structure'
date = 2025-03-06T00:00:00-00:00
draft = false
+++

[This](https://todd-ford.com/app/vol-term-structure) is a simple application to display the forward implied at-the-money
volatility term structure for Bitcoin options in real time.

## Methodology

"At-the-money" in this case is defined as the option with the strike price nearest to the underlying forward price. As the forward price rarely falls precisely on an exact strike, a linear interpolation is made between the volatilities of the two options with the nearest strikes (above and below) the forward. For option tenors without a corresponding listed forward, a similiar linear interpolation is made between the prices of the forwards nearest to the option tenor.

## Architecture

A diagram of the application architecture is pictured below. The primary application receives market data via websocket from a leading derivatives exhange. That MD is procecessed and published to Redis using Redis's [publish/subscibe paradigm](https://redis.io/docs/latest/develop/interact/pubsub/).

Clients connect to the server and Nginx routes traffic to a websocket server and a REST API (built with [FastAPI](https://fastapi.tiangolo.com/)) as appropriate. The REST API is responsible for sending back static configuration data contained in both Redis and a PostgreSQL database. The websocket server subscribes to the processed market data being published to Redis and handles incoming client connections, broadcasting the processed MD to client subscribers.

{{< figure src="architecture.jpg" alt="Application Architresecture" caption="Application Architecture" >}}

## Visualization:
The visualization is a simple Typescript/React application leveraging [https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API](WebSockets) and [Recharts](https://recharts.org/en-US/)

