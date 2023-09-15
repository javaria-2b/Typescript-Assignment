"use strict";
function make_shirt(size = "Large", text = "I love TypeScript.") {
    console.log(`T-shirt size: ${size}, Text on shirt: ${text}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love Metaverse");
