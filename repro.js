import path from "node:path";
import { API } from "typescript/unstable/sync";

const directory = path.resolve(process.argv[2]);
const outside = path.join(directory, "outside.ts");

const api = new API({ cwd: directory });

try {
	const snapshot = api.createSnapshot({ openFiles: [outside] });
	const project = snapshot.getDefaultProjectForFile(outside);
	console.log(`Default project for outside.ts: ${project?.configFileName || "(an inferred project)"}`);
} finally {
	api.close();
}
