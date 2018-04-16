/*
 * Copyright 2017 Uncharted Software Inc.
 */

export default function(imageUrl, block) {
    const imagesUrls = imageUrl ? [].concat(imageUrl) : [];
    let output = '';
    imagesUrls.forEach(url => {
        output += block.fn({ url });
    });
    return output;
}
