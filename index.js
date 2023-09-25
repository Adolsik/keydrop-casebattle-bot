
    // Target node: tbody[class="relative"]; New battles appear here
    const targetNode = document.querySelector('tbody[class="relative"]');

    // Observer options
    const config = { attributes: false, childList: true, subtree: false };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if(mutation.addedNodes[0].querySelector('p[class="absolute top-1/2 -translate-y-1/2 rounded-r tabular-nums pr-1.5 py-0.5 text-center text-[9px] font-semibold xl:text-[10px] bg-navy-750"]')){
                // redirect to the new battle
                mutation.addedNodes[0].querySelector('a').click()
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
