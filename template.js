const template = sites => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Queer Coded Webring - Index</title>
    <meta property="og:site_name" content="Queer Coded Webring" />
    <meta property="og:title" content="Queer Coded Webring - Index" />
    <meta property="og:type" content="website" />
    <meta content="#00ff00" name="theme-color" />
    <link rel="stylesheet" type="text/css" href="/index.css">
</head>
<body>
<div class="container">
        <span class="top-container">
            <div class="imgcontainer">
                <img src="logo.svg" alt="Queer Coded Logo" />
                <img src="logo.svg" alt="Queer Coded Logo" aria-hidden="true" />
            </div>
            <h1>Queer Coded</h1>
            <h1>&lt;Webring&gt;</h1>
        </span>
    <table>
        <thead>
        <tr>
            <th colspan="2">Websites</th>
        </tr>
        </thead>
        <tbody>
        ${sites.map(site => {
            return `
            <tr>
                <th><a href="${site.https ? 'https://' : 'http://'}${site.domain}${site.path}">${site.name}</a></th>
                <th>${site.author}</th>
            </tr>`    
        }).join('')
        }   
        </tbody>
    </table>
</div>
</body>
</html>
`
export default template