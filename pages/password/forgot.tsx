import { Button, Input, Typography, message } from "antd";
import BaseTemplate from "components/BaseTemplate";
import PaddedLayout from "components/Layout/PaddedLayout";
import React, { useMemo, useState } from "react";
import { DateTime, Interval } from "luxon";

type Props = {};

const PasswordReset = (props: Props) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastAttempt, setLastAttempt] = useState<Date>();

  const handleClick = async () => {
    setLoading(true);
    try {
      await fetch("https://api.ameelio.org/api/v1/password/email", {
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
      message.success(
        "The email was sent! Check your inbox. This might take a couple of minutes."
      );
      setLastAttempt(new Date());
    } catch (err) {
      message.error(`Request failed. Error message: ${JSON.stringify(err)}`);
    }
    setLoading(false);
  };

  const hasRecentlyAttempted = useMemo(
    () =>
      lastAttempt
        ? Interval.fromDateTimes(lastAttempt, new Date()).length("minutes") <= 2
        : false,
    [lastAttempt]
  );

  return (
    <BaseTemplate>
      <PaddedLayout className="h-screen grid justify-center">
        <div className="bg-white border shadow p-16 flex justify-center w-128 h-72">
          <div className="grid gap-4">
            <Typography.Title level={4} className="text-center">
              Reset Your Password
            </Typography.Title>
            <Input
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              addonBefore="Email"
            />
            <Button
              type="primary"
              loading={loading}
              disabled={loading || hasRecentlyAttempted}
              onClick={handleClick}
            >
              Send Reset Email
            </Button>
          </div>
        </div>
      </PaddedLayout>
    </BaseTemplate>
  );
};

export default PasswordReset;
