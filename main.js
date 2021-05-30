function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}


let endorse = function () {
    console.log('Starting to endorse')
    // Open folded menu of skills
    let fold = document.getElementsByClassName('pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar')[0];
    console.log(fold)
    fold.click();
    wait(1000);
    console.log('Menu unfolded')
    // Get all skills from page
    let list = document.getElementsByClassName('pv-skill-category-entity__endorse-action pv-skill-entity__endorse-actions ember-view');
    console.log(list.length, ' skills found')
    for (var i = 0; i < list.length; i++) {
        list[i].firstElementChild.click();
        wait(500);
        console.log('A skill was endorsed')
    }
    console.log('Endorse is completed')
}

chrome.contextMenus.create({
    // "id": "linkedin",
    "title": "Endorse",
    "onclick": endorse // A callback function
});

// chrome.contextMenus.onClicked.addListener(function(info, tab) {
//     if (info.menuItemId === "linkedin") {
//         endorse();
//     }
// });
