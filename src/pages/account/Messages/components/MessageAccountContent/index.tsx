import React from 'react';
import moment from 'moment';
import styles from './index.less';
import {Button, message, Space} from "antd";
import {messageDelete} from "@/services/message";
import {MessageType} from "@/model/message";

type TopicListContentProps = {
  createTime: Date;
  msg: MessageType;
};
const MessageAccountContent: React.FC<TopicListContentProps> = (
   { createTime,msg}
) => {

  const doDelete = async ()=>{
    const res = await messageDelete(msg);
    if(res.message === '删除成功'){
      message.success("删除成功")
    }else{
      message.error(res.message);
    }
  }

  return(
  <div className={styles.listContent}>
    <div className={styles.extra}>
      <Space size={"large"}>
        <em>{moment(createTime).format('YYYY-MM-DD HH:mm')}</em>
        <Button onClick={doDelete}>删除</Button>
      </Space>
    </div>
  </div>
  );
};

export default MessageAccountContent;
