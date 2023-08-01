# Introduction
Script is redirecting you instantly to a new created free case battle
# Usage
1. Open https://key-drop.com/en/case-battle/list
2. Copy a script
```javascript   
    const targetNode = document.querySelector('tbody[class="relative"]');
    const config = { attributes: false, childList: true, subtree: false };

    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if(mutation.addedNodes[0].querySelector('span[class="text-center text-sm font-bold text-green"]')){
                // redirect to the new battle
                window.location.href = mutation.addedNodes[0].querySelector('a').href
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);


```
3. Open console `Ctrl + Shift + J` or `Ctrl + Shift + I`
4. Paste the code and you are ready to go!
