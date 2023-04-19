export async function celeb(celebrity) {
  // Catherine Haena Kim

  // let preprocessCeleb = celebrity.replaceAll(" ", "%20");

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": process.env.REACT_APP_RA_KEY,
  //     "X-RapidAPI-Host": process.env.REACT_APP_RA_HOST,
  //   },
  // };

  // let response = await fetch(
  //   `${process.env.REACT_APP_RA_URL}${preprocessCeleb}?apiKey=${process.env.REACT_APP_RA_API_KEY}`,
  //   options
  // )
  //   .then((response) => response.json())
  //   // .then(response => console.log(response))
  //   .catch((err) => console.error(err));

  //   console.log(response);
  let preprocessCeleb = celebrity.replaceAll(" ", "");
  let preprocessUrl = `https://v2.sg.media-imdb.com/suggestion/h/${preprocessCeleb}.json`;
  // console.log(preprocessUrl);

  let response = await fetch(preprocessUrl, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}
