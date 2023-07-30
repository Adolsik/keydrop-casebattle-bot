
    // Target node: tbody[class="relative"]; New battles appear here
    const targetNode = document.querySelector('tbody[class="relative"]');

    // Observer options
    const config = { attributes: false, childList: true, subtree: false };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        // info about the new battle
        info = mutation.addedNodes[0].innerText

        // link to the new battle
        battle_link = mutation.addedNodes[0].querySelector('a').href

        // if battle is free then app will open it
        if(info.includes("FREE")) {
            window.location.href = battle_link
        } 
    }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
