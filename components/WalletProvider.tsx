import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  web3Accounts,
  web3Enable,
  web3FromSource,
  web3AccountsSubscribe,
} from "@polkadot/extension-dapp";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { stringToHex } from "@polkadot/util";

const NAME = "Kohito"; // u can change this

function WalletProvider() {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccounts, setSelectedAccounts] =
    useState<InjectedAccountWithMeta>();

  useEffect(() => {}, []);

  const handleConnection = async () => {
    const extension = await web3Enable(NAME);

    if (!extension) throw Error("No extension found!");

    const allAccounts = await web3Accounts();
    const account = allAccounts[0];
    const injector = await web3FromSource(account.meta.source);
    const signRaw = injector?.signer?.signRaw;

    if (!!signRaw) {
      const { signature } = await signRaw({
        address: account.address,
        data: stringToHex("message to sign"),
        type: "bytes",
      });
    }

    console.log(allAccounts);
    setAccounts(allAccounts);
  };

  return (
    <div>
      <Button
        className="bg-[#FF2670] px-7 py-3 rounded-full text-white hover:bg-[#fd4884] hover:text-white"
        onClick={handleConnection}
      >
        Connect
      </Button>
    </div>
  );
}

export default WalletProvider;
