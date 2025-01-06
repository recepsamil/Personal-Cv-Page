
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(progressBar => {
        const percentage = progressBar.getAttribute("data-percentage");
        progressBar.style.width = percentage + "%";
    });
});
