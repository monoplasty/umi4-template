import { GridContent } from '@ant-design/pro-components';

import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Input } from 'antd';
import { useState } from 'react';

const valueEnum: Record<number, string> = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  sample: number;
  disease: number;
  age: number;
  gender: number;
  project: string;
  type: number;
  dataFrom: string;
  status: string;
  createdAt: number;
  tissue: number;
  platform: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    project: 'AppName',
    type: Math.floor(Math.random() * 20),
    sample: Math.floor(Math.random() * 20),
    disease: Math.floor(Math.random() * 20),
    age: Math.floor(Math.random() * 20),
    gender: Math.floor(Math.random() * 20),
    dataFrom: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    tissue: Date.now() - Math.floor(Math.random() * 100000),
    platform: Date.now() - Math.floor(Math.random() * 100000),
    memo:
      i % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: 'Sample',
    width: 80,
    dataIndex: 'sample',
    search: false,
  },
  {
    title: 'Project',
    dataIndex: 'project',
    search: false,
  },
  {
    title: 'Data From',
    dataIndex: 'dataFrom',
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: 'Status',
    width: 80,
    dataIndex: 'status',
    search: false,
    valueEnum: {
      all: { text: '全部' },
      付小小: { text: '付小小' },
      曲丽丽: { text: '曲丽丽' },
      林东东: { text: '林东东' },
      陈帅帅: { text: '陈帅帅' },
      兼某某: { text: '兼某某' },
    },
  },
  {
    title: 'Sample Type',
    key: 'type',
    dataIndex: 'type',
    valueType: 'date',
  },
  {
    title: 'Tissue',
    key: 'tissue',
    dataIndex: 'tissue',
    valueType: 'date',
  },
  {
    title: 'Platform',
    dataIndex: 'platform',
    ellipsis: true,
  },
  {
    title: 'Disease',
    dataIndex: 'disease',
    ellipsis: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    ellipsis: true,
    search: false,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    ellipsis: true,
  },
];

const HomePage: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const onSearch = (value: string) => {
    console.log('index-121-->', value);
  };
  return (
    <GridContent>
      <ProTable<TableListItem>
        columns={columns}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
          });
        }}
        rowKey="key"
        pagination={{
          showQuickJumper: true,
        }}
        search={{
          optionRender: false,
          collapsed: false,
        }}
        rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
        dateFormatter="string"
        headerTitle={
          <Input.Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        }
        toolBarRender={() => [
          <Button key="show" onClick={() => history.push('/upload')}>
            Upload
          </Button>,
          <Button
            type="primary"
            key="primary"
            disabled={!(selectedRowKeys.length > 0)}
          >
            Integration
          </Button>,
        ]}
        options={false}
      />
    </GridContent>
  );
};

export default HomePage;
