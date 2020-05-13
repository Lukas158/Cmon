let pricingSection = document.querySelector('.pricing');

document.querySelector('a').addEventListener('click', function() {
    pricingSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});