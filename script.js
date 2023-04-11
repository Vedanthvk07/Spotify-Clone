console.log("welcome to spotify");

let audioElement= new Audio('1.mp3');
let Index=0;
let masterPlay=document.getElementById('masterPlay');
let myprogbar=document.getElementById('progress');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
masterSongName=document.getElementById('masterSongName');
let songs=[
    {songName:"Tum Hi Ho", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Pathaan", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Allah maaf kare", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Ek baar hi kiya", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Humdard", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Pasoori", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Sooraj dooba hai", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Tees maar khan", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"}
]

songItems.forEach((element, i)=> {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    index=i;
    audioElement.src=`songs/${index+1}.mp3`;
   // element.getElementsByClassName("duration")[0].innerText=audioElement.duration;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogbar.value=progress;
})
myprogbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogbar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        Index=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`songs/${Index+1}.mp3`;
        masterSongName.innerText = songs[Index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

})
}
document.getElementById('next').addEventListener('click', ()=>{
    if(Index>=7){
        Index = 0
    }
    else{
        Index += 1;
    }
    audioElement.src = `songs/${Index+1}.mp3`;
    masterSongName.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(Index<=0){
        Index = 0
    }
    else{
        Index -= 1;
    }
    audioElement.src = `songs/${Index+1}.mp3`;
    masterSongName.innerText = songs[Index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
