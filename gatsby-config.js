module.exports = {
    siteMetadata: {
        title: `Jonathan Ortega`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-graphcms`,
            options: {
                endpoint: process.env.GRAPHCMS_URL,
                token: process.env.GRAPHCMS_TOKEN,
                query: `{
                    Person(id: "${process.env.PROFILE_ID}") {
                      fullName
                      country
                      experiences {
                          companyName
                          roleName
                      }
                      networkses {
                          name
                          link
                      }
                      bio {
                          content
                      }
                      skills {
                          name
                          type
                      }
                    }
                }`
            }
        }
    ]
};
