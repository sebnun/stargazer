// Inefficient to have a route just to make an HTTP request
// But just wanted to show a basic server - client architecture

export default function handler(req, res) {
  const { id } = req.query;
  const endpoint = `https://api.github.com/repos/${id}`;

  fetch(endpoint)
    .then((r) => r.json())
    .then((json) => res.status(200).json(json))
    .catch((e) => {
      console.error(e); 
      res.status(500).json({ error: "Something wrong happened fetching :(" });
    });
}
