import React from 'react';

export default ({
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
        </head>
        <body>
            <h2 class="text-info">Welcome to Power Up!</h2>
            <div id='fusion-app'>
                {children}
            </div>
            <Fusion />
        </body>
    </html>