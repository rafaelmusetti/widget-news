import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Select } from 'antd';

const { Option } = Select;

const NewsListHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const Title = styled.div`
  color: #009DFF;
  font-size: 32px;
  font-weight: 700;
  border-bottom: 4px solid #009DFF;
`;

/* istanbul ignore next */ const nook = () => {};
const NewsListHeader = ({
  onChangeFilter,
  sources,
}) => (
  <NewsListHeaderContent className="news-item">
    <Title>
      Notícias
    </Title>
    <div>
      <Select
        allowClear
        onChange={onChangeFilter}
        placeholder="Filtrar por fonte"
        style={{ width: '170px' }}
      >
        {
          Object.keys(sources).map(source => (
            <Option value={source}>{source}</Option>
          ))
        }
      </Select>
    </div>
  </NewsListHeaderContent>
);

NewsListHeader.propTypes = {
  onChangeFilter: PropTypes.func,
  sources: PropTypes.arrayOf(PropTypes.shape({})),
};

NewsListHeader.defaultProps = {
  onChangeFilter: nook,
  sources: [],
};

export default NewsListHeader;
