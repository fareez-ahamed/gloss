import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const PrimaryButton = () => (
  <Button variant="primary" label="Click Me!" />
);

export const PrimaryLargeButton = () => (
  <Button variant="primary" size="lg" label="Click Me!" />
);

export const PrimarySmallButton = () => (
  <Button variant="primary" size="sm" label="Click Me!" />
);

export const SecondaryButton = () => (
  <Button variant="secondary" label="Click Me!" />
);

export const DefaultButton = () => (
  <Button variant="default" label="Click Me!" />
);

export const DangerButton = () => <Button variant="danger" label="Click Me!" />;
