import React from 'react';
import ReactDOM from 'react-dom';
import './ant.css';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinishusername = (values) => {
    var stripSUID =values.substring(0,3);
    if (!this.showFormErrors()) {
    console.log('form is invalid: do not submit');
    } else {
    console.log('form is valid: submit');
    if(stripSUID===111){
    alert('ورود کارمندان');
    }
    else if(stripSUID===222){
    alert('ورود اساتید');
    }
    else {
    alert('ورود دانشجویان');
    }
    }
  };

  const onFinishFailedusername = (errorInfo) => {
      alert('باید 10 عدد وارد کنید');
  };


  return (


    <div class="formsss">
    <h1 d="usernameLabel">
        گلستان
    </h1>
    <div class="formsss">
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="نام کاربری"
        name="username"
        pattern="^[0-9]{10}$"
        rules={[
          {
            required: true,
            message: 'لطفا نام کاربری را وارد کنید'
          },
        ]}
        
      onFinish={onFinishusername}
      onFinishFailed={onFinishFailedusername}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="کلمه عبور"
        name="password"
        pattern="^[0-9]{10}$"
        rules={[
          {
            required: true,
            message: 'لطفا کلمه عبور را وارد کنید'
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>مرا به خاطر بسپار</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          ورود
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};


export default Demo;
