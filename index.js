
    // Target node: tbody[class="relative"]; New battles appear here
    const targetNode = document.querySelector('tbody[class="relative"]');

    // Observer options
    const config = { attributes: false, childList: true, subtree: false };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if(mutation.addedNodes[0].querySelector('span[class="text-center text-sm font-bold text-green"]')){
                // redirect to the new battle
                window.location.href = mutation.addedNodes[0].querySelector('a').href
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
