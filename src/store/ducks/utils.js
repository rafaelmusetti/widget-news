export const normalize = (data) => {
  if (!data.length) {
    return {
      ids: [],
      content: {},
    };
  }

  const ids = [];
  const content = {};
  data.forEach((value) => {
    content[value.url] = {
      ...value,
    };
    ids.push(value.url);
  });

  return {
    ids,
    content,
  };
};

export const getSources = (articles) => {
  const sources = {};
  articles.forEach((article) => {
    sources[article.source.name] = article.source.name;
  });
  return sources;
};
