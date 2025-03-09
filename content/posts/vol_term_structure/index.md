+++
title = 'Forward Implied Volatility Term Structure'
date = 2025-03-06T00:00:00-00:00
draft = false
+++

[This](https://todd-ford.com/app/vol-term-structure) is a simple application to display the forward implied at-the-money
volatility term structure for Bitcoin options in real time.

## Project Overview

"At-the-money" in this case is defined as the option with the strike price nearest to the underlying forward price. As the forward price rarely falls precisely on an exact strike, a linear interpolation is made between the volatilities of the two options with the nearest strikes (above and below) the forward. For option tenors without a corresponding listed forward, a similiar linear interpolation is made between the prices of the forwards nearest to the option tenor.

## Architecture

Market data is obtained through public websocket APIs of the leading cryptocurrency derivatives exchange - Deribit. After performing the algorthim to determine the ATM volatilites for each tenor, data is pushed to a Redis instance using a publish/subscribe pattern. A Websocket server accepts connections from clients and simultaneously subscribes to incoming data published to Redis, acting as a multiplexer and distributing the incoming data to client connections.

{{< figure src="architecture.jpg" alt="Application Architresecture" caption="Application Architecture" >}}

4. **Visualization**:
   - 2D slice views for individual expiry dates
   - Real-time updates as market data changes
