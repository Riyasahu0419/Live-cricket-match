document.addEventListener('DOMContentLoaded', function () {
    // Get tabs and tab contents
    const tabs = document.querySelectorAll('.link');
    const tabContents = document.querySelectorAll('.tab');

    // Add click event listener to each tab
    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
            // Hide all tab contents
            tabContents.forEach(function (content) {
                content.classList.add('hide');
            });

            // Remove 'active' class from all tabs
            tabs.forEach(function (t) {
                t.classList.remove('active');
            });

            // Show the clicked tab content
            tabContents[index].classList.remove('hide');

            // Add 'active' class to the clicked tab
            tab.classList.add('active');
        });
    });
});   