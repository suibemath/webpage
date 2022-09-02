import {Button, Col, Form, Input, message, Modal, Row} from 'antd';
import React, {useEffect, useState} from 'react';
import type {CurrentUser} from '@/model/user';
import {useModel} from '@@/plugin-model/useModel';
import './style.less';
import {writeReply} from '@/services/reply';

interface AddCommentModalProps {
  visible: boolean;
  topicId: number;
  onClose: () => void;
}
/**
 * 创建或修改评论
 *
 * @param props
 * @constructor
 * @author liyupi
 */
const AddReplyModal: React.FC<AddCommentModalProps> = (props) => {
  const { visible, topicId, onClose } = props;
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [replyContent, setReplyContent] = useState<string>('');
  const { initialState } = useModel('@@initialState');
  const { currentUser = {} as CurrentUser } = initialState || {};
  const [form] = Form.useForm();
  const _replyContent = Form.useWatch('replyContent', form);


  useEffect(() => {
    if (!visible || !topicId || !currentUser.id) {
      return;
    }
  }, [currentUser, topicId, visible]);

  const doSubmit = async () => {
    if (!currentUser.id) {
      message.warning('请先登录');
      return;
    }
    setSubmitting(true);
    setReplyContent(replyContent);
    // 新增
    const res = await writeReply({
      replyContent: _replyContent,
      topicId,
      userId: currentUser.id,
    });
    if (res.message === '回复成功') {
      message.success('回复成功，恭喜你获得5点积分');
      setSubmitting(false);
      onClose();
    } else {
      message.error(res.message);
      setSubmitting(false);
    }
  };

  const doCancel = () => {
    onClose();
    setReplyContent('');
  };


  return (
    <Modal
      title={`写回答`}
      width="60vw"
      style={{ minWidth: 300 }}
      visible={visible}
      destroyOnClose
      maskClosable={false}
      footer={null}
      onCancel={() => doCancel()}
    >
      <Form form={form}>
        <Form.Item name="replyContent">
          <Input.TextArea
            name="replyContent"
            placeholder="请输入具体内容"
            autoSize={{ minRows: 4,maxRows: 12}}
            style={{whiteSpace:'pre-wrap'}}
            showCount />
        </Form.Item>
      </Form>
      <Form.Item>
        <Row gutter={24} justify="end">
          <Col>
            <Button htmlType="reset" block onClick={() => doCancel()}>
              取消
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={submitting}
              disabled={submitting}
              onClick={() => doSubmit()}
            >
              {submitting ? '提交中' : '提交'}
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Modal>
  );
};

export default AddReplyModal;
