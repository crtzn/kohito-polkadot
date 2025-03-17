import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getButtonStyles } from "@/utils/WalletButtonStyle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

//polkadot import
import {
  web3Accounts,
  web3Enable,
  web3FromSource,
  web3AccountsSubscribe,
} from "@polkadot/extension-dapp";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import { stringToHex } from "@polkadot/util";

const NAME = "Kohito";

function WalletProvider() {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] =
    useState<InjectedAccountWithMeta | null>(null); // Changed to single account

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Fetch all accounts when the dialog opens
  const fetchAccounts = async () => {
    const extensions = await web3Enable(NAME);
    if (extensions.length === 0) {
      toast.error(
        "No wallet extension found. Please install Polkadot.js extension."
      );
      return;
    }

    const allAccounts = await web3Accounts();
    if (allAccounts.length === 0) {
      toast.error("No accounts found in the wallet extension.");
      return;
    }

    setAccounts(allAccounts);
  };

  // Handle connecting to a specific account
  const handleConnect = async (account: InjectedAccountWithMeta) => {
    try {
      const injector = await web3FromSource(account.meta.source);
      const signRaw = injector?.signer?.signRaw;

      if (!signRaw) {
        toast.error("Signer not available for this account.");
        return;
      }

      const { signature } = await signRaw({
        address: account.address,
        data: stringToHex("message to sign"),
        type: "bytes",
      });

      setSelectedAccount(account);
      setIsWalletConnected(true);
      setIsDialogOpen(false); // Close the modal after selection
      toast.success(`Connected to ${account.meta.name || account.address}`);
    } catch (error) {
      toast.error("Failed to connect to the selected wallet");
      console.error(error);
    }
  };

  // Handle wallet disconnection
  const handleWalletDisconnect = async () => {
    let unsubscribe;
    unsubscribe = await web3AccountsSubscribe((injectedAccounts) => {
      injectedAccounts.map((account) => {
        console.log(account.address);
      });
    });
    setIsWalletConnected(false);
    setSelectedAccount(null);
    toast.error("Wallet Disconnected");
    unsubscribe && unsubscribe();
  };

  return (
    <div>
      {/* Dialog for account selection */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            className={getButtonStyles(
              isWalletConnected ? "secondary" : "primary"
            )}
            onClick={
              isWalletConnected
                ? handleWalletDisconnect
                : () => {
                    fetchAccounts();
                    setIsDialogOpen(true);
                  }
            }
          >
            {isWalletConnected
              ? `Disconnect (${shortenAddress(selectedAccount?.address || "")})`
              : "Connect"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Wallet</DialogTitle>
            <DialogDescription>Choose a wallet to connect</DialogDescription>
          </DialogHeader>
          <div className="max-h-[300px] overflow-y-auto">
            {accounts.length > 0 ? (
              accounts.map((account) => (
                <div
                  key={account.address}
                  className="p-2 mb-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
                  onClick={() => handleConnect(account)}
                >
                  <p className="text-sm font-medium">
                    {account.meta.name || "Unnamed Wallet"}
                  </p>
                </div>
              ))
            ) : (
              <p>No wallets available</p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Show selected account details when connected */}
      {isWalletConnected && selectedAccount && (
        <div className="mt-4">
          <div className="p-2 bg-gray-100 rounded">
            <p className="text-sm break-all">
              {shortenAddress(selectedAccount.address)}
            </p>
            {selectedAccount.meta.name && (
              <p className="text-xs text-gray-600">
                Name: {selectedAccount.meta.name}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletProvider;
