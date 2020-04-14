// Remove the outer scroll window... because ew. Who decided that looked good?
function cleanPreTags() {
    const highlightedPreElements = document.getElementsByTagName('pre');

    if(highlightedPreElements.length > 0) {
        Object.values(highlightedPreElements).forEach(item => item.classList.remove('highlight'));
    }
};

/**
 * Read in the word count of the post, and generate an estimated reading time for the user
 * This function assumes a user will spend 1 minute looking at each image in the post
 * This function uses a default avg wpm of 265, that number comes from Medium.
 * @param {String} id - The document id to use when injecting the estimate.
 * @param {Number} numWords - The number of words in the post.
 * @param {Number} numImages - The number of images in the post.
 * @param {Number} wpm  - The estimated words per minute that we expect the avg, user to read in.
 */
function estimatedReadTime(id = '', numWords = 0, numImages = 0, wpm = 265) {
    const minutes = Math.ceil((numWords / wpm) + numImages).toLocaleString();
    document.getElementById(id).innerText = `${minutes} min read`;
}
