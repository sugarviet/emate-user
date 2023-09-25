import { MinusCircleOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const ProfileInfo = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="p-10">
      <div className="p-6 flex flex-col items-center border border-black rounded-xl">
        <h1 className="text-3xl font-bold my-3">Public Info</h1>
        <h2>Add information about yourself</h2>
      </div>

      <div className="mt-7">
        <Form
          layout="vertical"
          className="px-10 mx-auto"
          name="basic"
          labelCol={{
            span: 0,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            className="mx-auto w-full p-2"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Hãy nhập họ của bạn!",
              },
            ]}
          >
            <Input
              className="w-full mx-auto p-2 flex justify-center"
              placeholder="Họ"
              maxLength={20}
              showCount
            />
          </Form.Item>
          <Form.Item
            className="mx-auto w-full p-2"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Hãy nhập tên của bạn!",
              },
            ]}
          >
            <Input
              className="w-full mx-auto p-2 flex justify-center"
              placeholder="Tên"
              maxLength={20}
              showCount
            />
          </Form.Item>

          <Form.List
        name="about"
        
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                // label={index === 0 ? 'About' : ''}
                required={false}
                key={field.key}
                className="mx-auto w-full p-2 h-full"
              >
             
                <Form.Item
                  {...field}
                  className="flex justify-between"
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input passenger's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <TextArea
                    placeholder="About"
                    style={{width: "95%"}}
                    rows={4}
                  />
                </Form.Item>
                {fields.length > 1 ? ( 
                    <MinusCircleOutlined
                      className="text-3xl ml-2 -translate-y-8"
                      onClick={() => remove(field.name)}
                    />
            
                ) : null}
                
              </Form.Item>
              
              
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  width: '60%',
                }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
        </Form>
      </div>
    </div>
  );
};

export default ProfileInfo;
