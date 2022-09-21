import { graphql } from "@octokit/graphql"; // github server에 접근하기 편하도록
import { useEffect, useState } from "react";
import Discussions from "./Discussions";

const TOKEN_ID = process.env.REACT_APP_TOKEN_ID;

async function getRepository() {
  const { repository } = await graphql(
    `
      {
        repository(name: "agora-states-fe", owner: "codestates-seb") {
          discussions(first: 100) {
            edges {
              node {
                id
                title
                createdAt
                url
                author {
                  login
                  avatarUrl
                }
                category {
                  name
                }
                answer {
                  author {
                    login
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `token ${TOKEN_ID}`,
      },
    }
  );

  return repository;
}

function App() {
  const [repository, setRepository] = useState({});
  const { discussions } = repository;

  useEffect(() => {
    getRepository()
      .then((data) => {
        setRepository(data);
      })
      .catch((error) => {
        console.log(Error, error);
      });
  }, []);

  console.log(discussions);

  return (
    <div className="main">
      <header>
        <h1>My Agora States</h1>
      </header>
      <div className="main-wrapper">
        {discussions !== undefined ? (
          <Discussions discussions={discussions} />
        ) : (
          <div>loading...</div>
        )}
      </div>
      <footer>codestates</footer>
    </div>
  );
}

export default App;
