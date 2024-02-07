const query = `
query GetGroupedProducts {
    groupedProducts(args: {publishing_id: "3fee5495-0abb-4e3a-b2f8-98c8227ae0e9"}) {
        id
        productInformations(where: { language: { _eq: fi } }) {
            name
            description
        }
        postalAddresses {
            location
            postalCode
            streetName
            city
        }
    }
}
  
`;

(async () => {
  
  const authBody = new URLSearchParams();
  authBody.append("grant_type", "password");
  authBody.append("client_id", "datahub-api");
  // This value should be the client secret you received in an email from datahub when you registered
  
  authBody.append("client_secret", 'ed7cd94f-727e-4cf7-879c-1c26f798bcc0');
  // This value should be the email you used to register to Datahub as API user
  authBody.append("username", 'mikathefinn@gmail.com');
  // This value should be the password for the API user
  authBody.append("password", 'juhapaavo69');

  const authRes = await fetch(
    "https://iam-datahub.visitfinland.com/auth/realms/Datahub/protocol/openid-connect/token",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: authBody,
    }
  );

  const accessToken = (await authRes.json()).access_token;

  const res = await fetch(
    "https://api-datahub.visitfinland.com/graphql/v1/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const queryResult = await res.json();
  console.log(JSON.stringify(queryResult, null, 2));
})();
