import React from 'react';
import moment from 'moment';
import styles from './index.less';
import {Button, message, Space} from "antd";
import {SignType} from "@/model/sign";
import {signDelete} from "@/services/sign";

type TopicListContentProps = {
  createTime: Date;
  sign: SignType;
};
const SignAccountContent: React.FC<TopicListContentProps> = (
   { createTime,sign}
) => {

  const doDelete = async ()=>{
    const res = await signDelete(sign);
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

export default SignAccountContent;
