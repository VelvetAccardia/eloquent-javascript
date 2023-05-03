function triangleOfHashesLoop (n) {
    let hashes = '';
    while (hashes.length < n) {
        hashes += '#'
        console.log(hashes);
    }
}

triangleOfHashesLoop(7)