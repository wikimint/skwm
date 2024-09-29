<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>XML Sitemap</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        margin: 20px;
                        background-color: #f9f9f9;
                    }
                    h1 {
                        color: #333;
                    }
                    ul {
                        list-style-type: none;
                        padding: 0;
                    }
                    li {
                        margin: 5px 0;
                    }
                    a {
                        text-decoration: none;
                        color: #0066cc;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                </style>
            </head>
            <body>
                <h1>XML Sitemap</h1>
                <ul>
                    <xsl:for-each select="urlset/url">
                        <li>
                            <a>
                                <xsl:value-of select="loc"/>
                            </a>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
