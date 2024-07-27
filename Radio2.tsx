import React, { useState } from "react";
import APP from ".src//App";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

export const RadioComponent: React.FC = () => {
  const [value1, setValue1] = useState("Apple");
  const [value2, setValue2] = useState("Apple");
  const [value3, setValue3] = useState("Apple");
  const [value4, setValue4] = useState("Apple");

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };

  const onChange2 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio2 checked", value);
    setValue2(value);
  };

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio3 checked", value);
    setValue3(value);
  };

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio4 checked", value);
    setValue4(value);
  };

  return (
    <>
      <Radio.Group
        options={["Apple", "Pear", "Orange"]}
        onChange={onChange1}
        value={value1}
      />
      <br />
      <Radio.Group
        options={[
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange", disabled: true },
        ]}
        onChange={onChange2}
        value={value2}
      />
      <br />
      <br />
      <Radio.Group
        options={[
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange", title: "Orange" },
        ]}
        onChange={onChange3}
        value={value3}
        optionType="button"
      />
      <br />
      <br />
      <Radio.Group
        options={[
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange", disabled: true },
        ]}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};