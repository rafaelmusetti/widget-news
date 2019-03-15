import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Spin } from 'antd';
import styled from 'styled-components';
import { fetchNewsList, setFilterArticles } from '../../store/ducks/news';
import NewsItem from './NewsItem';
import NewsListHeader from './NewsListHeader';

const ButtonContent = styled.div`
  margin-top: 26px;
`;

const LoadingContent = styled.div`
  text-align: center;
  margin: 50px;
`;

/* istanbul ignore next */ const nook = () => {};
class NewsList extends Component {
  static propTypes = {
    articles: PropTypes.shape({}),
    loading: PropTypes.bool,
    onFetchNewsList: PropTypes.func,
    onSetFilter: PropTypes.func,
    sources: PropTypes.shape({}),
  };

  static defaultProps = {
    articles: {},
    loading: false,
    onFetchNewsList: nook,
    onSetFilter: nook,
    sources: {},
  };

  state = {
    numberOfArticles: 5,
  }

  componentDidMount = async () => {
    const { onFetchNewsList } = this.props;
    await onFetchNewsList();
  }

  handleFilter = (value) => {
    const { onSetFilter } = this.props;
    onSetFilter(value);
  }

  handleShowMore = () => {
    const { numberOfArticles } = this.state;
    const newLimit = numberOfArticles + 5;
    this.setState({ numberOfArticles: newLimit });
  }

  render() {
    const {
      articles,
      loading,
      sources,
    } = this.props;
    const { numberOfArticles } = this.state;
    const totalArticlesToBeShow = Object.keys(articles).length - numberOfArticles;
    return (
      <div>
        <NewsListHeader
          sources={sources}
          onChangeFilter={this.handleFilter}
        />
        {
          loading ? (
            <LoadingContent>
              <Spin />
            </LoadingContent>
          ) :
            Object.keys(articles).slice(0, numberOfArticles).map(articleKey => (
              <NewsItem
                title={articles[articleKey].title}
                publishedAt={articles[articleKey].publishedAt}
                source={articles[articleKey].source ? articles[articleKey].source.name : ''}
                url={articles[articleKey].url}
                key={articleKey}
              />
            ))
        }
        <ButtonContent>
          <Button
            type="primary"
            onClick={() => this.handleShowMore()}
            disabled={totalArticlesToBeShow <= 0}
          >
            Mostrar mais
          </Button>
        </ButtonContent>
      </div>
    );
  }
}

const getFilteredArticles = (articles, filter) => {
  if (!filter) {
    return articles;
  }
  const filtered = Object.keys(articles).reduce((acc, articleKey) => {
    if (articles[articleKey].source.name === filter) {
      return {
        ...acc,
        [articleKey]: articles[articleKey],
      };
    }
    return acc;
  }, {});

  return filtered;
};

const mapStateToProps = ({ news, communication }) => ({
  articles: getFilteredArticles(news.articles.content, news.filter),
  sources: news.sources,
  loading: communication.loading,
});

const mapDispatchToProps = {
  onFetchNewsList: fetchNewsList,
  onSetFilter: setFilterArticles,
};

export default connect(
  mapStateToProps, mapDispatchToProps,
)(NewsList);
