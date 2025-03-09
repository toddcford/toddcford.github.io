+++
title = 'SVI Volatility Skews for Bitcoin Options'
date = 2025-02-16T18:46:18-06:00
draft = false
+++

[This](https://todd-ford.com/app/svi-parameterization) project implements the Stochastic Volatility Inspired (SVI) parameterization to calibrate volatility skews for Bitcoin options across multiple expiries. The implementation is based on a [paper](https://arxiv.org/pdf/1204.0646) by Gatheral and Jacquier, demonstrating methods for fitting SVI surfaces while guaranteeing the absence of static arbitrage. However, while this project calibrates skews to market data in real time, the enforcement of the no-arbitrage conditions is left for future work.

## Overview and Methodology

The key pieces to the implementation are:

1. **Data Collection**: Many crypto exchanges have public facing APIs where you can subscribe to real time market data. This project gets real time options and futures prices over websocket from the leading crypto derivatives exchange.

2. **SVI Parameterization**: The raw SVI parameterization:

   σ²(k) = a + b(ρ(k-m) + √((k-m)² + σ²))

   where:

   - σ²(k) is the total implied variance
   - k is the log-moneyness
   - (a, b, ρ, m, σ) are the SVI parameters:
   - a controls the overall level of variance (vertically shifting the fits)
   - b controls the slopes of both the put and call wings
   - ρ controls asymmetry of the smile
   - m shifts the curve left/right
   - σ affects the ATM curvature of the smile

3. **Calibration Process**:
   - The calibration is done using a Levenberg-Marquardt optimization to minimize the difference between market and model implied volatilities

4. **Visualization**:
    - The [visualization](https://todd-ford.com/app/svi-parameterization) is a React application with 2D views for each tenor overlaying the current market vols with the SVI fit. The charts are made with [Nivo](https://nivo.rocks/)
    - The parameters for each fit can be adjusted on the front end and the fit will update accordingly. To get back to the optimized fit simply refresh the page.

## Future Work

As stated above, this implementation does not guarantee the absence of static arbitrage, and occasionally the optimizations can get stuck on local minima, resulting in poor fits. Enforcing the no-arbitrage constraints and building out methods for 
interpolating between tenors and extrapolating beyond the furthest listed tenor, resulting in a full surface, would be a nice extension to the current project.
