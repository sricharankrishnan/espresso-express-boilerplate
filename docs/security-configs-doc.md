# Espresso Security Configuration with Helmet.js
The following are the set of HTTP headers set with the default espresoo scaffold. Developers can choose to modify these settings/remove http headers based on individual project requirements.

+ Content Security Policy: script-src http://localhost:4500 https://ajax.googleapis.com 'nonce-dynamically-generated-value';img-src http://localhost:4500 https://img.shields.io;default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';object-src 'none';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests

+ Cross-Origin-Embedder-Policy: require-corp

+ Cross-Origin-Opener-Policy: same-origin

+ Expect-CT: max-age=86400, report-uri="https://skip.has.report/report.php"

+ Referrer-Policy: no-referrer,same-origin,strict-origin-when-cross-origin

+ Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

+ X-Content-Type-Options: nosniff

+ X-DNS-Prefetch-Control: off

+ X-Download-Options: noopen

+ X-Frame-Options: DENY

+ X-Permitted-Cross-Domain-Policies: none

+ X-XSS-Protection: 0
