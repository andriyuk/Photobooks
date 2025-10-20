const gallery = document.getElementById("gallery");

// Тут вказуємо альбоми та фото вручну
const albums = [
    { name: "Кожзам", files: ["1.png", "2.png", "3.png"] },
    { name: "Кожзам з фотовставкою", files: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] },
    { name: "Поліграфічна", files: ["1.png", "2.png", "3.png"] },
    { name: "Тканина і велюр", files: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"] }
];

albums.forEach(album => {
    const albumTitle = document.createElement("h2");
    albumTitle.textContent = album.name.replace(/_/g, " ");
    gallery.appendChild(albumTitle);

    album.files.forEach(file => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";

        const img = document.createElement("img");
        img.src = `images/${album.name}/${file}`;
        img.alt = file;

        const desc = document.createElement("p");
        desc.textContent = file.replace(/\.[^/.]+$/, "");

        bookDiv.appendChild(img);
        bookDiv.appendChild(desc);
        gallery.appendChild(bookDiv);
    });
});