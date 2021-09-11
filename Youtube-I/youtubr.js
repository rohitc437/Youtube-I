
async function searchVideo(){

    let myvideo = document.getElementById('vdo');

    let name = document.getElementById('search').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${name}&type=video&key=AIzaSyBLAmZDlu7QuyhfYkjpM8WjRWOy0ljdk6I&maxResults=20`)

    let data = await res.json();
    console.log('data:', data)

    data.items.forEach(({ id: { videoId } }) => {


     let div = document.createElement("div")

        div.innerHTML = `<iframe width="350" height="250" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>`

        myvideo.append(div)

    });



}