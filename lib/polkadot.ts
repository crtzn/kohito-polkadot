const { ApiPromise, WsProvider } = require("@polkadot/api");

// Connect to polkadot network for our frontend
//

export async function connectToPopNetwork() {
  const provider = "provider here";
  const api = await ApiPromise.create(provider);
}
