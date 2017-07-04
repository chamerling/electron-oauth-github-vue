module.exports = {
  sources: {
    repoUrl: 'https://github.com/chamerling/electron-oauth-github-vue'
  },
  oauth: {
    clientId: process.env.GITHUB_CLIENT_ID || '4a8e6f1b7b6d6be477f4',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || 'AHAHAHAHAHAHAHAHAHAHAHAHAHA',
    authorizationUrl: 'http://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    useBasicAuthorizationHeader: false,
    // don't touch me
    redirectUri: 'http://localhost'
  }
};
