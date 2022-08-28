import React, {useState} from 'react';
import {Button, Card, Space} from "antd";
import styles from "@/pages/UserDetail/style.less";
import InputPassword from "@/pages/Admin/ResetScore/InputPassword";


const ResetScore: React.FC = () => {

  const [addModalVisible, setAddModalVisible] = useState<boolean>(false);
  const click = async ()=>{
    setAddModalVisible(true);
  }


  return (
    <Card>
      <Card.Meta
        className={styles.cardMeta}
        title={
        <Space>
          <div>
            此操作会重置所有协会成员的总积分，属于危险操作，操作前请确认！
          </div>
          <Button danger={true} onClick={click}>
            确认
          </Button>
        </Space>
        }
      />
      <InputPassword
        visible={addModalVisible}
        onClose={() => setAddModalVisible(false)}
      />
    </Card>

  );
};

export default ResetScore;
