const articleSectionMain = document.querySelector('.article-section-main');

let response;
fetch('https://dev.to/api/articles?username=commentme')
  .then((x) => x.json())
  .then((y) => {
    for (let i = 0; i < 8; i++) {
      const article = document.createElement('div');
      article.className = 'article';

      const articleImg = document.createElement('img');
      articleImg.className = 'article-img';
      articleImg.src = y[i].cover_image;
      article.append(articleImg);

      const articleHeader = document.createElement('h3');
      articleHeader.className = 'article-header';
      articleHeader.innerText = y[i].title;
      article.append(articleHeader);

      const tagDiv = document.createElement('div');
      tagDiv.className = 'tag-div';

      y[i].tag_list.forEach((tag) => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag-element';
        tagElement.innerText = '#' + tag;
        tagDiv.append(tagElement);
      });

      article.append(tagDiv);

      const articleContent = document.createElement('p');
      articleContent.className = 'article-content';
      articleContent.innerText = y[i].description;
      article.append(articleContent);

      const articleLink = document.createElement('a');
      articleLink.className = 'article-link';
      articleLink.href = y[i].url;
      articleLink.innerText = 'View';
      article.append(articleLink);

      articleSectionMain.append(article);
    }
  });
