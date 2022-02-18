import { Button, Input, Typography, message, Card } from "antd";
import BaseTemplate from "components/BaseTemplate";
import PaddedLayout from "components/Layout/PaddedLayout";
import React, { useMemo, useState } from "react";
import { DateTime, Interval } from "luxon";

type Props = {};

const PasswordReset = (props: Props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/password/email", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      if (res.status !== 200 && res.status !== 201) throw res.body;
      message.success(
        "The email was sent! Check your inbox. This might take a couple of minutes."
      );
      setHasAttempted(true);
    } catch (err) {
      message.error(`Request failed. Error message: ${JSON.stringify(err)}`);
    }
    setLoading(false);
  };

  const Success = () => {
    return (
      <div className="flex flex-col gap-2  ">
        <span className="font-semibold">Check your email</span>
        <span className="">
          We just sent you an email containing a temporary link that will allow
          you to reset your password. <br />
        </span>
        <span>
          Please check your spam folder if the email doesn’t appear within a few
          minutes.
        </span>
        <span>
          If there are any issues email us, and we&apos;ll help fix it!
        </span>
      </div>
    );
  };

  return (
    <BaseTemplate>
      <PaddedLayout className="h-screen grid justify-center">
        <div
          className={`bg-white border shadow p-8  w-128 ${
            hasAttempted ? "h-96" : "h-64"
          }`}
        >
          <div className="grid gap-4">
            {!hasAttempted ? (
              <div className="flex flex-col justify-center gap-8">
                <Typography.Title level={4} className="text-center">
                  Reset Your Password
                </Typography.Title>
                <Input
                  defaultValue={email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  addonBefore="Email"
                />
                <Button
                  type="primary"
                  loading={loading}
                  disabled={loading}
                  onClick={handleClick}
                >
                  Send Reset Email
                </Button>
              </div>
            ) : (
              <div>
                <Success />
              </div>
            )}
          </div>
        </div>
      </PaddedLayout>
    </BaseTemplate>
  );
};

export default PasswordReset;
