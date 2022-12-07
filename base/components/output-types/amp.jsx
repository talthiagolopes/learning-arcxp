import React from 'react';

const AmpOutputType = ({
 children,
 contextPath,
 deployment,
 CssLinks,
 Fusion,
 Libs,
 MetaTags
}) =>
 <html>
   <head>
     <title>Fusion Article</title>
     <MetaTags />
     <Libs />
     <CssLinks />
     <link rel='icon' type='image/x-icon' href={deployment(`${contextPath}/resources/favicon.ico`)} />
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
     <script async src="https://cdn.ampproject.org/v0.js"></script>
   </head>
   <body>
     <h2>AMP output-type!</h2>
     <div id='fusion-app'>
       {children}
     </div>
     <Fusion />
   </body>
 </html>

AmpOutputType.fallback = false;

export default AmpOutputType;