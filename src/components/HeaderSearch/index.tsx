import {AutoComplete, Input} from 'antd';
import React from 'react';

export type HeaderSearchProps = {
  onSearch?: (value?: string) => void;
  onChange?: (value?: string) => void;
  onVisibleChange?: (b: boolean) => void;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
};

const HeaderSearch: React.FC<HeaderSearchProps> = (props) => {
  const { value,placeholder,onChange } = props;

  const handleSearch = (name: string) => {
      window.open(`/questions?q=${name}`);
  };

  return (

      <AutoComplete
        value={value}
        style={{ width: '100%' }}
        onChange={(v) => {
          if (onChange && v.length < 40) {
            onChange(v);
          }
        }}
      >
        <Input.Search
          placeholder={placeholder}
          size="small"
          maxLength={40}
          enterButton
          onSearch={handleSearch}
        />
      </AutoComplete>
  );
};

export default HeaderSearch;
