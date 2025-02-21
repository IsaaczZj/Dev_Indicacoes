"use client";

import IconButton from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy } from "lucide-react";
import React, { useState } from "react";

interface InvateLinkProps {
  inviteLink: string;
}

const InviteLinkInput = ({ inviteLink }: InvateLinkProps) => {
  const [copy, setCopy] = useState(false);
  async function copyInviteLink() {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopy(true);
    } catch (err) {
      setCopy(false);
    }
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField readOnly defaultValue={inviteLink} />
      <IconButton onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
      {copy && <p>Copiado</p>}
    </InputRoot>
  );
};

export default InviteLinkInput;
