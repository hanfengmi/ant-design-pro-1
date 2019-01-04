import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Card, Divider, Tag, Spin } from 'antd';

const role = ['管理员', '普通用户'];

@connect(({ test, loading }) => ({
  test,
  loading: loading.effects['test/test'],
}))
class List extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'test/test',
      payload: {
        id: 'test',
      },
    });
  }

  render() {
    const {
      test: { status },
      loading,
    } = this.props;
    // console.log(status, loading);
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <span>
            <a>{text}</a>
            <Divider type="vertical" />
            <Tag color="purple">{role[record.role]}</Tag>
          </span>
        ),
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
    ];
    return (
      <Spin spinning={loading}>
        <Card bordered={false}>
          <Table columns={columns} dataSource={status} rowKey="_id" />
        </Card>
      </Spin>
    );
  }
}

export default List;
