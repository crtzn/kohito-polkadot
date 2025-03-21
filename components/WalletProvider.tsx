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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Wallet,
  Copy,
  Package,
  History,
  Settings,
  LogOut,
} from "lucide-react";

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Address copied to clipboard");
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
          {!isWalletConnected && (
            <Button
              className={getButtonStyles("primary")}
              onClick={() => {
                fetchAccounts();
                setIsDialogOpen(true);
              }}
            >
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </Button>
          )}
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center bg-[#252728] rounded-full px-2 py-1 focus:outline-none">
              <div className="bg-[#e4ff07] rounded-full w-8 h-8 flex items-center justify-center mr-2">
                <span className="text-[#000000] text-xs">👤</span>
              </div>
              <span className="text-white text-sm mr-1">
                {selectedAccount.meta.name ||
                  `Anon #${shortenAddress(selectedAccount.address)}`}
              </span>
              <ChevronDown className="w-4 h-4 text-white" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 mr-4 bg-[#1e1e1e] border-[#252728] text-white p-0 rounded-xl">
            {/* User Profile Header */}
            <div className="p-4 flex items-center gap-3">
              <div className="bg-[#e4ff07] rounded-full w-10 h-10 flex items-center justify-center border-2 border-[#e4ff07]">
                <span className="text-[#000000] text-sm">👤</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">
                  {selectedAccount.meta.name ||
                    `Anon #${shortenAddress(selectedAccount.address)}`}
                </span>
                <span className="text-xs bg-[#0dff00] text-[#000000] px-2 rounded-full w-fit">
                  Verified
                </span>
              </div>
            </div>

            {/* Connected Address */}
            <div className="mx-4 mb-4">
              <div className="bg-[#252728] rounded-xl p-3 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-[#696b6d]">
                    Connected Address
                  </span>
                  <span className="text-sm">
                    {shortenAddress(selectedAccount.address)}
                  </span>
                </div>
                <button
                  className="text-[#696b6d] hover:text-white transition-colors"
                  onClick={() => copyToClipboard(selectedAccount.address)}
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <DropdownMenuItem className="px-4 py-3 focus:bg-[#252728] cursor-pointer">
              <div className="text-[#e4ff07] mr-3">
                <Package size={18} />
              </div>
              <span className="hover:text-white">Inventory</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="px-4 py-3 focus:bg-[#252728] cursor-pointer">
              <div className="text-white mr-3">
                <History size={18} />
              </div>
              <span className="hover:text-white">Transaction History</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="px-4 py-3 focus:bg-[#252728] cursor-pointer">
              <div className="text-white mr-3">
                <Settings size={18} />
              </div>
              <span className="hover:text-white">Settings</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-[#252728]" />

            <DropdownMenuItem
              className="px-4 py-3 focus:bg-[#252728] cursor-pointer"
              onClick={handleWalletDisconnect}
            >
              <div className="text-[#ff2670] mr-3">
                <LogOut size={18} />
              </div>
              <span className="text-[#ff2670]">Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}

export default WalletProvider;
