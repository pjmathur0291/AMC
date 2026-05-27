import https from 'https';

const getImgUrl = (url) => new Promise(resolve => {
  https.get(url, res => {
    let body = '';
    res.on('data', d => body += d);
    res.on('end', () => {
      const match = body.match(/<meta property="og:image" content="(.*?)"/);
      if (match) {
        resolve(match[1]);
      } else {
        const fallback = body.match(/https:\/\/i\.postimg\.cc\/[A-Za-z0-9]+\/[A-Za-z0-9\.\-\(\)]+/g);
        resolve(fallback ? fallback[0] : null);
      }
    });
  });
});

async function main() {
  const ids = ['BjjtsxVz', 'V0CyNkXP', 'YhTP97Sq', 'xk3ptb3x'];
  for (const id of ids) {
    const url = 'https://postimg.cc/' + id;
    const imgUrl = await getImgUrl(url);
    console.log(id, imgUrl);
  }
}
main();
