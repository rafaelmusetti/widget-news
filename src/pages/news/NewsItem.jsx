import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Row, Col } from 'antd';

const NewsItemContent = styled.div`
  border-bottom: 1px solid;
  padding: 12px 0;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const PublicationDate = styled.div`
  font-size: 20px;
  color: #A4A4A4;
`;

const Source = styled.span`
  font-size: 20px;
  padding: 0px 12px 4px;
  background-color: #D8D8E4;
  color: #FFFFFF;
`;

const LinkTitle = styled.a`
  color: #4E4E4E;
`;

const NewsItem = ({
  title,
  publishedAt,
  source,
  url,
}) => (
  <NewsItemContent className="news-item">
    <Row>
      <Col span={24}>
        <Title>
          <LinkTitle href={url}>{title}</LinkTitle>
        </Title>
      </Col>
    </Row>
    <Row>
      <Col xs={{ span: 8 }} lg={{ span: 3 }}>
        <PublicationDate className="news-item__date">{moment(publishedAt).format('DD/MM/YYYY')}</PublicationDate>
      </Col>
      <Col xs={{ span: 16 }} lg={{ span: 21 }}>
        <Source className="news-item__source">{source}</Source>
      </Col>
    </Row>
  </NewsItemContent>
);

NewsItem.propTypes = {
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  source: PropTypes.string,
  url: PropTypes.string,
};

NewsItem.defaultProps = {
  title: '',
  publishedAt: '',
  source: '',
  url: '',
};

export default NewsItem;
