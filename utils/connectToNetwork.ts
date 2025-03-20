import { ApiPromise, WsProvider } from "@polkadot/api";

async function main() {
  try {
    // const provider = new WsProvider("ws://127.0.0.1:56935");
    // Connect to Asset Hub Kusama (using Dwellir's endpoint)
    const provider = new WsProvider("wss://statemine-rpc-tn.dwellir.com");
    const api = await ApiPromise.create({ provider });

    // Retrieve the chain & node information via rpc calls
    const [chain, nodeName, nodeVersion] = await Promise.all([
      api.rpc.system.chain(),
      api.rpc.system.name(),
      api.rpc.system.version(),
    ]);

    console.log(
      `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`
    );
  } catch (error) {
    console.error("Error connecting to the network:", (error as Error).message);
  }
}

main()
  .catch(console.error)
  .finally(() => process.exit());
