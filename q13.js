// 13. Web Scraper Using Axios and Cheerio

const axios = require('axios');
const cheerio = require('cheerio');

const scrapeSite = async () => {
  try {
    const { data } = await axios.get('https://quotes.toscrape.com/');
    const $ = cheerio.load(data);
    const quotes = [];

    $('.quote').each((i, el) => {
      const text = $(el).find('.text').text();
      const author = $(el).find('.author').text();
      quotes.push({ text, author });
    });

    console.log(quotes);
  } catch (err) {
    console.error('Scraping failed:', err.message);
  }
};

scrapeSite();