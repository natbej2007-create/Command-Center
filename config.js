// ================================================================
// Command Center — configuration
// Safe to be public. There are NO secrets in this file.
// The Client ID is not a secret. The Claude key lives ONLY in
// your Azure Function, never here.
// ================================================================
window.CC_CONFIG = {
  // Your Azure App Registration (Application / client) ID
  clientId: "5298a373-7247-4c20-84ad-cb4f247cf7c9",

  // Your Microsoft tenant. The verified domain works fine here.
  // If you ever want to be exact, replace with your Directory (tenant) ID GUID.
  tenantId: "unitedservices.work",

  // Microsoft Graph permissions the app requests (already consented).
  scopes: ["User.Read", "Mail.Read", "Calendars.Read"],

  // Your Azure Function endpoint that talks to Claude.
  // Fill this in AFTER you deploy the function (Step 3 in README).
  // Example: https://command-center-ai.azurewebsites.net/api/claude
  proxyUrl: "https://command-center-ai.natbej2007.workers.dev/",

  // Base URL where these files are hosted (GitHub Pages).
  // Used to build the auth popup pages.
  baseUrl: "https://natbej2007-create.github.io/Command-Center",
};
