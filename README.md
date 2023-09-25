# Introduction
Script is redirecting you instantly to a new created free case battle (x1 ticket)
# Usage
1. Open https://key-drop.com/en/case-battle/list and wait for it to fully load
2. Copy a script
```javascript   
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

```
3. Open console `Ctrl + Shift + J` or `Ctrl + Shift + I`
4. Paste the code and you are ready to go! (do not worry about 'Uncaught' Type Errors)
# Out of date 
- If the code does not work let me know in the [Issues section](https://github.com/Adolsik/keydrop-casebattle-script/issues). I will update it to the latest version of keydrop.
