function redirectToStore(appId, packageName, websiteUrl) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if the user is on iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "https://apps.apple.com/app/${appId}"; // App Store link
    }
    // Check if the user is on Android
    else if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=${packageName}"; // Google Play link
    }
    // Fallback for web or unsupported devices
    else {
        window.location.href = websiteUrl; // Optional fallback URL
    }
}


function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const isOpen = drawer.style.right === '0px';
    drawer.style.right = isOpen ? '-250px' : '0'; // Toggle drawer visibility
}
