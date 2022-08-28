import {ActionType, ProColumns, ProTable} from '@ant-design/pro-components';
import React, {useRef} from 'react';
import {deleteTopicByManager, getTotalTopics} from "@/services/topicList";
import {Link} from "umi";
import {message} from "antd";

type ItemType = {
  topicId: number;
  topicTile: string;
  topicContent: string;
  createTime: Date;
  topicLikes: number;
};


const topicManage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const DeleteTopic = async (topicId: number)=>{
    const _id = await deleteTopicByManager({
      topicId: topicId,
    });
    if(_id){
      message.success("删除成功");
    }else{
      message.error("删除失败")
    }
  }

  const columns: ProColumns<ItemType>[] = [
    {
      title: '题目标题',
      search: false,
      dataIndex: 'topicTitle',
      ellipsis: true,
      tip: '过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      title: '内容',
      search: false,
      dataIndex: 'topicContent',
      ellipsis: true,
      tip: '过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      title: '创建时间',
      search: false,
      dataIndex: 'createTime',
      valueType: 'dateTime',
    },
    {
      title: '点赞数',
      search: false,
      dataIndex: 'topicLikes',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record) => [
        <Link  to={`/qd/${record.topicId}`} target="_blank">
          查看
        </Link>,
        <a onClick={()=> DeleteTopic(record.topicId)}>
          删除
        </a>,
      ],
    },
  ];
  return (
    <div>
    <ProTable<ItemType>
      columns={columns}
      actionRef={actionRef}
      request={async ( ) => {
        const topicList = await getTotalTopics();
        return {
          data: topicList,
          success: true,
        };
      }}

      cardBordered
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={false}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      headerTitle="题目列表"
    />
    </div>
  );
};

export default topicManage;
