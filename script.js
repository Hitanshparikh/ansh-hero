function windowClick(windowNumber) {
    let url;
    switch (windowNumber) {
        case 1:
            url = "https://hitanshparikh.com";  // Replace with your link for window 1
            break;
        case 2:
            url = "https://github.com/hitanshparikh";  // Replace with your link for window 2
            break;
        case 3:
            url = "https://hitanshparikh.github.io/old-website";  // Replace with your link for window 3
            break;
        default:
            url = "#";  // Default action or URL if needed
    }
    window.location.href = url;  // Opens link in a new tab
}

