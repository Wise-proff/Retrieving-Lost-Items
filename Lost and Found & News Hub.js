// Get elements
const lostItemForm = document.getElementById('report-lost-item');
const foundItemForm = document.getElementById('report-found-item');
const lostFoundListings = document.getElementById('lost-found-listings');
const newsForm = document.getElementById('submit-news-announcement');
const newsFeed = document.getElementById('news-feed');

// Arrays to store lost/found items and news
let lostItems = [];
let foundItems = [];
let news = [];

// Function to add lost item
function addLostItem(itemName, itemDescription) {
    lostItems.push({ name: itemName, description: itemDescription });
    updateLostFoundListings();
}

// Function to add found item
function addFoundItem(itemName, itemDescription) {
    foundItems.push({ name: itemName, description: itemDescription });
    updateLostFoundListings();
}

// Function to update lost/found listings
function updateLostFoundListings() {
    lostFoundListings.innerHTML = '';
    lostItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Lost: ${item.name} - ${item.description}`;
        lostFoundListings.appendChild(li);
    });
    foundItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Found: ${item.name} - ${item.description}`;
        lostFoundListings.appendChild(li);
    });
}

// Function to add news
function addNews(title, content) {
    news.push({ title: title, content: content });
    updateNewsFeed();
}

// Function to update news feed
function updateNewsFeed() {
    newsFeed.innerHTML = '';
    news.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<h4>${item.title}</h4><p>${item.content}</p>`;
        newsFeed.appendChild(li);
    });
}

// Event listeners for form submissions
lostItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const itemDescription = document.getElementById('item-description').value;
    addLostItem(itemName, itemDescription);
    lostItemForm.reset();
});

foundItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = document.getElementById('found-item-name').value;
    const itemDescription = document.getElementById('found-item-description').value;
    addFoundItem(itemName, itemDescription);
    foundItemForm.reset();
});

newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('news-title').value;
    const content = document.getElementById('news-content').value;
    addNews(title, content);
    newsForm.reset();
});