import React, { useEffect, useState } from 'react';

function Datahub() {
  const [data, setData] = useState(null);

  const myQuery = `
    query GetGroupedProducts {
      groupedProducts(args: {publishing_id: "3fee5495-0abb-4e3a-b2f8-98c8227ae0e9"}) {
        id
        productInformations(where: { language: { _eq: fi } }) {
          name
          description
        }
      }
    }
  `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authBody = new URLSearchParams();
        authBody.append('grant_type', 'password');
        authBody.append('client_id', 'datahub-api');
        authBody.append('client_secret', 'ed7cd94f-727e-4cf7-879c-1c26f798bcc0');
        authBody.append('username', 'mikathefinn@gmail.com');
        authBody.append('password', 'juhapaavo69');

        const authRes = await fetch(
          'https://iam-datahub.visitfinland.com/auth/realms/Datahub/protocol/openid-connect/token',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: authBody,
          }
        );

        const authData = await authRes.json();
        const accessToken = authData.access_token;
        

        const graphqlRes = await fetch(
          'https://api-datahub.visitfinland.com/graphql/v1/graphql',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ query: myQuery }),
          }
        );

        const queryResult = await graphqlRes.json();
        console.log(queryResult);
        setData(queryResult)
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('log data: ',data)
  
    
  }, [data])
  


  return <div>Datahub</div>;
}

export default Datahub;
