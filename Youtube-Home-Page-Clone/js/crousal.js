let textCrousal = ["All", "Mixes", "Music", "Posts", "ACP Pradyman", "CSS", "Josh Talks", "Motivation", "Comedy", "Computer Programming", "Lectures", "Mobile Phones", "Live", "Gardening", "Satsang", "Bhajan Music", "Sales", "Recently uploaded", "Watched", "New to you"];

const text_crousal = document.getElementById("text-crousal");

textCrousal.forEach((item) => {
    console.log(item)
    let p = document.createElement("p");
    p.innerText = item;
    text_crousal.appendChild(p);
})

