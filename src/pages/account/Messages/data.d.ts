export type tabKeyType = 'unRead' | 'read';
export interface TagType {
  key: string;
  label: string;
}

export type GeographicType = {
  province: {
    label: string;
    key: string;
  };
  city: {
    label: string;
    key: string;
  };
};

export type NoticeType = {
  id: string;
  title: string;
  logo: string;
  description: string;
  updatedAt: string;
  member: string;
  href: string;
  memberLink: string;
};

export type CurrentUser = {
  name: string;
  avatar: string;
  userid: string;
  notice: NoticeType[];
  email: string;
  signature: string;
  title: string;
  group: string;
  tags: TagType[];
  notifyCount: number;
  unreadCount: number;
  country: string;
  geographic: GeographicType;
  address: string;
  phone: string;
};

export type Member = {
  avatar: string;
  name: string;
  id: string;
};

export interface ListItemDataType {
  topicId: number;
  topicTitle?: string;
  topicContent: string;
  topicLikes: number;
  isStared: boolean;
  userId: number;
  replyNum: number;
  isDelete: boolean;
  createTime: Date;
  updateTime: Date;
}
