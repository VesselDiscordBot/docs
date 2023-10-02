---
title: User Formatted String
description: Set Join message.
---

A string can be dynamically formatted with information about a user, This page lists the possible values.

:::tip
The key should be wrapped in 2 `{}`'s

e.g. `{{user.mention}}`
:::

:::note
This doesn't include Server Members

See [Member Formatted String](/reference/member_formatted_string)
:::

| Key          | Description         | Example                 |
| ------------ | ------------------- | ----------------------- |
| user.mention | The user mention    | `<@424239181296959507>` |
| user.name    | The user's username | `badstagram`            |
| user.id      | The user's ID       | `424239181296959507`    |
