function getGithubDataFor(githubProfileName = "") {
    return new Promise((resolve, reject) => {
      const response = fetch(
        `https://api.github.com/users/${githubProfileName}`
      ).then(response => {
        response.json().then(json => {
          const { html_url, company, id, node_id } = json;
          resolve({ html_url, company, id, node_id, date: new Date() });
          // De todo el payload solamente retornamos estas props
        });
      });
    });
  }
  
  // LLamando la función que retorna una Promesa
  getGithubDataFor("octocat").then(obj => {
    console.log({ obj });
    // Mostramos en consola el objeto
  });