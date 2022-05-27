# Akamai 2.x

## Some info I think
- Script isn't uniform for each provider, the same encryption algorithm is probably used but with different keys and rotating information
- Script rotates variables per site, and also potentially at run time (could also be due to version changes but I can't find a version number anywhere)
- bmak.get_telemetry() gets the data that is fetched and sent to the server