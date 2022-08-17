import Config from "../configs";

const getHostData = fetch(Config.MANIFEST_API_URL).then(res => res.json());

export const getHostUrl = () => getHostData.then(({manifest}) => manifest);
export const getHostname = () => getHostData.then(({host}) => host);
