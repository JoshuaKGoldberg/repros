import { use } from "chai";

use((await import("sinon-chai")).default);
use((await import("chai-as-promised")).default);

console.log("setup.js worked.");
