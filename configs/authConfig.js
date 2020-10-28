const msalConfig = {
    auth: {
      clientId: "e3681511-37f9-41d1-a8f3-d4763a313002",
      authority: "https://login.microsoftonline.com/a9d90964-91d3-4c01-ab00-563f95f00a38",
      redirectUri: "https://arnabdas-protiviti.github.io/chatbot-poc/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  const loginRequest = {
   scopes: ["openid", "profile", "User.Read"]
  };
  
  // Add scopes here for access token to be used at Microsoft Graph API endpoints.
  const tokenRequest = {
   scopes: ["User.Read", "Mail.Read"]
  };
