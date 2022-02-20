import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Input, Typography, message, Form } from "antd";
import BaseTemplate from "components/BaseTemplate";
import PaddedLayout from "components/Layout/PaddedLayout";
import { ValidateStatus } from "antd/lib/form/FormItem";
type Props = {};

type PasswordResetState = "pristine" | "loading" | "submitted";
type InputProps = {
  value: string;
  validateStatus?: ValidateStatus;
  errorMsg?: string | null;
};

const PasswordReset = (props: Props) => {
  const router = useRouter();
  const [password, setPassword] = useState<InputProps>({ value: "" });
  const [passwordConfirmation, setPasswordConfirmation] = useState<InputProps>({
    value: "",
  });
  const [state, setState] = useState<PasswordResetState>("pristine");

  const { token } = router.query;

  const handleClick = async () => {
    setState("loading");

    try {
      const result = await fetch(`/api/password/reset`, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          password: password.value,
          password_confirmation: passwordConfirmation.value,
          token,
        }),
      });

      if (result.status !== 201 && result.status !== 200) throw result.body;
      message.success("Your password was reset successfully!");
      setState("submitted");
    } catch (err) {
      message.error(`Request failed. Error message: ${JSON.stringify(err)}`);
      setState("pristine");
    }
  };

  const TIP = "Your password must be at least 8 characters long";

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  return (
    <BaseTemplate>
      <PaddedLayout className="h-screen grid justify-center">
        <div className="bg-white border shadow p-16 flex justify-center w-128 md:h-96 ">
          <div className="flex flex-col gap-8">
            <Typography.Title
              level={3}
              className="md:text-center text-lg font-bold"
            >
              Reset Your Password
            </Typography.Title>
            <Form className="flex flex-col gap-4">
              <Form.Item
                label="New Password"
                rules={[{ required: true }]}
                validateStatus={password.validateStatus}
                help={password.errorMsg || TIP}
                {...formItemLayout}
              >
                <Input.Password
                  defaultValue={password.value}
                  value={password.value}
                  onChange={(e) => {
                    const validPassword = e.target.value.length >= 8;
                    const validateStatus: ValidateStatus = validPassword
                      ? "success"
                      : "error";
                    const errorMsg = validPassword
                      ? undefined
                      : "Your password must be at least 8 characters long";
                    setPassword({
                      value: e.target.value.trim(),
                      validateStatus,
                      errorMsg,
                    });
                  }}
                  type="password"
                  placeholder="New Password"
                />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                rules={[{ required: true }]}
                validateStatus={passwordConfirmation.validateStatus}
                help={passwordConfirmation.errorMsg}
                {...formItemLayout}
              >
                <Input.Password
                  defaultValue={passwordConfirmation.value}
                  value={passwordConfirmation.value}
                  onChange={(e) => {
                    const matchesPw = e.target.value === password.value;
                    const validateStatus: ValidateStatus = matchesPw
                      ? "success"
                      : "error";
                    const errorMsg = matchesPw
                      ? undefined
                      : "Your passwords do not match";
                    setPasswordConfirmation({
                      value: e.target.value.trim(),
                      validateStatus,
                      errorMsg,
                    });
                  }}
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  xs: { span: 24, offset: 0 },
                  sm: { span: 16, offset: 8 },
                }}
              >
                <Button
                  htmlType="submit"
                  type="primary"
                  loading={state === "loading"}
                  disabled={
                    state !== "pristine" ||
                    passwordConfirmation.value !== password.value ||
                    password.value.length <= 7
                  }
                  onClick={handleClick}
                >
                  Reset Password
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </PaddedLayout>
    </BaseTemplate>
  );
};

export default PasswordReset;
