+++
title = 'SVI Volatility Skews for Bitcoin Options'
date = 2025-02-16T18:46:18-06:00
draft = false
+++

[This](https://todd-ford.com/app) project implements the Stochastic Volatility Inspired (SVI) parameterization to calibrate volatility skews for Bitcoin options across multiple expiries. The implementation is based on a [paper](https://arxiv.org/pdf/1204.0646) by Gatheral and Jacquier, demonstrating methods for fitting SVI surfaces while guaranteeing the absence of static arbitrage. However, while this project calibrates skews to market data in real time, the enforcement of the no-arbitrage conditions is left for future work.

## Project Overview

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

   In the [demo](https://todd-ford.com/app), these parameters can be adjusted to see the effect on the SVI fits.

3. **Calibration Process**:

   - The calibration is done using a Levenberg-Marquardt optimization to minimize the difference between market and model implied volatilities

4. **Visualization**:
   - 2D slice views for individual expiry dates
   - Real-time updates as market data changes

## Future Work

The paper further explains how to take the calibrated parameters of the Raw SVI and transform them into the Natural and Jump Wing versions of the model, with the Jump Wing version being expressed with parameters more intuitive for traders. It also demonstrates further requirements for guaranteeing the absence of calendar and butterfly arbitrage. Finally, interploating/extrapolating between and beyond listed tenors would be quite valuable for valuing options for custom dates and strikes.
